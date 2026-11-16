import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { PassThrough } from "node:stream";
import test from "node:test";
import { setTimeout } from "node:timers/promises";
import { parse } from "yaml";
import {
  createPost,
  DateInputError,
  expandPath,
  parsePostDate,
  readPostCatalog,
  type NewPost,
} from "../create-post.ts";
import { locationKey, tagKey } from "../../ts/feed-filters.ts";
import { requestTags } from "../tui.ts";

test("tag input adds typed new tags on immediate Enter and keeps prompting until done", async () => {
  const input = new PassThrough();
  const output = new PassThrough();
  const controller = new AbortController();
  let screen = "";
  output.on("data", (chunk) => {
    screen += chunk.toString();
  });
  const result = requestTags(["noise", "new wave"], {
    input,
    output,
    signal: controller.signal,
  });
  async function answer(prompt: string, keys: string) {
    for (let attempt = 0; attempt < 200 && !screen.includes(prompt); attempt++)
      await setTimeout(10);
    assert.ok(screen.includes(prompt), screen);
    screen = "";
    input.write(keys);
  }
  try {
    await answer("tags (none;", "fresh-tag\r");
    await answer("tags (fresh-tag;", "new\r");
    await answer("tags (fresh-tag, new;", "NO-ISE\r");
    await answer("tags (fresh-tag, new, noise;", "noise\r");
    await answer("tag already selected", "\r");
    assert.deepEqual(await result, ["fresh-tag", "new", "noise"]);
  } finally {
    controller.abort();
    await result.catch(() => {});
    input.destroy();
    output.destroy();
  }
});

test("tag suggestions can be selected and done remains selectable with text entered", async () => {
  const input = new PassThrough();
  const output = new PassThrough();
  const controller = new AbortController();
  let screen = "";
  output.on("data", (chunk) => {
    screen += chunk.toString();
  });
  const result = requestTags(["noise"], {
    input,
    output,
    signal: controller.signal,
  });
  try {
    for (
      let attempt = 0;
      attempt < 200 && !screen.includes("tags (none;");
      attempt++
    )
      await setTimeout(10);
    assert.ok(screen.includes("tags (none;"), screen);
    input.write("noi\x1b[B\t\r");
    for (
      let attempt = 0;
      attempt < 200 && !screen.includes("tags (noise;");
      attempt++
    )
      await setTimeout(10);
    assert.ok(screen.includes("tags (noise;"), screen);
    input.write("unused\x1b[B\r");
    assert.deepEqual(await result, ["noise"]);
  } finally {
    controller.abort();
    await result.catch(() => {});
    input.destroy();
    output.destroy();
  }
});

test("flexible dates preserve supplied precision, default partial dates, and round today to the current minute", () => {
  const reference = new Date("2026-11-15T17:04:56.789Z");
  const previous = process.env.TZ;
  for (const [input, expected, precision] of [
    ["Sep 30 2014", "2014-09-30", "day"],
    ["September 2014", "2014-09-01", "month"],
    ["2014-09", "2014-09-01", "month"],
    ["2014", "2014-01-01", "year"],
    ["yesterday", "2026-11-14", "day"],
    ["Sep 30 2014 7pm", "2014-09-30T23:00:00.000Z", "minute"],
    ["2014-09-30T23:11Z", "2014-09-30T23:11:00.000Z", "minute"],
    ["2014-09-30T23:11:15.801Z", "2014-09-30T23:11:15.801Z", "second"],
    ["today", "2026-11-15T17:04:00.000Z", "minute"],
    ["now", "2026-11-15T17:04:00.000Z", "minute"],
  ]) {
    assert.ok(input);
    const result = parsePostDate(input, reference, "America/New_York");
    assert.equal(result.date, expected, input);
    assert.equal(result.precision, precision, input);
    assert.equal(process.env.TZ, previous);
  }
  for (const input of [
    "",
    "2014-13",
    "Feb 30 2014",
    "Sep 30 2014 banana",
    "Sep 30 2014 to Oct 2 2014",
    "Mar 10 2024 2:30am",
  ]) {
    assert.throws(
      () => parsePostDate(input, reference, "America/New_York"),
      DateInputError,
      input,
    );
  }
});

