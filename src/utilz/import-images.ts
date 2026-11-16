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
import { basename, dirname, extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { escapeHTML, sourceDate } from "./import-social.ts";

type Exif = Record<string, string>;
type Coordinates = { latitude: number; longitude: number };
export interface ImageImportOptions {
  directory: string;
  dateSource: "created" | "exif";
  photosets: string[];
  location: boolean;
  videos: boolean;
  dryRun: boolean;
  photosMetadata?: ReadonlyMap<string, PhotosMetadata>;
}
export interface PhotosMetadata {
  date: string;
  title: string;
  description: string;
  tags: string[];
  place: string | null;
  last_modified: string | null;
  needs_review?: boolean;
}
interface Asset {
  filename: string;
  title: string;
  date: string;
  hash: string;
  video: boolean;
  location?: Coordinates;
  photos?: PhotosMetadata;
}
interface ImageGroup {
  title: string;
  assets: Asset[];
  set: boolean;
}

export const imageExtensions: ReadonlySet<string> = new Set([
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
  const stem = titleSlug(
    title.replace(/^screen\s*(?:shot|recording) \d{4}-\d{2}-\d{2} at /i, ""),
  );
  return `${day}-${label}-${stem}.md`;
}

export function titleSlug(title: string): string {
  const stem = title
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  if (!stem) throw new Error(`post title needs a usable filename: ${title}`);
  return stem;
}

export function imageOutputExtension(filename: string): string {
  const extension = extname(filename).toLowerCase();
  if (!imageExtensions.has(extension))
    throw new Error(`unsupported image: ${filename}`);
  if ([".heic", ".heif", ".tif", ".tiff", ".jpeg"].includes(extension))
    return ".jpg";
  return extension === ".bmp" ? ".png" : extension;
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

export function stripImage(input: string, output: string): void {
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

async function collect(options: ImageImportOptions): Promise<ImageGroup[]> {
  const directory = resolve(options.directory);
  const children = await readdir(directory, { withFileTypes: true });
  for (const name of options.photosets)
    if (!children.some((child) => child.isDirectory() && child.name === name))
      throw new Error(
        `photoset must name an existing direct child directory: ${name}`,
      );
  const groups: ImageGroup[] = [];
  async function walk(folder: string, set?: ImageGroup) {
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
      const photos = options.photosMetadata?.get(filename);
      if (options.photosMetadata && !photos) {
        console.warn(
          `skipping image without prepared Photos metadata: ${filename}`,
        );
        continue;
      }
      let exif: Exif;
      try {
        exif = video ? {} : readExif(filename);
      } catch (error) {
        if (!options.photosMetadata) throw error;
        console.error(`SKIPPING unreadable Photos image: ${filename}`, error);
        continue;
      }
      if (
        !video &&
        !photos &&
        options.dateSource === "exif" &&
        !exif.OffsetTimeOriginal
      )
        console.warn(
          `EXIF has no capture offset; using machine timezone for ${filename}`,
        );
      const asset: Asset = {
        filename,
        title: photos?.title.trim() || basename(filename, extname(filename)),
        date:
          photos?.date ??
          imageDate(
            filename,
            (await stat(filename)).birthtime,
            exif,
            video ? "created" : options.dateSource,
          ),
        hash: await hashFile(filename),
        video,
        ...(photos ? { photos } : {}),
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
  const ready = groups.filter((group) => {
    if (!group.assets.length && options.photosMetadata) {
      console.warn(`skipping photoset with no usable images: ${group.title}`);
      return false;
    }
    return true;
  });
  for (const group of ready) {
    if (!group.assets.length) throw new Error(`empty photoset: ${group.title}`);
    group.assets.sort(compareCaptureTime);
  }
  return ready;
}

function compareCaptureTime(a: Asset, b: Asset): number {
  return (
    Date.parse(a.date) - Date.parse(b.date) ||
    a.title.localeCompare(b.title) ||
    a.filename.localeCompare(b.filename)
  );
}

export async function importImages(
  options: ImageImportOptions,
  root = fileURLToPath(new URL("../../", import.meta.url)),
): Promise<{ imported: number; skipped: number }> {
  const groups = await collect(options);
  if (options.photosMetadata && !groups.length)
    throw new Error("no usable Photos images; no posts written");
  const historyFile = join(root, "src", "utilz", "image-import-history.jsonl");
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
  async function remember(id: string) {
    history.add(id);
    if (!options.dryRun && !recorded.has(id)) {
      await mkdir(dirname(historyFile), { recursive: true });
      await appendFile(historyFile, `${JSON.stringify(id)}\n`, { flag: "a" });
      recorded.add(id);
    }
  }
  const postsDir = join(root, "content", "_posts");
  const referencedImages = new Set<string>();
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
    const text = await readFile(join(postsDir, filename), "utf8");
    const match =
      /^source_id: "(local-(?:photo|video|set)-[a-f0-9]{64})"$/m.exec(text);
    if (match) history.add(match[1]!);
    for (const match of text.matchAll(/\/content\/media\/[^"'()\s<>]+/g)) {
      const url = new URL(match[0], "https://local.invalid").pathname;
      if (
        url.startsWith("/content/media/") &&
        imageExtensions.has(extname(url).toLowerCase())
      )
        referencedImages.add(url);
    }
  }
  const publishedImages = new Map<string, string>();
  let indexed = false;
  async function existingImages() {
    if (!indexed) {
      for (const url of referencedImages) {
        try {
          const filename = resolve(root, decodeURIComponent(url).slice(1));
          if (
            !filename.startsWith(`${resolve(root, "content", "media")}${sep}`)
          )
            throw new Error(
              `image reference leaves the media directory: ${url}`,
            );
          publishedImages.set(await hashFile(filename), url);
        } catch (error) {
          if (!(
            error instanceof Error &&
            "code" in error &&
            error.code === "ENOENT"
          ))
            throw error;
          console.warn(
            `referenced image unavailable for duplicate check: ${url}`,
          );
        }
      }
      indexed = true;
    }
    return publishedImages;
  }
  let imported = 0;
  let skipped = 0;
  let failedConversions = 0;
  const automaticGroups = new Set<ImageGroup>();
  if (options.photosMetadata) {
    const assets: Asset[] = [];
    const seen = new Set<string>();
    const candidates = groups
      .filter((group) => !group.set && !group.assets[0]!.video)
      .flatMap((group) => group.assets)
      .sort(compareCaptureTime);
    for (const asset of candidates) {
      const id = `local-photo-${asset.hash}`;
      const duplicate = !history.has(id)
        ? (await existingImages()).get(asset.hash)
        : undefined;
      if (history.has(id) || duplicate || seen.has(asset.hash)) {
        console.info(
          `skipping previously imported/duplicate Photos image: ${asset.filename}`,
        );
        if (history.has(id) || duplicate) await remember(id);
        skipped++;
        continue;
      }
      seen.add(asset.hash);
      assets.push(asset);
    }
    const grouped: ImageGroup[] = [];
    for (const asset of assets) {
      const current = grouped.at(-1);
      if (
        !current ||
        Date.parse(asset.date) - Date.parse(current.assets[0]!.date) >
          6 * 60 * 60 * 1000
      ) {
        const group = { title: asset.title, assets: [asset], set: false };
        grouped.push(group);
        automaticGroups.add(group);
      } else {
        current.assets.push(asset);
        current.set = true;
      }
    }
    groups.splice(
      0,
      groups.length,
      ...groups.filter((group) => group.set || group.assets[0]!.video),
      ...grouped,
    );
  }
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
    const duplicate =
      !group.set && !video && !history.has(id)
        ? (await existingImages()).get(group.assets[0]!.hash)
        : undefined;
    if (history.has(id) || duplicate) {
      if (duplicate)
        console.info(
          `skipping exact image duplicate already used by a post: ${duplicate}`,
        );
      await remember(id);
      skipped++;
      continue;
    }
    const date = group.assets.at(-1)!.date;
    console.info(
      `${options.dryRun ? "would import" : "importing"} ${date} ${kind}: ${group.title} (${group.assets.length} file${group.assets.length === 1 ? "" : "s"})`,
    );
    if (options.dryRun) {
      await remember(id);
      continue;
    }
    const readableName = imagePostFilename(group.title, date, kind);
    const year = readableName.slice(0, 4);
    const postName = postFiles.includes(join(year, readableName))
      ? `${readableName.slice(0, -3)}-${digest.slice(0, 12)}.md`
      : readableName;
    const temporary = await mkdtemp(join(tmpdir(), "blog-images-"));
    let conversionComplete = false;
    try {
      const outputs: { local: string; url: string }[] = [];
      const locations: ({ image: string } & Coordinates)[] = [];
      const places: { image: string; name: string }[] = [];
      const body: string[] = [];
      let preview = "";
      for (const [index, asset] of group.assets.entries()) {
        const extension = video ? ".mp4" : imageOutputExtension(asset.filename);
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
            `![${escapeHTML(asset.title).replace(/[\\[\]]/g, "\\$&")}](${url})`,
          );
        }
        if (asset.photos?.description.trim())
          body.push(escapeHTML(asset.photos.description.trim()));
        if (asset.photos?.place)
          places.push({ image: url, name: asset.photos.place });
        if (asset.location) locations.push({ image: url, ...asset.location });
        outputs.push({ local, url });
      }
      for (const output of outputs)
        if ((await stat(output.local)).size >= 100_000_000)
          throw new Error(
            `converted file exceeds GitHub's 100 MB limit: ${output.local}`,
          );
      conversionComplete = true;
      if (!group.set && !video) {
        const duplicate = (await existingImages()).get(
          await hashFile(outputs[0]!.local),
        );
        if (duplicate) {
          console.info(
            `skipping exact converted-image duplicate already used by a post: ${duplicate}`,
          );
          await remember(id);
          skipped++;
          continue;
        }
      }
      const tags = [kind];
      if (group.assets.some((asset) => /^screen\s*shot\b/i.test(asset.title)))
        tags.push("screenshot");
      for (const asset of group.assets)
        for (const tag of asset.photos?.tags ?? [])
          if (
            !tags.some(
              (existing) => existing.toLowerCase() === tag.trim().toLowerCase(),
            )
          )
            tags.push(tag.trim());
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
      if (places.length) {
        if (group.set) fields.locations = places;
        else fields.location_name = places[0]!.name;
      }
      if (group.assets.some((asset) => asset.photos?.needs_review))
        fields.needs_review = true;
      const modified = group.assets
        .flatMap((asset) =>
          asset.photos?.last_modified ? [asset.photos.last_modified] : [],
        )
        .sort();
      if (modified.length) fields.last_modified = modified.at(-1)!;
      for (const output of outputs) {
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
          .join("\n")}\n---\n${body.join("\n\n")}\n`,
        { flag: "wx" },
      );
      postFiles.push(join(year, postName));
      await remember(id);
      if (automaticGroups.has(group))
        for (const asset of group.assets)
          await remember(`local-photo-${asset.hash}`);
      if (!video)
        for (const output of outputs)
          publishedImages.set(await hashFile(output.local), output.url);
      imported++;
    } catch (error) {
      if (!options.photosMetadata || conversionComplete) throw error;
      console.error(
        `SKIPPING Photos group "${group.title}": image conversion failed`,
        error,
      );
      skipped++;
      failedConversions++;
    } finally {
      await rm(temporary, { recursive: true });
    }
  }
  console.info(
    `${imported} imported, ${skipped} skipped${failedConversions ? ` (${failedConversions} failed conversions)` : ""}${options.dryRun ? " (dry run)" : ""}`,
  );
  if (failedConversions && !imported)
    throw new Error("no posts imported; see Photos conversion failures above");
  return { imported, skipped };
}

export async function readPhotosMetadata(
  filename: string,
): Promise<Map<string, PhotosMetadata>> {
  const records: unknown = JSON.parse(await readFile(filename, "utf8"));
  if (!records || typeof records !== "object" || Array.isArray(records))
    throw new Error(
      "Photos metadata must be an object keyed by absolute filename",
    );
  const result = new Map<string, PhotosMetadata>();
  for (const [path, value] of Object.entries(records)) {
    if (
      !value ||
      typeof value !== "object" ||
      Array.isArray(value) ||
      !("date" in value) ||
      typeof value.date !== "string" ||
      !("title" in value) ||
      typeof value.title !== "string" ||
      !("description" in value) ||
      typeof value.description !== "string" ||
      !("tags" in value) ||
      !Array.isArray(value.tags) ||
      !value.tags.every(
        (tag: unknown) => typeof tag === "string" && tag.trim(),
      ) ||
      !("place" in value) ||
      (value.place !== null && typeof value.place !== "string") ||
      !("last_modified" in value) ||
      (value.last_modified !== null &&
        typeof value.last_modified !== "string") ||
      ("needs_review" in value && typeof value.needs_review !== "boolean") ||
      resolve(path) !== path
    )
      throw new Error(`invalid Photos metadata: ${path}`);
    const date = sourceDate(value.date);
    if (date.precision !== "second")
      throw new Error(`Photos capture date needs a timestamp: ${path}`);
    const modified =
      value.last_modified === null ? null : sourceDate(value.last_modified);
    if (modified && modified.precision !== "second")
      throw new Error(`Photos modification date needs a timestamp: ${path}`);
    result.set(path, {
      date: date.date,
      title: value.title,
      description: value.description,
      tags: value.tags,
      place: value.place,
      last_modified: modified?.date ?? null,
      ...("needs_review" in value ? { needs_review: value.needs_review } : {}),
    });
  }
  return result;
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
        "photos-metadata": { type: "string" },
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
        ...(values["photos-metadata"]
          ? {
              photosMetadata: await readPhotosMetadata(
                values["photos-metadata"],
              ),
            }
          : {}),
      });
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
