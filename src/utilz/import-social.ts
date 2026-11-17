import { spawnSync } from "node:child_process";
import {
  appendFile,
  mkdir,
  readFile,
  readdir,
  stat,
  writeFile,
} from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parseHTML } from "linkedom";
import { format } from "prettier";
import {
  availablePostStem,
  classifyPost,
  postDay,
  postFrontMatter,
  postStem,
  siteTimezone,
  sourceURL,
} from "./post-format.ts";

const platforms = [
  "instagram",
  "twitter",
  "ello",
  "vine",
  "jsfiddle",
  "youtube",
  "vimeo",
  "soundcloud",
  "flickr",
  "archive",
  "bandcamp",
] as const;
type Platform = (typeof platforms)[number];
const kinds = [
  "entry",
  "doodle",
  "screenshot",
  "photo",
  "photoset",
  "audio",
  "video",
  "code",
  "link",
] as const;
type Kind = (typeof kinds)[number];

export interface SocialPost {
  platform: Platform;
  id: string;
  title: string;
  date: string;
  url: string;
  kind: Kind;
  html: string;
  tags: string[];
  images: string[];
  archiveUrl?: string;
  demo?: string;
  revision?: number;
}

export function escapeHTML(value: string): string {
  return value.replace(/[&<>"{}]/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "{": "&#123;",
      "}": "&#125;",
    };
    return entities[char]!;
  });
}

export function sourceDate(value: string): {
  date: string;
  precision: "day" | "second";
} {
  const day = /^\d{4}-\d{2}-\d{2}$/.test(value);
  if (
    !day &&
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(
      value,
    )
  )
    throw new Error(`source date needs an explicit timezone: ${value}`);
  const parsed = new Date(value);
  if (
    !Number.isFinite(parsed.getTime()) ||
    (parsed.toISOString().slice(0, 10) !== value.slice(0, 10) && day)
  )
    throw new Error(`invalid source date: ${value}`);
  return {
    date: day ? value : parsed.toISOString(),
    precision: day ? "day" : "second",
  };
}

function postKind(kind: Kind): Exclude<Kind, "photoset"> {
  return kind === "photoset" ? "photo" : kind;
}

