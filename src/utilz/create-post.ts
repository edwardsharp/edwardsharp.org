import { constants } from "node:fs";
import { execFile } from "node:child_process";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rm,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import { homedir, tmpdir } from "node:os";
import { dirname, extname, isAbsolute, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { casual } from "chrono-node";
import { parseDocument } from "yaml";
import { locationKey, tagKey } from "../ts/feed-filters.ts";
import {
  imageOutputExtension,
  stripImage,
  titleSlug,
  transcodeVideo,
} from "./import-images.ts";
import { escapeHTML, sourceDate } from "./import-social.ts";
import {
  availablePostStem,
  classifyPost,
  postDay,
  postFrontMatter,
  postStem,
  siteTimezone,
} from "./post-format.ts";

const execute = promisify(execFile);

export interface PostDate {
  date: string;
  precision: "year" | "month" | "day" | "minute" | "second";
  notes: string[];
}
export class DateInputError extends Error {}

function calendarDate(year: number, month: number, day: number): string {
  const date = new Date(0);
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCFullYear(year, month - 1, day);
  if (
    year < 1 ||
    year > 9999 ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  )
    throw new DateInputError("invalid calendar date");
  return date.toISOString().slice(0, 10);
}

export function parsePostDate(
  text: string,
  reference = new Date(),
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
): PostDate {
  new Intl.DateTimeFormat("en", { timeZone: timezone });
  const input = text.trim();
  if (/^(today|now)$/i.test(input)) {
    const date = new Date(reference);
    date.setUTCSeconds(0, 0);
    if (!Number.isFinite(date.getTime()))
      throw new DateInputError("invalid reference date");
    return {
      date: date.toISOString(),
      precision: "minute",
      notes: ["current time rounded to the minute"],
    };
  }
  const partial = /^(\d{4})(?:[-/](\d{1,2}))?$/.exec(input);
  if (partial) {
    const month = partial[2];
    return {
      date: calendarDate(Number(partial[1]), month ? Number(month) : 1, 1),
      precision: month ? "month" : "year",
      notes: [month ? "day defaults to 1" : "month/day default to January 1"],
    };
  }
  const previous = process.env.TZ;
  // Chrono interprets offset-free times in the process timezone.
  process.env.TZ = timezone;
  try {
    const results = casual.parse(input, reference);
    const result = results[0];
    if (
      results.length !== 1 ||
      !result ||
      result.end ||
      result.index !== 0 ||
      result.text.trim() !== input
    )
      throw new DateInputError(
        "enter one date: e.g. Sep 30 2014, September 2014, yesterday, or 2014-09-30 7pm",
      );
    const components = result.start;
    const year = components.get("year");
    const month = components.get("month");
    const day = components.get("day");
    if (year === null || month === null || day === null)
      throw new DateInputError("could not resolve a calendar date");
    const dated = calendarDate(year, month, day);
    const timed = components.isCertain("hour");
    const notes: string[] = [];
    if (!components.isCertain("year")) notes.push(`year inferred as ${year}`);
    if (!components.isCertain("day")) notes.push(`day inferred as ${day}`);
    if (!timed) {
      return {
        date: dated,
        precision: components.isCertain("day")
          ? "day"
          : components.isCertain("month")
            ? "month"
            : "year",
        notes,
      };
    }
    const timestamp = result.date();
    if (!Number.isFinite(timestamp.getTime()))
      throw new DateInputError("invalid timestamp");
    if (!components.isCertain("timezoneOffset")) {
      if (
        timestamp.getFullYear() !== year ||
        timestamp.getMonth() !== month - 1 ||
        timestamp.getDate() !== day ||
        timestamp.getHours() !== components.get("hour")
      )
        throw new DateInputError(
          `that local time does not exist in ${timezone}; specify an offset`,
        );
      notes.push(`offset-free time uses ${timezone}`);
      const nextHour = new Date(timestamp.getTime() + 60 * 60 * 1000);
      if (nextHour.getHours() === timestamp.getHours())
        notes.push(
          "local time occurs twice during a clock change; specify an offset to disambiguate",
        );
    }
    const precision = components.isCertain("second") ? "second" : "minute";
    if (precision === "minute") timestamp.setUTCSeconds(0, 0);
    return { date: timestamp.toISOString(), precision, notes };
  } finally {
    if (previous === undefined) delete process.env.TZ;
    else process.env.TZ = previous;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function yamlObject(text: string, filename: string): Record<string, unknown> {
  const document = parseDocument(text);
  if (document.errors.length)
    throw new Error(
      `${filename}: ${document.errors.map((error) => error.message).join("; ")}`,
    );
  for (const warning of document.warnings)
    console.warn(`${filename}: ${warning.message}`);
  const value: unknown = document.toJS();
  if (!isRecord(value)) throw new Error(`${filename}: expected a YAML mapping`);
  return value;
}

export interface PostCatalog {
  kinds: string[];
  tags: string[];
  locations: string[];
  timezone: string;
}

export async function readPostCatalog(root: string): Promise<PostCatalog> {
  const config = yamlObject(
    await readFile(join(root, "_config.yml"), "utf8"),
    "_config.yml",
  );
  const directory = join(root, "content/_posts");
  const kinds = new Set<string>(["entry"]);
  const tags = new Map<string, { label: string; count: number }>();
  const locations = new Map<string, { label: string; count: number }>();
  function add(
    values: string[],
    counts: typeof tags,
    key: (text: string) => string,
  ) {
    const unique = new Map(
      values.map((value) => [key(value.trim()), value.trim()]),
    );
    for (const [identity, value] of unique) {
      if (!identity) continue;
      const existing = counts.get(identity);
      counts.set(identity, {
        label: existing?.label ?? value,
        count: (existing?.count ?? 0) + 1,
      });
    }
  }
  for (const relative of await readdir(directory, { recursive: true })) {
    if (!relative.endsWith(".md")) continue;
    const filename = join(directory, relative);
    const text = await readFile(filename, "utf8");
    const header = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1];
    if (header === undefined)
      throw new Error(`missing front matter: ${filename}`);
    const data = yamlObject(header, filename);
    if (data.kind !== undefined && typeof data.kind !== "string")
      throw new Error(`invalid kind: ${filename}`);
    if (typeof data.kind === "string" && data.kind.trim())
      kinds.add(data.kind.trim());
    const postTags: unknown =
      typeof data.tags === "string"
        ? data.tags.split(/\s+/)
        : (data.tags ?? []);
    if (
      !Array.isArray(postTags) ||
      !postTags.every((tag: unknown) => typeof tag === "string")
    )
      throw new Error(`invalid tags: ${filename}`);
    add(postTags, tags, tagKey);
    const names: string[] = [];
    if (data.location_name !== undefined && data.location_name !== null) {
      if (typeof data.location_name !== "string")
        throw new Error(`invalid location_name: ${filename}`);
      names.push(data.location_name);
    }
    if (data.locations !== undefined) {
      if (!Array.isArray(data.locations))
        throw new Error(`invalid locations: ${filename}`);
      for (const place of data.locations) {
        if (place && typeof place === "object" && "name" in place) {
          if (typeof place.name !== "string")
            throw new Error(`invalid location name: ${filename}`);
          names.push(place.name);
        }
      }
    }
    add(names, locations, locationKey);
  }
  const labels = (counts: typeof tags) =>
    [...counts.values()]
      .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label))
      .map(({ label }) => label);
  return {
    kinds: [...kinds].sort(),
    tags: labels(tags),
    locations: labels(locations),
    timezone:
      typeof config.timezone === "string"
        ? config.timezone
        : Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
}

export function expandPath(text: string, root: string): string {
  let path = text.trim();
  if (
    (path.startsWith('"') && path.endsWith('"')) ||
    (path.startsWith("'") && path.endsWith("'"))
  )
    path = path.slice(1, -1);
  else path = path.replace(/\\([ ()'"\[\]#&!])/g, "$1");
  if (path.startsWith("file://")) return fileURLToPath(path);
  if (path === "~") return homedir();
  if (path.startsWith("~/")) path = join(homedir(), path.slice(2));
  return resolve(root, path);
}

export async function mediaCreationDate(filename: string): Promise<string> {
  const info = await stat(filename);
  if (!info.isFile()) throw new Error(`media must be a file: ${filename}`);
  if (!Number.isFinite(info.birthtimeMs) || info.birthtimeMs <= 0)
    throw new Error(`file creation date unavailable: ${filename}`);
  return info.birthtime.toISOString();
}

export function githubRepositoryURL(value: string): string {
  const url = new URL(value);
  const match = /^\/([a-z\d-]+)\/([a-z\d_.-]+)\/?$/i.exec(url.pathname);
  const repo = match?.[2]?.replace(/\.git$/i, "");
  if (
    !["https:", "http:"].includes(url.protocol) ||
    url.hostname.toLowerCase() !== "github.com" ||
    url.port ||
    url.username ||
    url.password ||
    !match ||
    !repo ||
    repo === "." ||
    repo === ".."
  )
    throw new Error(
      "enter a GitHub repository URL: https://github.com/owner/repo",
    );
  return `https://github.com/${match[1]}/${repo}`;
}

async function githubAPI(endpoint: string): Promise<unknown> {
  const { stdout } = await execute("gh", ["api", "--method", "GET", endpoint], {
    maxBuffer: 16 * 1024 * 1024,
  });
  return JSON.parse(stdout);
}

export interface GitHubRepository {
  url: string;
  createdAt: string;
  private: boolean;
}

export async function readGitHubRepository(
  value: string,
  request = githubAPI,
): Promise<GitHubRepository> {
  const url = githubRepositoryURL(value);
  const data = await request(`repos/${new URL(url).pathname.slice(1)}`);
  if (
    !isRecord(data) ||
    typeof data.html_url !== "string" ||
    typeof data.created_at !== "string" ||
    !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ$/.test(data.created_at) ||
    !Number.isFinite(Date.parse(data.created_at)) ||
    new Date(data.created_at).toISOString().replace(".000Z", "Z") !==
      data.created_at ||
    typeof data.private !== "boolean"
  )
    throw new Error("GitHub returned invalid repository metadata");
  return {
    url: githubRepositoryURL(data.html_url),
    createdAt: new Date(data.created_at).toISOString(),
    private: data.private,
  };
}

export async function readGitHubReadme(
  value: string,
  request = githubAPI,
): Promise<string> {
  const url = githubRepositoryURL(value);
  const data = await request(`repos/${new URL(url).pathname.slice(1)}/readme`);
  if (
    !isRecord(data) ||
    data.encoding !== "base64" ||
    typeof data.content !== "string" ||
    typeof data.name !== "string"
  )
    throw new Error("GitHub returned invalid README content");
  if (!/\.(?:md|markdown|mdown)$/i.test(data.name))
    throw new Error(`repository README is not Markdown: ${data.name}`);
  const encoded = data.content.replace(/\s+/g, "");
  if (!/^(?:[a-z\d+/]{4})*(?:[a-z\d+/]{2}==|[a-z\d+/]{3}=)?$/i.test(encoded))
    throw new Error("GitHub returned invalid base64 README content");
  return new TextDecoder("utf-8", { fatal: true }).decode(
    Buffer.from(encoded, "base64"),
  );
}

export const postMediaExtensions: Record<
  "video" | "audio",
  ReadonlySet<string>
> = {
  video: new Set([
    ".mov",
    ".mp4",
    ".m4v",
    ".webm",
    ".mkv",
    ".avi",
    ".mpeg",
    ".mpg",
  ]),
  audio: new Set([
    ".mp3",
    ".m4a",
    ".aac",
    ".wav",
    ".aiff",
    ".aif",
    ".flac",
    ".ogg",
    ".opus",
  ]),
};

export interface NewPost {
  title: string;
  kind: string;
  date: PostDate;
  tags: string[];
  location_name?: string;
  images: { filename: string; alt: string }[];
  media?: { filename: string; kind: "video" | "audio" };
  source?: string;
  body?: string;
}

export async function createPost(root: string, post: NewPost): Promise<string> {
  const title = post.title.trim();
  const kind = post.kind.trim();
  titleSlug(title);
  titleSlug(kind);
  if (post.media && post.media.kind !== kind)
    throw new Error("media kind must match the post kind");
  const normalized = sourceDate(post.date.date);
  const timed =
    post.date.precision === "second" || post.date.precision === "minute";
  if (timed !== (normalized.precision === "second"))
    throw new Error("post date and precision disagree");
  const day = normalized.date.slice(0, 10);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(day) ||
    !["year", "month", "day", "minute", "second"].includes(post.date.precision)
  )
    throw new Error("invalid post date or precision");
  calendarDate(
    Number(day.slice(0, 4)),
    Number(day.slice(5, 7)),
    Number(day.slice(8, 10)),
  );
  if (
    post.date.precision === "minute" &&
    new Date(normalized.date).getTime() % 60_000 !== 0
  )
    throw new Error("minute-precision timestamps must have zero seconds");
  if (post.date.precision === "month" && day.slice(8) !== "01")
    throw new Error("month-precision dates must use the first day");
  if (post.date.precision === "year" && day.slice(5) !== "01-01")
    throw new Error("year-precision dates must use January 1");
  const filenameDay = postDay(normalized.date, await siteTimezone(root));
  const year = filenameDay.slice(0, 4);
  const directory = join(root, "content/_posts", year);
  const classified = classifyPost(kind, post.tags, title);
  const basename = await availablePostStem(
    root,
    postStem(title, filenameDay, classified.kind),
  );
  const temporary = await mkdtemp(join(tmpdir(), "journal-post-"));
  const published: string[] = [];
  let written = false;
  try {
    const outputs: { filename: string; url: string; alt: string }[] = [];
    for (const [index, image] of post.images.entries()) {
      if (!isAbsolute(image.filename) || !(await stat(image.filename)).isFile())
        throw new Error(
          `image must be an existing absolute file path: ${image.filename}`,
        );
      imageOutputExtension(image.filename);
      const suffix =
        post.media && index === 0
          ? "-poster"
          : post.media || post.images.length > 1
            ? `-image-${index + 1}`
            : "";
      const name = `${basename}${suffix}.webp`;
      const filename = join(temporary, name);
      stripImage(image.filename, filename);
      if ((await stat(filename)).size >= 100_000_000)
        throw new Error(
          `image exceeds GitHub's 100 MB limit: ${image.filename}`,
        );
      outputs.push({
        filename,
        url: `/content/media/${year}/${name}`,
        alt: image.alt,
      });
    }
    let mediaOutput: { filename: string; url: string } | undefined;
    if (post.media) {
      const media = post.media;
      if (!isAbsolute(media.filename) || !(await stat(media.filename)).isFile())
        throw new Error(
          `media must be an existing absolute file path: ${media.filename}`,
        );
      if (
        !postMediaExtensions[media.kind].has(
          extname(media.filename).toLowerCase(),
        )
      )
        throw new Error(`unsupported ${media.kind}: ${media.filename}`);
      const name = `${basename}.${media.kind === "video" ? "mp4" : "mp3"}`;
      const filename = join(temporary, name);
      if (media.kind === "video") transcodeVideo(media.filename, filename);
      else
        await execute("ffmpeg", [
          "-nostdin",
          "-v",
          "error",
          "-n",
          "-i",
          media.filename,
          "-map",
          "0:a:0",
          "-vn",
          "-map_metadata",
          "-1",
          "-map_metadata:s",
          "-1",
          "-map_chapters",
          "-1",
          "-c:a",
          "libmp3lame",
          "-q:a",
          "2",
          filename,
        ]);
      if ((await stat(filename)).size >= 100_000_000)
        throw new Error(
          `media exceeds GitHub's 100 MB limit: ${media.filename}`,
        );
      mediaOutput = { filename, url: `/content/media/${year}/${name}` };
    }
    const fields: Record<string, unknown> = {
      title,
      date: normalized.date,
      date_precision: post.date.precision,
      kind: classified.kind,
      tags: [
        ...new Map(
          classified.tags.map((tag) => [tagKey(tag), tag.trim()]),
        ).values(),
      ],
    };
    if (post.location_name?.trim())
      fields.location_name = post.location_name.trim();
    if (post.source) fields.source = githubRepositoryURL(post.source);
    if (kind === "code" && post.body !== undefined)
      fields.render_with_liquid = false;
    const preview = outputs[0];
    if (preview) {
      fields.preview_image = preview.url;
      fields.preview_alt = preview.alt;
    }
    const body = (post.media?.kind === "video" ? outputs.slice(1) : outputs)
      .map(
        ({ url, alt }) =>
          `![${escapeHTML(alt).replace(/[\\[\]]/g, "\\$&")}](${url})`,
      )
      .join("\n\n");
    const sections = [body];
    if (post.media && mediaOutput) {
      const url = `{{ '${mediaOutput.url}' | relative_url }}`;
      if (post.media.kind === "video") {
        const poster = preview
          ? ` poster="{{ '${preview.url}' | relative_url }}"`
          : "";
        sections.push(
          `<video controls playsinline preload="metadata"${poster}><source src="${url}" type="video/mp4"><a href="${url}">download video</a></video>`,
        );
      } else {
        sections.push(
          `<audio controls preload="metadata"><source src="${url}" type="audio/mpeg"><a href="${url}">download audio</a></audio>`,
        );
      }
    }
    if (post.body) sections.push(post.body);
    for (const output of [...outputs, ...(mediaOutput ? [mediaOutput] : [])]) {
      const destination = join(root, output.url.slice(1));
      await mkdir(dirname(destination), { recursive: true });
      const parent = await realpath(dirname(destination));
      if (!parent.startsWith(`${await realpath(root)}${sep}`))
        throw new Error(
          `media destination leaves the repository: ${destination}`,
        );
      await copyFile(output.filename, destination, constants.COPYFILE_EXCL);
      published.push(destination);
    }
    await mkdir(directory, { recursive: true });
    if (
      !(await realpath(directory)).startsWith(`${await realpath(root)}${sep}`)
    )
      throw new Error("post destination leaves the repository");
    const content = `${postFrontMatter(fields)}${sections.filter(Boolean).join("\n\n")}\n`;
    const destination = join(directory, `${basename}.md`);
    await writeFile(destination, content, { flag: "wx" });
    written = true;
    return destination;
  } finally {
    if (!written) for (const filename of published) await unlink(filename);
    await rm(temporary, { recursive: true });
  }
}
