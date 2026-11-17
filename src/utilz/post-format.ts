import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

export async function siteTimezone(root: string): Promise<string | undefined> {
  let text: string;
  try {
    text = await readFile(join(root, "_config.yml"), "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT")
      return undefined;
    throw error;
  }
  const config: unknown = parse(text);
  if (!config || typeof config !== "object")
    throw new Error("site configuration must be a YAML mapping");
  if (!("timezone" in config) || config.timezone === null) return undefined;
  if (typeof config.timezone !== "string")
    throw new Error("site timezone must be a string");
  return config.timezone;
}

export function postDay(date: string, timeZone?: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(date));
  return ["year", "month", "day"]
    .map((type) => {
      const value = parts.find((part) => part.type === type)?.value;
      if (!value) throw new Error(`cannot determine post date: ${date}`);
      return value;
    })
    .join("-");
}

const sourceHosts = [
  "youtube.com",
  "youtu.be",
  "vimeo.com",
  "archive.org",
  "soundcloud.com",
  "bandcamp.com",
  "flickr.com",
  "jsfiddle.net",
];

export function sourceURL(value: string): string | undefined {
  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  )
    throw new Error(`invalid source URL: ${value}`);
  return sourceHosts.some(
    (host) => url.hostname === host || url.hostname.endsWith(`.${host}`),
  )
    ? value
    : undefined;
}

export function classifyPost(
  kind: string,
  tags: readonly string[],
  title: string,
): { kind: string; tags: string[] } {
  const labels = tags.map((tag) => tag.trim().replace(/^#/, "").toLowerCase());
  if (kind === "doodle" || labels.includes("doodle")) kind = "doodle";
  else if (
    kind === "screenshot" ||
    labels.includes("screenshot") ||
    /(?:^|\s)screen\s*shot\b/i.test(title)
  )
    kind = "screenshot";
  return {
    kind,
    tags: tags.filter(
      (_, index) => !["screenshot", "doodle"].includes(labels[index]!),
    ),
  };
}

function slug(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .slice(0, 60)
    .replace(/^-+|-+$/g, "");
}

export function titleSlug(title: string): string {
  const result = slug(title);
  if (!result) throw new Error(`post title needs a usable filename: ${title}`);
  return result;
}

export function postStem(
  title: string,
  day: string,
  kind: string,
  sourceId?: string,
): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day))
    throw new Error(`post filename needs a calendar date: ${day}`);
  let label = title
    .trim()
    .replace(/https?:\/\/\S+/gi, "")
    .trim();
  if (sourceId) label = label.replaceAll(sourceId, "").trim();
  label = label
    .replace(
      /^(?:post|photo|video|entry|link|audio|code|screenshot|doodle|ello|instagram|twitter|tumblr|youtube|vimeo|flickr|jsfiddle)\s*\/\s*\d{4}-\d{2}-\d{2},?\s*/i,
      `${kind} `,
    )
    .replace(
      /(?:^|\s)screen\s*(?:shot|recording)\s+\d{4}[- _]\d{2}[- _]\d{2}\s+at\s+[\d.: ]+(?:am|pm)?$/i,
      "",
    )
    .trim();
  const generated =
    /^(?:(?:img|dsc[nf]?|image|photo|video|pxl|fullsizerender)[\s_.(-]*[\d\s_().:TZ-]+|screen\s*(?:shot|recording)[\s_().:-]*[\d\s_().:TZ-]+(?:\s*(?:at|am|pm)[\d\s_().:-]*)*)(?:\.(?:jpe?g|png|heic|mov|mp4))?$/i;
  if (
    generated.test(label) ||
    /^(?:temp|tmp)\d+.*\.(?:jpe?g|png|gif)$/i.test(label) ||
    /^https?(?:www)?(?:youtube|youtu\.?be|vimeo|jsfiddle)/i.test(label) ||
    /^(?:youtube|vimeo|flickr|jsfiddle|instagram|twitter|ello|untitled|no title)$/i.test(
      label,
    ) ||
    /^[a-f0-9]{16,}$/i.test(label) ||
    /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(label)
  )
    label = "";
  return `${day}-${slug(label) || titleSlug(kind)}`;
}

export async function availablePostStem(
  root: string,
  desired: string,
): Promise<string> {
  const year = desired.slice(0, 4);
  const entries = new Set<string>();
  for (const directory of ["content/_posts", "content/media"]) {
    try {
      for (const name of await readdir(join(root, directory, year)))
        entries.add(name.normalize("NFC").toLowerCase());
    } catch (error) {
      if (!(
        error instanceof Error &&
        "code" in error &&
        error.code === "ENOENT"
      ))
        throw error;
    }
  }
  let candidate = desired;
  let sequence = 2;
  function occupied(stem: string): boolean {
    const escaped = stem
      .normalize("NFC")
      .toLowerCase()
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(
      `^${escaped}(?:-(?:(?:image-)?[1-9]\\d*|poster|demo))?\\.[^.]+$`,
    );
    return [...entries].some((name) => pattern.test(name));
  }
  while (occupied(candidate)) candidate = `${desired}-${sequence++}`;
  return candidate;
}

export function postFrontMatter(fields: Record<string, unknown>): string {
  const first = ["kind", "title", "date", "date_precision", "preview_image"];
  const keys = [
    ...first.filter((key) => fields[key] !== undefined),
    ...Object.keys(fields).filter(
      (key) => !first.includes(key) && key !== "tags",
    ),
    ...(fields.tags === undefined ? [] : ["tags"]),
  ];
  return `---\n${keys
    .map((key) => `${key}: ${JSON.stringify(fields[key])}`)
    .join("\n")}\n---\n`;
}