export function postTags(post: SocialPost): string[] {
  const kind = postKind(post.kind);
  const tags = [
    ...(post.platform === "twitter" ? [] : [post.platform]),
    kind === "entry" ? "text" : kind,
    ...post.tags,
  ];
  const prose = parseHTML(`<html><body>${post.html}</body></html>`).document
    .body;
  for (const code of prose.querySelectorAll("pre, code")) code.remove();
  const text = prose.textContent;
  for (const match of text.matchAll(/(?:^|\s)#([\p{L}\p{N}_-]+)/gu))
    tags.push(match[1]!);
  const topics: [string, RegExp][] = [
    ["javascript", /\bjavascript\b|\blanguage-javascript\b/i],
    ["html", /\blanguage-html\b/i],
    ["css", /\blanguage-css\b/i],
    ["react", /\breact(?:dom)?\b/i],
    ["jquery", /\bjquery\b/i],
    ["svg", /\bsvg\b/i],
    ["canvas", /\bcanvas\b/i],
    ["web audio", /\b(?:AudioContext|webkitAudioContext|web audio)\b/i],
    ["midi", /\bmidi\b/i],
    ["osc", /\bosc\b/i],
    ["pure data", /\b(?:pure[\s-]?data|puredata)\b/i],
    ["processing", /\bprocessing(?:\.js)?\b/i],
    ["arduino", /\barduino\b/i],
    ["synthesizer", /\bsynth(?:esizer)?s?\b/i],
    ["noise", /\bnoise\b/i],
    ["performance", /\b(?:live performance|performance art|performed at)\b/i],
    ["animation", /\banimation\b/i],
  ];
  for (const [tag, pattern] of topics)
    if (pattern.test(`${post.title} ${post.html}`)) tags.push(tag);
  const seen = new Set<string>();
  return tags.filter((tag) => {
    const key = tag.trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function protocolRelativeResources(source: string): string {
  return source.replace(
    /(@namespace\b[^;]*;|\bxmlns(?::[\w.-]+)?\s*=\s*["'][^"']*["'])|((?:\b(?:src|href|poster|url|proxy|icon)\s*[:=]\s*["']?|\burl\(\s*["']?|@import\s*["']|\b(?:fetch|importScripts|import|Worker|Audio|open)\(\s*["']|\b(?:from|import)\s+["']))https?:\/\//gi,
    (
      match: string,
      namespace: string | undefined,
      prefix: string | undefined,
    ) => {
      if (namespace !== undefined) return match;
      if (prefix === undefined) throw new Error("invalid resource URL match");
      return `${prefix}//`;
    },
  );
}

export async function formatSnippets(html: string): Promise<{
  html: string;
  warnings: string[];
}> {
  const { document } = parseHTML(`<html><body>${html}</body></html>`);
  const blocks = [...document.querySelectorAll("pre > code")];
  if (!blocks.length) return { html, warnings: [] };
  const warnings: string[] = [];
  const snippets: { language: string; source: string }[] = [];
  const parsers: Record<string, string> = {
    html: "html",
    css: "css",
    javascript: "babel",
  };
  for (const code of blocks) {
    const language = code.className.replace("language-", "");
    const parser = parsers[language];
    if (!parser) throw new Error(`unsupported snippet language: ${language}`);
    let source = protocolRelativeResources(code.textContent);
    try {
      source = await format(source, { parser });
    } catch (error) {
      if (!(error instanceof Error) || !("loc" in error)) throw error;
      const message = `${language} snippet could not be formatted; original code is shown`;
      warnings.push(`${message}: ${error.message.split("\n")[0]}`);
      const note = document.createElement("p");
      note.setAttribute("data-import-note", "");
      note.textContent = message;
      code.parentElement?.after(note);
    }
    snippets.push({ language, source });
  }
  const result = spawnSync(
    "bundle",
    [
      "exec",
      "ruby",
      "-EUTF-8:UTF-8",
      "-rjson",
      "-rrouge",
      "-e",
      'formatter = Rouge::Formatters::HTML.new; puts JSON.generate(JSON.parse(STDIN.read).map { |s| formatter.format(Rouge::Lexer.find(s.fetch("language")).new.lex(s.fetch("source"))) })',
    ],
    {
      cwd: fileURLToPath(new URL("../../", import.meta.url)),
      input: JSON.stringify(snippets),
      encoding: "utf8",
      maxBuffer: 8 * 1024 * 1024,
    },
  );
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`Rouge highlighting failed: ${result.stderr}`);
  const highlighted: unknown = JSON.parse(result.stdout);
  if (
    !Array.isArray(highlighted) ||
    highlighted.length !== blocks.length ||
    !highlighted.every((value: unknown) => typeof value === "string")
  )
    throw new Error("invalid Rouge output");
  for (const [index, code] of blocks.entries()) {
    const markup = highlighted[index];
    if (markup === undefined) throw new Error("missing highlighted snippet");
    code.innerHTML = markup;
    code.parentElement?.classList.add("highlight");
  }
  return { html: document.body.innerHTML, warnings };
}

export function postHTML(
  post: SocialPost,
  html: string,
  demoPath?: string,
): string {
  if (demoPath)
    html = `<iframe class="code-demo" src="${demoPath}" title="${escapeHTML(post.title)}" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>\n${html}`;
  if (post.platform === "twitter") {
    const { document } = parseHTML(`<html><body>${html}</body></html>`);
    for (const link of document.querySelectorAll("a[href]")) {
      const url = new URL(link.getAttribute("href")!, post.url);
      if (!/(^|\.)(twitter\.com|x\.com)$/.test(url.hostname)) continue;
      const hashtag = url.pathname.match(/^\/hashtag\/([^/]+)/)?.[1];
      if (hashtag)
        link.setAttribute(
          "href",
          `/?tag=${encodeURIComponent(decodeURIComponent(hashtag))}`,
        );
      else link.replaceWith(...link.childNodes);
    }
    return document.body.innerHTML;
  }
  if (!sourceURL(post.url)) return html;
  return `${html}\n<p><a href="${escapeHTML(post.url)}">original ${post.platform} post</a></p>`;
}

const allowedTags = new Set([
  "p",
  "br",
  "a",
  "em",
  "strong",
  "b",
  "i",
  "s",
  "del",
  "blockquote",
  "pre",
  "code",
  "ul",
  "ol",
  "li",
  "figure",
  "figcaption",
  "img",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "span",
]);

export function cleanHTML(html: string, base: string): string {
  const { document } = parseHTML(`<html><body>${html}</body></html>`);
  for (const node of document.querySelectorAll(
    "script, style, form, iframe, object, embed",
  ))
    node.remove();
  for (const node of [...document.body.querySelectorAll("*")].reverse()) {
    if (!allowedTags.has(node.localName)) {
      node.replaceWith(...node.childNodes);
      continue;
    }
    for (const attr of [...node.attributes]) {
      if (attr.name === "href" || attr.name === "src") {
        const expanded = node.getAttribute("data-expanded-url") ?? attr.value;
        const url = new URL(expanded, base);
        if (url.protocol === "http:" || url.protocol === "https:")
          node.setAttribute(
            attr.name,
            url.href.replace(/^https:\/\/o\.ello\.co\/(?=https?:\/\/)/, ""),
          );
        else node.removeAttribute(attr.name);
      } else if (attr.name !== "alt" && attr.name !== "title") {
        node.removeAttribute(attr.name);
      }
    }
  }
  return document.body.innerHTML
    .replaceAll("{", "&#123;")
    .replaceAll("}", "&#125;");
}

export function replaceUnavailableImage(html: string, url: string): string {
  const { document } = parseHTML(`<html><body>${html}</body></html>`);
  const images = [...document.querySelectorAll("img[src]")].filter(
    (image) => image.getAttribute("src") === url,
  );
  const notice = document.createElement("span");
  notice.className = "asset-notice";
  notice.setAttribute("data-import-note", "");
  notice.textContent = "image unavailable in the recovered archive.";
  if (images.length) {
    for (const image of images) image.replaceWith(notice.cloneNode(true));
  } else document.body.append(notice);
  return document.body.innerHTML;
}

export function parseEllo(html: string, archiveUrl: string): SocialPost[] {
  const { document } = parseHTML(html);
  return [...document.querySelectorAll("article")].map((article) => {
    const link = article.querySelector('header a[href*="/3dwardsharp/post/"]');
    const dateText = article.querySelector("header span")?.textContent;
    const url = link?.getAttribute("href");
    if (!url || !dateText)
      throw new Error("Ello post is missing its permalink or date");
    const date = new Date(dateText);
    if (!Number.isFinite(date.getTime()))
      throw new Error(`invalid Ello date: ${dateText}`);
    const body = cleanHTML(
      [...article.querySelectorAll(":scope > section")]
        .map((s) => s.innerHTML)
        .join("\n"),
      url,
    );
    const content = parseHTML(`<html><body>${body}</body></html>`).document
      .body;
    const images = [...content.querySelectorAll("img[src]")].map((n) =>
      n.getAttribute("src")!,
    );
    return {
      platform: "ello",
      id: new URL(url).pathname.split("/").filter(Boolean).at(-1)!,
      url,
      date: date.toISOString(),
      title:
        Array.from(content.textContent.trim()).slice(0, 100).join("") ||
        `ello / ${date.toISOString().slice(0, 10)}`,
      kind: images.length ? "photo" : "entry",
      html: body,
      images,
      tags: [],
      archiveUrl,
    };
  });
}

export function parseTweet(
  html: string,
  id: string,
  archiveUrl: string,
): SocialPost {
  const { document } = parseHTML(html);
  const tweet = document.querySelector(
    `.tweet[data-tweet-id="${id}"][data-screen-name="3dwardsharp"]`,
  );
  const text = tweet?.querySelector(".js-tweet-text");
  if (!tweet || !text || !/^\d{15,20}$/.test(id))
    throw new Error(`could not find the original account's tweet ${id}`);
  for (const hidden of text.querySelectorAll(".u-hidden")) hidden.remove();
  const url = `https://twitter.com/3dwardsharp/status/${id}`;
  const timestamp = Number((BigInt(id) >> 22n) + 1288834974657n);
  const displayed = tweet
    .querySelector("[data-time-ms]")
    ?.getAttribute("data-time-ms");
  if (
    displayed &&
    Math.floor(Number(displayed) / 1000) !== Math.floor(timestamp / 1000)
  )
    throw new Error(`Twitter timestamp disagrees with tweet ID ${id}`);
  const images = [
    ...tweet.querySelectorAll(".AdaptiveMedia-photoContainer img"),
  ]
    .map((img) => img.getAttribute("src"))
    .filter((src): src is string => !!src);
  return {
    platform: "twitter",
    id,
    url,
    archiveUrl,
    date: new Date(timestamp).toISOString(),
    title: Array.from(text.textContent.trim()).slice(0, 100).join(""),
    html:
      cleanHTML(text.outerHTML, url) +
      images
        .map((src) => `\n<p><img src="${escapeHTML(src)}" alt=""></p>`)
        .join(""),
    kind: images.length ? "photo" : "entry",
    images,
    tags: [],
  };
}

function isSocialPost(value: unknown): value is SocialPost {
  if (typeof value !== "object" || value === null) return false;
  const field = (name: string): unknown => Reflect.get(value, name);
  return (
    ["id", "title", "date", "url", "html"].every(
      (key) => typeof field(key) === "string",
    ) &&
    platforms.some((p) => p === field("platform")) &&
    kinds.some((kind) => kind === field("kind")) &&
    ["tags", "images"].every((key) => {
      const values = field(key);
      return (
        Array.isArray(values) &&
        values.every((v: unknown) => typeof v === "string")
      );
    }) &&
    (field("archiveUrl") === undefined ||
      typeof field("archiveUrl") === "string") &&
    (field("demo") === undefined || typeof field("demo") === "string") &&
    (field("revision") === undefined || Number.isInteger(field("revision")))
  );
}

function publicURL(value: string): URL {
  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  )
    throw new Error(`not a public web URL: ${value}`);
  return url;
}

async function imageFile(
  url: string,
  stem: string,
  directory: string,
  archiveUrl?: string,
): Promise<string> {
  publicURL(url);
  let response: Response;
  try {
    response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error(`image HTTP ${response.status}: ${url}`);
  } catch (error) {
    const snapshot = archiveUrl?.match(/\/web\/(\d{14})/)?.[1];
    if (!snapshot) throw error;
    console.warn(`trying archived image after ${String(error)}`);
    response = await fetch(
      `https://web.archive.org/web/${snapshot}im_/${url}`,
      {
        signal: AbortSignal.timeout(20000),
      },
    );
  }
  if (!response.ok) throw new Error(`image HTTP ${response.status}: ${url}`);
  const type = response.headers.get("content-type")?.split(";")[0];
  const extensions: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
    "image/avif": "avif",
  };
  const extension = type && extensions[type];
  if (!extension) throw new Error(`unexpected image type ${type}: ${url}`);
  const filename = `${stem}.${extension}`;
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length < 16) throw new Error(`empty image: ${url}`);
  await writeFile(join(directory, filename), bytes, { flag: "wx" });
  return filename;
}

async function preserveOrCreate(
  filename: string,
  contents: string,
): Promise<boolean> {
  if ((await readdir(dirname(filename))).includes(basename(filename))) {
    if ((await readFile(filename, "utf8")) !== contents)
      throw new Error(`refusing to overwrite an edited file: ${filename}`);
    return false;
  }
  await writeFile(filename, contents, { flag: "wx" });
  return true;
}

async function existingFile(filename: string): Promise<boolean> {
  try {
    if (!(await stat(filename)).isFile())
      throw new Error(`expected a file: ${filename}`);
    return true;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT")
      return false;
    throw error;
  }
}

async function importHistory(filename: string): Promise<Set<string>> {
  if (!(await existingFile(filename))) {
    console.info(
      "no import history yet; existing posts will be registered without changes",
    );
    return new Set();
  }
  const identities = new Set<string>();
  for (const line of (await readFile(filename, "utf8")).split("\n")) {
    if (!line.trim()) continue;
    const identity: unknown = JSON.parse(line);
    if (
      typeof identity !== "string" ||
      !platforms.some((platform) => identity.startsWith(`${platform}-`)) ||
      !/^[\w-]+$/.test(identity)
    )
      throw new Error(`invalid source identity in ${filename}`);
    identities.add(identity);
  }
  return identities;
}

export function postMarkdown(
  post: SocialPost,
  html: string,
  preview?: string,
): string {
  if (!/^[\w-]+$/.test(post.id))
    throw new Error(`invalid source ID: ${post.id}`);
  publicURL(post.url);
  const date = sourceDate(post.date);
  const kind = postKind(post.kind);
  const classified = classifyPost(kind, postTags(post), post.title);
  const fields: Record<string, unknown> = {
    title: post.title.trim() || `${kind} / ${date.date.slice(0, 10)}`,
    date: date.date,
    date_precision: date.precision,
    tags: classified.tags,
    kind: classified.kind,
  };
  const source = sourceURL(post.url);
  if (source) fields.source = source;
  if (preview) fields.preview_image = preview;
  html = html
    .replaceAll("{", "&#123;")
    .replaceAll("}", "&#125;")
    .replace(
      /(src|href)="(\/content\/media\/[^"]+)"/g,
      (_, attr: string, path: string) =>
        `${attr}="{{ '${path}' | relative_url }}"`,
    )
    .replace(
      /href="\/\?tag=([^"]*)"/g,
      "href=\"{{ '/' | relative_url }}?tag=$1\"",
    );
  return `${postFrontMatter(fields)}${html.trim()}\n`;
}

export async function importPosts(
  input: string,
  reportPath: string,
  root = fileURLToPath(new URL("../../", import.meta.url)),
): Promise<void> {
  const data: unknown = JSON.parse(await readFile(input, "utf8"));
  if (!Array.isArray(data) || !data.every(isSocialPost))
    throw new Error("expected an array of SocialPost records");
  const timezone = await siteTimezone(root);
  const historyFile = join(root, "src", "utilz", "social-import-history.jsonl");
  const history = await importHistory(historyFile);
  await mkdir(dirname(historyFile), { recursive: true });
  const remember = async (identity: string): Promise<void> => {
    await appendFile(historyFile, `${JSON.stringify(identity)}\n`, {
      encoding: "utf8",
      flush: true,
    });
    history.add(identity);
  };
  const seen = new Set<string>();
  const report: {
    imported: string[];
    skipped: string[];
    failures: { source: string; error: string }[];
    unavailableImages: { source: string; image: string; error: string }[];
    formattingWarnings: { source: string; warning: string }[];
  } = {
    imported: [],
    skipped: [],
    failures: [],
    unavailableImages: [],
    formattingWarnings: [],
  };
  for (const post of data) {
    const identity = `${post.platform}-${post.id}`;
    if (seen.has(identity))
      throw new Error(`duplicate source identity: ${identity}`);
    seen.add(identity);
    try {
      if (history.has(identity)) {
        report.skipped.push(post.url);
        continue;
      }
      const { date } = sourceDate(post.date);
      if (!/^[\w-]+$/.test(post.id))
        throw new Error(`invalid source ID: ${post.id}`);
      const day = postDay(date, timezone);
      const year = day.slice(0, 4);
      const mediaDir = join(root, "content", "media", year);
      const postDir = join(root, "content", "_posts", year);
      const legacy = `${date.slice(0, 10)}-${post.platform === "twitter" ? "entry" : post.platform}-${post.id}`;
      if (await existingFile(join(postDir, `${legacy}.md`))) {
        await remember(identity);
        report.skipped.push(post.url);
        continue;
      }
      await mkdir(mediaDir, { recursive: true });
      await mkdir(postDir, { recursive: true });
      const classification = classifyPost(
        postKind(post.kind),
        postTags(post),
        post.title,
      );
      const stem = await availablePostStem(
        root,
        postStem(post.title, day, classification.kind, post.id),
      );
      const filename = join(postDir, `${stem}.md`);
      const formatted =
        post.platform === "jsfiddle"
          ? await formatSnippets(post.html)
          : { html: post.html, warnings: [] };
      for (const warning of formatted.warnings) {
        console.warn(`${identity}: ${warning}`);
        report.formattingWarnings.push({ source: post.url, warning });
      }
      let html = formatted.html;
      let preview: string | undefined;
      const imageURLs = [...new Set(post.images)];
      for (const [index, url] of imageURLs.entries()) {
        try {
          const filename = await imageFile(
            url,
            imageURLs.length > 1 ? `${stem}-image-${index + 1}` : stem,
            mediaDir,
            post.archiveUrl,
          );
          const local = `/content/media/${year}/${filename}`;
          html = html.replaceAll(escapeHTML(url), local).replaceAll(url, local);
          preview ??= local;
        } catch (error) {
          const message =
            error instanceof Error ? error.message : String(error);
          console.error(`${identity}: ${message}`);
          report.unavailableImages.push({
            source: post.url,
            image: url,
            error: message,
          });
          html = replaceUnavailableImage(html, url);
        }
      }
      let demoPath: string | undefined;
      if (post.demo) {
        const path = `/content/media/${year}/${stem}-demo.html`;
        await preserveOrCreate(
          join(root, path.slice(1)),
          protocolRelativeResources(post.demo),
        );
        demoPath = path;
      }
      const output = postMarkdown(
        post,
        postHTML(post, html, demoPath),
        preview,
      );
      const created = await preserveOrCreate(filename, output);
      await remember(identity);
      if (created) report.imported.push(post.url);
      else report.skipped.push(post.url);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`${identity}: ${message}`);
      report.failures.push({ source: post.url, error: message });
    }
  }
  await mkdir(dirname(resolve(reportPath)), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(
    JSON.stringify({
      imported: report.imported.length,
      skipped: report.skipped.length,
      failures: report.failures.length,
      unavailableImages: report.unavailableImages.length,
    }),
  );
  if (report.failures.length || report.unavailableImages.length)
    process.exitCode = 1;
}

if (import.meta.main) {
  const [input, report] = process.argv.slice(2);
  if (!input || !report) {
    console.error("usage: npm run import:social -- capture.json report.json");
    console.error(
      "capture.json: SocialPost[] with original source dates; see src/utilz/import-social.ts",
    );
    process.exitCode = 1;
  } else {
    await importPosts(input, report);
  }
}
