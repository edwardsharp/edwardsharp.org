import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import { constants, createReadStream } from "node:fs";
import {
  appendFile,
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { escapeHTML } from "./import-social.ts";

type Exif = Record<string, string>;
type Coordinates = { latitude: number; longitude: number };
export interface ImageImportOptions {
  directory: string;
  dateSource: "created" | "exif";
  photosets: string[];
  location: boolean;
  videos: boolean;
  dryRun: boolean;
}
interface Asset {
  filename: string;
  title: string;
  date: string;
  hash: string;
  video: boolean;
  location?: Coordinates;
}

const imageExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".bmp",
  ".gif",
  ".webp",
  ".heic",
  ".heif",
  ".tif",
  ".tiff",
  ".avif",
]);
const videoExtensions = new Set([".mov", ".mp4", ".m4v"]);
const help = `Usage: npm run import:images -- DIRECTORY [options]

Requires ImageMagick (magick); --videos also requires ffmpeg.
  --date-source created|exif  Default: created. Created mode prefers screenshot
                             or screen-recording filename dates, then birthtime.
                             EXIF mode requires DateTimeOriginal for images.
                             Dates without offsets use the machine's timezone;
                             set TZ=America/New_York explicitly when needed.
  --photoset NAME             Group a direct child folder into one photo post.
                             Repeatable. Uses its latest image date.
  --location                  Save GPS in PUBLIC post front matter (opt-in).
  --videos                    Convert recordings to H.264/AAC MP4 with posters.
                             Videos use filename dates, then birthtime.
  --dry-run                   Show planned posts without writing anything.
  --help                      Show this help.

Titles preserve filename stems; set titles use folder names. Screenshot files
receive the screenshot tag and screenshot-prefixed Markdown filenames; other
posts use photo/video prefixes with readable filename stems. Originals are
never modified. Copied images are
auto-oriented and stripped of profiles/EXIF, including GPS; BMP becomes PNG,
HEIC/TIFF becomes JPEG. Videos are limited to 1920px wide and must fit GitHub's
100 MB file limit. Hidden files and symlinks are ignored.

Content-based history protects edited, renamed, and deleted posts on reruns.
Changing a file or a set's membership creates a new post, never an update.
Filename collisions receive a short content-hash suffix, never an overwrite.
`;

function run(command: string, args: string[]): string {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
  });
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`${command} failed: ${result.stderr.trim()}`);
  if (result.stderr.trim()) console.warn(result.stderr.trim());
  return result.stdout;
}

function readExif(filename: string): Exif {
  const fields: Exif = {};
  for (const line of run("magick", [
    "identify",
    "-format",
    "%[EXIF:*]",
    filename,
  ]).split("\n")) {
    const match = /^exif:([^=]+)=(.*)$/.exec(line);
    if (match) fields[match[1]!] = match[2]!.trim();
  }
  return fields;
}

function captureDate(parts: string[], offset = ""): string {
  const [year, month, day, hour, minute, second] = parts.map(Number);
  const utc = new Date(Date.UTC(year!, month! - 1, day, hour, minute, second));
  if (
    utc.getUTCFullYear() !== year ||
    utc.getUTCMonth() + 1 !== month ||
    utc.getUTCDate() !== day ||
    utc.getUTCHours() !== hour ||
    utc.getUTCMinutes() !== minute ||
    utc.getUTCSeconds() !== second ||
    (offset && !/^[+-]\d{2}:\d{2}$/.test(offset))
  )
    throw new Error(`invalid capture date: ${parts.join("-")}${offset}`);
  const iso = `${parts.slice(0, 3).join("-")}T${parts.slice(3).join(":")}`;
  const date = new Date(`${iso}${offset}`);
  if (!Number.isFinite(date.getTime()))
    throw new Error(`invalid capture date: ${iso}${offset}`);
  if (
    !offset &&
    (date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day ||
      date.getHours() !== hour ||
      date.getMinutes() !== minute ||
      date.getSeconds() !== second)
  )
    throw new Error(`capture date falls in a local timezone gap: ${iso}`);
  return date.toISOString();
}

export function imageDate(
  filename: string,
  birthtime: Date,
  exif: Exif,
  source: "created" | "exif",
): string {
  if (source === "exif") {
    const match = /^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/.exec(
      exif.DateTimeOriginal ?? "",
    );
    if (!match)
      throw new Error(`missing/invalid EXIF DateTimeOriginal: ${filename}`);
    return captureDate(match.slice(1), exif.OffsetTimeOriginal);
  }
  const match =
    /^screen\s*(?:shot|recording) (\d{4})-(\d{2})-(\d{2}) at (\d{2})\.(\d{2})\.(\d{2})$/i.exec(
      basename(filename, extname(filename)),
    );
  if (match) return captureDate(match.slice(1));
  if (!Number.isFinite(birthtime.getTime()) || birthtime.getTime() <= 0)
    throw new Error(
      `file creation date unavailable: ${filename}; use EXIF mode`,
    );
  return birthtime.toISOString();
}