test("post catalog reads YAML, singleton tags, and named locations while merging existing aliases", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "post-catalog-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(root, "content/_posts/2014"), { recursive: true });
  await writeFile(join(root, "_config.yml"), "timezone: America/New_York\n");
  const post = join(root, "content/_posts/2014/2014-09-30-one.md");
  await writeFile(
    post,
    '---\nkind: photo\ntags: [noise, NO-ISE, singleton]\nlocation_name: pdx\nlocations: [{name: "Portland, Oregon"}, {latitude: 1, longitude: 2}]\n---\nbody\n',
  );
  await writeFile(
    join(root, "content/_posts/2014/2014-10-01-two.md"),
    "---\ntags: noise\nlocation_name: PDX\n---\nbody\n",
  );
  const catalog = await readPostCatalog(root);
  assert.deepEqual(catalog.kinds, ["entry", "photo"]);
  assert.equal(catalog.tags.filter((tag) => tagKey(tag) === "noise").length, 1);
  assert.ok(catalog.tags.includes("singleton"));
  assert.equal(
    catalog.locations.filter((place) => locationKey(place) === "pdx").length,
    1,
  );
  assert.ok(catalog.locations.includes("Portland, Oregon"));
  assert.equal(catalog.timezone, "America/New_York");
  await writeFile(post, "---\nkind: photo\nkind: entry\n---\n");
  await assert.rejects(readPostCatalog(root), /unique|duplicate/i);
});

test("new posts copy and strip images, preserve alt text, choose the first preview, and never overwrite posts", async (t) => {
  const temporary = await mkdtemp(join(tmpdir(), "create-post-"));
  t.after(() => rm(temporary, { recursive: true, force: true }));
  const root = join(temporary, "site");
  await mkdir(root);
  const first = join(temporary, "first image.png");
  const second = join(temporary, "second.jpeg");
  for (const filename of [first, second]) {
    const made = spawnSync("magick", [
      "-size",
      "8x8",
      "xc:red",
      "-set",
      "comment",
      "private metadata",
      filename,
    ]);
    assert.equal(made.status, 0, made.stderr.toString());
  }
  const originals = await Promise.all(
    [first, second].map((path) => readFile(path)),
  );
  const post: NewPost = {
    title: "test thing",
    kind: "photo",
    date: parsePostDate("September 2014", new Date(), "UTC"),
    tags: ["noise", "NO-ISE"],
    location_name: "pdx",
    images: [
      { filename: first, alt: 'first [alt] & "quoted"' },
      { filename: second, alt: "second image" },
    ],
  };
  const filename = await createPost(root, post);
  const text = await readFile(filename, "utf8");
  const header: Record<string, unknown> = parse(text.split("---")[1] ?? "");
  assert.equal(header.date, "2014-09-01");
  assert.equal(header.date_precision, "month");
  assert.equal(header.location_name, "pdx");
  assert.match(text, /^!\[first \\\[alt\\\] &amp; &quot;quoted&quot;\]/m);
  assert.equal(text.match(/^!\[/gm)?.length, 2);
  assert.equal(header.preview_alt, 'first [alt] & "quoted"');
  const links = [...text.matchAll(/\]\((\/content\/media\/[^)]+)\)/g)].map(
    (match) => match[1],
  );
  assert.equal(header.preview_image, links[0]);
  assert.ok(links[1]?.endsWith(".jpg"));
  for (const link of links) {
    assert.ok(link);
    const checked = spawnSync(
      "magick",
      ["identify", "-verbose", join(root, link.slice(1))],
      { encoding: "utf8" },
    );
    assert.equal(checked.status, 0, checked.stderr);
    assert.doesNotMatch(checked.stdout, /private metadata|Profiles:|exif:/);
  }
  assert.deepEqual(await readFile(first), originals[0]);
  assert.deepEqual(await readFile(second), originals[1]);
  const edited = `${text}\nuser edit\n`;
  await writeFile(filename, edited);
  const other = await createPost(root, { ...post, images: [] });
  assert.notEqual(other, filename);
  assert.equal(await readFile(filename, "utf8"), edited);
  const otherHeader: Record<string, unknown> = parse(
    (await readFile(other, "utf8")).split("---")[1] ?? "",
  );
  assert.notEqual(otherHeader.permalink, header.permalink);
  assert.equal(otherHeader.preview_image, undefined);
});

test("failed image preparation publishes nothing and pasted paths are expanded without shell evaluation", async (t) => {
  const temporary = await mkdtemp(join(tmpdir(), "create-post-failure-"));
  t.after(() => rm(temporary, { recursive: true, force: true }));
  const root = join(temporary, "site");
  await mkdir(root);
  const good = join(temporary, "good.png");
  const bad = join(temporary, "bad.png");
  const made = spawnSync("magick", ["-size", "8x8", "xc:red", good]);
  assert.equal(made.status, 0, made.stderr.toString());
  await writeFile(bad, "broken image");
  await assert.rejects(
    createPost(root, {
      title: "test",
      kind: "photo",
      date: parsePostDate("today"),
      tags: [],
      images: [
        { filename: good, alt: "good" },
        { filename: bad, alt: "bad" },
      ],
    }),
    /magick failed/,
  );
  assert.deepEqual(await readdir(root), []);
  assert.equal(expandPath("'a file.png'", root), join(root, "a file.png"));
  assert.equal(expandPath("a\\ file.png", root), join(root, "a file.png"));
  assert.equal(
    expandPath("$(touch example).png", root),
    join(root, "$(touch example).png"),
  );
});
