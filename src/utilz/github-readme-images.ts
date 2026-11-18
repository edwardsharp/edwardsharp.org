import { execFile } from "node:child_process";
import { stat, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { promisify } from "node:util";
import { parseHTML } from "linkedom";
import { fromMarkdown } from "mdast-util-from-markdown";
import { stripImage } from "./import-images.ts";
import { escapeHTML } from "./import-social.ts";

const execute = promisify(execFile);
const maximumImageBytes = 100_000_000;
type MarkdownNode =
  | ReturnType<typeof fromMarkdown>
  | ReturnType<typeof fromMarkdown>["children"][number];

async function downloadImage(source: string): Promise<Uint8Array> {
  if (source.startsWith("repos/")) {
    async function read(endpoint: string): Promise<unknown> {
      const { stdout } = await execute(
        "gh",
        ["api", "--method", "GET", endpoint],
        {
          maxBuffer: maximumImageBytes * 2,
          timeout: 30_000,
        },
      );
      return JSON.parse(stdout);
    }
    let data = await read(source);
    if (
      typeof data === "object" &&
      data !== null &&
      "encoding" in data &&
      data.encoding === "none"
    ) {
      if (
        !("sha" in data) ||
        typeof data.sha !== "string" ||
        !/^[a-f\d]{40}$/i.test(data.sha)
      )
        throw new Error(`GitHub returned invalid image metadata: ${source}`);
      const repository = source.split("/").slice(0, 3).join("/");
      data = await read(`${repository}/git/blobs/${data.sha}`);
    }
    if (
      typeof data !== "object" ||
      data === null ||
      !("encoding" in data) ||
      data.encoding !== "base64" ||
      !("content" in data) ||
      typeof data.content !== "string"
    )
      throw new Error(`GitHub returned invalid image content: ${source}`);
    const encoded = data.content.replace(/\s+/g, "");
    if (encoded.length % 4 !== 0 || !/^[a-z\d+/]*={0,2}$/i.test(encoded))
      throw new Error(
        `GitHub returned invalid base64 image content: ${source}`,
      );
    return Buffer.from(encoded, "base64");
  }
  const response = await fetch(source, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok)
    throw new Error(`README image HTTP ${response.status}: ${source}`);
  if (!response.body) throw new Error(`empty README image: ${source}`);
  const chunks: Uint8Array[] = [];
  let length = 0;
  for await (const chunk of response.body) {
    length += chunk.length;
    if (length >= maximumImageBytes)
      throw new Error(`README image exceeds 100 MB: ${source}`);
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

function imageSource(
  value: string,
  repository: string,
  readmePath: string,
): string {
  if (!/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) {
    const base = readmePath.split("/").map(encodeURIComponent).join("/");
    const path = new URL(value, `https://readme.invalid/${base}`).pathname;
    return `repos/${new URL(repository).pathname.slice(1)}/contents${path}`;
  }
  const url = new URL(value, "https://github.com");
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password
  )
    throw new Error(`unsupported README image URL: ${value}`);
  if (
    url.hostname === "github.com" &&
    /^\/[^/]+\/[^/]+\/(?:blob|raw)\//.test(url.pathname)
  ) {
    url.hostname = "raw.githubusercontent.com";
    url.pathname = url.pathname.replace(
      /^(\/[^/]+\/[^/]+)\/(?:blob|raw)\//,
      "$1/",
    );
    url.search = "";
  }
  url.hash = "";
  return url.href;
}

export async function prepareReadmeImages(
  body: string,
  repository: string,
  readmePath: string,
  directory: string,
  mediaPrefix: string,
): Promise<{
  body: string;
  images: { filename: string; url: string; alt: string }[];
}> {
  const tree = fromMarkdown(body);
  const definitions = new Map<
    string,
    Extract<MarkdownNode, { type: "definition" }>
  >();
  const collect = (node: MarkdownNode): void => {
    if (node.type === "definition" && !definitions.has(node.identifier))
      definitions.set(node.identifier, node);
    if ("children" in node) node.children.forEach(collect);
  };
  collect(tree);
  const images: { filename: string; url: string; alt: string }[] = [];
  const downloaded = new Map<string, string>();
  const edits: { start: number; end: number; text: string }[] = [];
  async function localImage(source: string, alt: string): Promise<string> {
    const resolved = imageSource(source, repository, readmePath);
    const existing = downloaded.get(resolved);
    if (existing) return existing;
    const bytes = await downloadImage(resolved);
    if (!bytes.length || bytes.length >= maximumImageBytes)
      throw new Error(`empty or oversized README image: ${source}`);
    const url = `${mediaPrefix}-readme-image-${images.length + 1}.webp`;
    const filename = join(directory, basename(url));
    const original = `${filename}.download`;
    await writeFile(original, bytes, { flag: "wx" });
    stripImage(original, filename);
    if ((await stat(filename)).size >= maximumImageBytes)
      throw new Error(`converted README image exceeds 100 MB: ${source}`);
    downloaded.set(resolved, url);
    images.push({ filename, url, alt });
    return url;
  }
  async function visit(node: MarkdownNode): Promise<void> {
    let text: string | undefined;
    if (node.type === "image" || node.type === "imageReference") {
      const image =
        node.type === "image" ? node : definitions.get(node.identifier);
      if (!image) throw new Error("README image reference has no definition");
      const alt = node.alt ?? "";
      const url = await localImage(image.url, alt);
      const title = image.title ? ` "${escapeHTML(image.title)}"` : "";
      text = `![${escapeHTML(alt).replace(/[\\[\]|]/g, "\\$&")}](${url}${title})`;
    } else if (node.type === "html") {
      const { document } = parseHTML(`<html><body>${node.value}</body></html>`);
      const elements = document.querySelectorAll("img[src]");
      if (elements.length) {
        for (const image of elements) {
          const url = await localImage(
            image.getAttribute("src")!,
            image.getAttribute("alt") ?? "",
          );
          image.setAttribute("src", url);
          image.removeAttribute("srcset");
        }
        for (const source of document.querySelectorAll(
          "picture source[srcset]",
        ))
          source.remove();
        text = document.body.innerHTML;
      }
    }
    if (text !== undefined) {
      const start = node.position?.start.offset;
      const end = node.position?.end.offset;
      if (start === undefined || end === undefined)
        throw new Error("README image source position unavailable");
      edits.push({ start, end, text });
    }
    if ("children" in node)
      for (const child of node.children) await visit(child);
  }
  await visit(tree);
  for (const edit of edits.sort((a, b) => b.start - a.start))
    body = body.slice(0, edit.start) + edit.text + body.slice(edit.end);
  return { body, images };
}