export function imageLocation(exif: Exif): Coordinates | undefined {
  if (exif.GPSLatitude === undefined && exif.GPSLongitude === undefined)
    return undefined;
  const coordinate = (
    value: string | undefined,
    ref: string | undefined,
    latitude: boolean,
  ) => {
    const parts = value?.split(",").map((part) => {
      if (!/^\s*\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?\s*$/.test(part))
        throw new Error("invalid GPS coordinate");
      const [numerator, denominator = "1"] = part.trim().split("/");
      return Number(numerator) / Number(denominator);
    });
    const [degrees, minutes, seconds] = parts ?? [];
    const limit = latitude ? 90 : 180;
    if (
      parts?.length !== 3 ||
      !parts.every(Number.isFinite) ||
      degrees! > limit ||
      minutes! >= 60 ||
      seconds! >= 60 ||
      !new RegExp(latitude ? "^[NS]$" : "^[EW]$").test(ref ?? "")
    )
      throw new Error("invalid/incomplete GPS coordinate");
    const result = degrees! + minutes! / 60 + seconds! / 3600;
    if (result > limit) throw new Error("GPS coordinate out of range");
    return Number((result * (ref === "S" || ref === "W" ? -1 : 1)).toFixed(7));
  };
  return {
    latitude: coordinate(exif.GPSLatitude, exif.GPSLatitudeRef, true),
    longitude: coordinate(exif.GPSLongitude, exif.GPSLongitudeRef, false),
  };
}

export function imagePostFilename(
  title: string,
  date: string,
  kind: "photo" | "video",
): string {
  const timestamp = new Date(date);
  if (!Number.isFinite(timestamp.getTime()))
    throw new Error(`invalid post date: ${date}`);
  const day = [
    timestamp.getFullYear(),
    String(timestamp.getMonth() + 1).padStart(2, "0"),
    String(timestamp.getDate()).padStart(2, "0"),
  ].join("-");
  const label =
    kind === "photo" && /^screen\s*shot\b/i.test(title) ? "screenshot" : kind;
  const stem = title
    .replace(/^screen\s*(?:shot|recording) \d{4}-\d{2}-\d{2} at /i, "")
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  if (!stem) throw new Error(`post title needs a usable filename: ${title}`);
  return `${day}-${label}-${stem}.md`;
}

async function hashFile(filename: string): Promise<string> {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(filename)) hash.update(chunk);
  return hash.digest("hex");
}

async function optionalText(filename: string): Promise<string> {
  try {
    return await readFile(filename, "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT")
      return "";
    throw error;
  }
}

function stripImage(input: string, output: string): void {
  run("magick", [
    input,
    "-auto-orient",
    "-strip",
    "-define",
    "png:exclude-chunks=all",
    output,
  ]);
  if (
    /^  Profiles:/m.test(
      run("magick", ["identify", "-ping", "-verbose", output]),
    ) ||
    run("magick", ["identify", "-format", "%[EXIF:*]", output]).trim()
  )
    throw new Error(`image metadata profiles remain: ${output}`);
}

async function collect(
  options: ImageImportOptions,
): Promise<{ title: string; assets: Asset[]; set: boolean }[]> {
  const directory = resolve(options.directory);
  const children = await readdir(directory, { withFileTypes: true });
  for (const name of options.photosets)
    if (!children.some((child) => child.isDirectory() && child.name === name))
      throw new Error(
        `photoset must name an existing direct child directory: ${name}`,
      );
  const groups: { title: string; assets: Asset[]; set: boolean }[] = [];
  async function walk(
    folder: string,
    set?: { title: string; assets: Asset[]; set: boolean },
  ) {
    for (const entry of (await readdir(folder, { withFileTypes: true })).sort(
      (a, b) => a.name.localeCompare(b.name),
    )) {
      if (entry.name.startsWith(".")) continue;
      const filename = join(folder, entry.name);
      if (entry.isDirectory()) {
        const group =
          folder === directory && options.photosets.includes(entry.name)
            ? { title: entry.name, assets: [], set: true }
            : set;
        if (group && group !== set) groups.push(group);
        await walk(filename, group);
        continue;
      }
      const extension = extname(filename).toLowerCase();
      const video = videoExtensions.has(extension);
      if (
        !entry.isFile() ||
        (!imageExtensions.has(extension) && !video) ||
        (video && !options.videos)
      ) {
        console.info(`skipping unsupported/disabled file: ${filename}`);
        continue;
      }
      if (set && video)
        throw new Error(`photo set contains a video: ${filename}`);
      const exif = video ? {} : readExif(filename);
      if (!video && options.dateSource === "exif" && !exif.OffsetTimeOriginal)
        console.warn(
          `EXIF has no capture offset; using machine timezone for ${filename}`,
        );
      const asset: Asset = {
        filename,
        title: basename(filename, extname(filename)),
        date: imageDate(
          filename,
          (await stat(filename)).birthtime,
          exif,
          video ? "created" : options.dateSource,
        ),
        hash: await hashFile(filename),
        video,
      };
      if (!video && options.location) {
        const location = imageLocation(exif);
        if (location) asset.location = location;
      }
      if (set) set.assets.push(asset);
      else groups.push({ title: asset.title, assets: [asset], set: false });
    }
  }
  await walk(directory);
  for (const group of groups) {
    if (!group.assets.length) throw new Error(`empty photoset: ${group.title}`);
    group.assets.sort(
      (a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title),
    );
  }
  return groups;
}

export async function importImages(
  options: ImageImportOptions,
  root = fileURLToPath(new URL("../../", import.meta.url)),
): Promise<{ imported: number; skipped: number }> {
  const groups = await collect(options);
  const historyFile = join(root, "src", "ts", "image-import-history.jsonl");
  const history = new Set<string>();
  for (const line of (await optionalText(historyFile))
    .split("\n")
    .filter(Boolean)) {
    const id: unknown = JSON.parse(line);
    if (
      typeof id !== "string" ||
      !/^local-(photo|video|set)-[a-f0-9]{64}$/.test(id)
    )
      throw new Error(`invalid image import history: ${historyFile}`);
    history.add(id);
  }
  const recorded = new Set(history);
  const postsDir = join(root, "content", "_posts");
  let postFiles: string[];
  try {
    postFiles = await readdir(postsDir, { recursive: true });
  } catch (error) {
    if (!(error instanceof Error && "code" in error && error.code === "ENOENT"))
      throw error;
    postFiles = [];
  }
  for (const filename of postFiles) {
    if (!filename.endsWith(".md")) continue;
    const match =
      /^source_id: "(local-(?:photo|video|set)-[a-f0-9]{64})"$/m.exec(
        await readFile(join(postsDir, filename), "utf8"),
      );
    if (match) history.add(match[1]!);
  }
  let imported = 0;
  let skipped = 0;
  for (const group of groups) {
    const video = group.assets[0]!.video;
    const kind = video ? "video" : "photo";
    const digest = group.set
      ? createHash("sha256")
          .update(
            group.assets
              .map((asset) => asset.hash)
              .sort()
              .join("\n"),
          )
          .digest("hex")
      : group.assets[0]!.hash;
    const id = `local-${group.set ? "set" : kind}-${digest}`;
    if (history.has(id)) {
      if (!options.dryRun && !recorded.has(id)) {
        await mkdir(dirname(historyFile), { recursive: true });
        await appendFile(historyFile, `${JSON.stringify(id)}\n`, { flag: "a" });
        recorded.add(id);
      }
      skipped++;
      continue;
    }
    const date = group.assets.at(-1)!.date;
    console.info(
      `${options.dryRun ? "would import" : "importing"} ${date} ${kind}: ${group.title} (${group.assets.length} file${group.assets.length === 1 ? "" : "s"})`,
    );
    if (options.dryRun) continue;
    const readableName = imagePostFilename(group.title, date, kind);
    const year = readableName.slice(0, 4);
    const postName = postFiles.includes(join(year, readableName))
      ? `${readableName.slice(0, -3)}-${digest.slice(0, 12)}.md`
      : readableName;
    const temporary = await mkdtemp(join(tmpdir(), "blog-images-"));
    try {
      const outputs: { local: string; url: string }[] = [];
      const locations: ({ image: string } & Coordinates)[] = [];
      const body: string[] = [];
      let preview = "";
      for (const [index, asset] of group.assets.entries()) {
        const sourceExtension = extname(asset.filename).toLowerCase();
        const extension = video
          ? ".mp4"
          : [".heic", ".heif", ".tif", ".tiff", ".jpeg"].includes(
                sourceExtension,
              )
            ? ".jpg"
            : sourceExtension === ".bmp"
              ? ".png"
              : sourceExtension;
        const name = `${id}-${index + 1}${extension}`;
        const local = join(temporary, name);
        const url = `/content/media/${year}/${name}`;
        const liquidURL = (path: string) => `{{ '${path}' | relative_url }}`;
        if (video) {
          run("ffmpeg", [
            "-nostdin",
            "-v",
            "error",
            "-n",
            "-i",
            asset.filename,
            "-map",
            "0:v:0",
            "-map",
            "0:a?",
            "-map_metadata",
            "-1",
            "-map_metadata:s",
            "-1",
            "-map_chapters",
            "-1",
            "-vf",
            "scale=trunc(min(1920\\,iw)/2)*2:-2",
            "-c:v",
            "libx264",
            "-preset",
            "medium",
            "-crf",
            "24",
            "-pix_fmt",
            "yuv420p",
            "-c:a",
            "aac",
            "-b:a",
            "128k",
            "-movflags",
            "+faststart",
            local,
          ]);
          const poster = join(temporary, `${id}-poster.jpg`);
          const rawPoster = join(temporary, "poster.jpg");
          run("ffmpeg", [
            "-nostdin",
            "-v",
            "error",
            "-n",
            "-i",
            local,
            "-frames:v",
            "1",
            "-update",
            "1",
            rawPoster,
          ]);
          stripImage(rawPoster, poster);
          preview = `/content/media/${year}/${basename(poster)}`;
          outputs.push({ local: poster, url: preview });
          body.push(
            `<video controls playsinline preload="metadata" poster="${liquidURL(preview)}"><source src="${liquidURL(url)}" type="video/mp4"><a href="${liquidURL(url)}">download video</a></video>`,
          );
        } else {
          stripImage(asset.filename, local);
          preview ||= url;
          body.push(
            `<p><img src="${liquidURL(url)}" alt="${escapeHTML(asset.title)}" loading="lazy" decoding="async"></p>`,
          );
        }
        if (asset.location) locations.push({ image: url, ...asset.location });
        outputs.push({ local, url });
      }
      const tags = [kind];
      if (group.assets.some((asset) => /^screen\s*shot\b/i.test(asset.title)))
        tags.push("screenshot");
      const fields: Record<string, unknown> = {
        title: group.title,
        date,
        date_precision: "second",
        tags,
        permalink: `/post/${id}/`,
        source_id: id,
        kind,
        preview_image: preview,
        preview_alt: group.title,
      };
      if (locations.length) {
        if (group.set) fields.locations = locations;
        else fields.location = group.assets[0]!.location;
      }
      for (const output of outputs) {
        if ((await stat(output.local)).size >= 100_000_000)
          throw new Error(
            `converted file exceeds GitHub's 100 MB limit: ${output.local}`,
          );
        const destination = join(root, output.url.slice(1));
        await mkdir(dirname(destination), { recursive: true });
        try {
          await copyFile(output.local, destination, constants.COPYFILE_EXCL);
        } catch (error) {
          if (!(
            error instanceof Error &&
            "code" in error &&
            error.code === "EEXIST"
          ))
            throw error;
          if ((await hashFile(output.local)) !== (await hashFile(destination)))
            throw new Error(
              `refusing to overwrite existing media: ${destination}`,
            );
          console.info(`retaining identical existing media: ${destination}`);
        }
      }
      const postFile = join(postsDir, year, postName);
      await mkdir(dirname(postFile), { recursive: true });
      await writeFile(
        postFile,
        `---\n${Object.entries(fields)
          .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
          .join("\n")}\n---\n${body.join("\n")}\n`,
        { flag: "wx" },
      );
      postFiles.push(join(year, postName));
      await mkdir(dirname(historyFile), { recursive: true });
      await appendFile(historyFile, `${JSON.stringify(id)}\n`, { flag: "a" });
      history.add(id);
      recorded.add(id);
      imported++;
    } finally {
      await rm(temporary, { recursive: true });
    }
  }
  console.info(
    `${imported} imported, ${skipped} skipped${options.dryRun ? " (dry run)" : ""}`,
  );
  return { imported, skipped };
}

if (import.meta.main) {
  try {
    const { values, positionals } = parseArgs({
      allowPositionals: true,
      options: {
        "date-source": { type: "string", default: "created" },
        photoset: { type: "string", multiple: true, default: [] },
        location: { type: "boolean", default: false },
        videos: { type: "boolean", default: false },
        "dry-run": { type: "boolean", default: false },
        help: { type: "boolean", default: false },
      },
    });
    if (values.help) console.info(help);
    else {
      const dateSource = values["date-source"];
      if (
        positionals.length !== 1 ||
        (dateSource !== "created" && dateSource !== "exif")
      )
        throw new Error(help);
      await importImages({
        directory: positionals[0]!,
        dateSource,
        photosets: values.photoset,
        location: values.location,
        videos: values.videos,
        dryRun: values["dry-run"],
      });
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
