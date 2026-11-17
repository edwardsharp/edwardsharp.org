import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdir,
  mkdtemp,
  readFile,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

function command(program: string, args: string[]) {
  const result = spawnSync(program, args, { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.error?.message);
  return result.stdout;
}

function utility(root: string, name: "webp" | "dates", dryRun = false) {
  const module = name === "webp" ? "ConvertWebp" : "UpdatePostDates";
  const source = fileURLToPath(
    new URL(
      name === "webp" ? "../convert-webp.rb" : "../update-post-dates.rb",
      import.meta.url,
    ),
  );
  return spawnSync(
    "ruby",
    [
      "-r",
      source,
      "-e",
      `${module}.run(ARGV.fetch(0), dry_run: ARGV.include?("--dry-run"))`,
      root,
      ...(dryRun ? ["--dry-run"] : []),
    ],
    { encoding: "utf8" },
  );
}

async function file(root: string, relative: string, text: string) {
  const path = join(root, relative);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, text);
  return path;
}

function git(root: string, ...args: string[]) {
  return command("git", ["-C", root, ...args]);
}

function commit(root: string) {
  git(root, "init", "-q");
  git(root, "add", ".");
  git(
    root,
    "-c",
    "user.name=utility-test",
    "-c",
    "user.email=test@example.invalid",
    "commit",
    "-qm",
    "fixture\n\nCo-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>",
  );
}

function post(id: string, media: string) {
  return `---
title: "test"
date: "2020-03-01T10:00:00.000Z"
date_precision: "second"
needs_review: true
source_id: "${id}"
permalink: "/posts/${id}/"
last_modified: "2020-04-01T10:00:00.000Z"
preview_image: "${media}"
locations: [{"image":"${media}","name":"somewhere"}]
---
![photo](${media}?download=1)
`;
}

test("WebP conversion limits both axes, does not upscale, rewrites references and leaves GIFs alone", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-webp-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const media = join(root, "content/media/2020");
  await mkdir(media, { recursive: true });
  for (const [name, size] of [
    ["wide.PNG", "4600x1"],
    ["tall.jpeg", "1x4600"],
    ["a blank.png", "8x9"],
  ]) {
    command("magick", ["-size", size!, "xc:none", join(media, name!)]);
  }
  const gif = join(media, "animation.GIF");
  command("magick", [
    "-delay",
    "12",
    "-size",
    "8x8",
    "xc:red",
    "-delay",
    "24",
    "-size",
    "8x8",
    "xc:blue",
    "-loop",
    "0",
    gif,
  ]);
  const originalGif = await readFile(gif);
  await file(root, "content/media/2020/existing.webp", "existing");
  await file(root, "content/media/2020/movie.mp4", "video");
  const markdown = await file(
    root,
    "content/_posts/2020/2020-01-01-test.md",
    `${post("test", "/content/media/2020/wide.PNG")}[small](/content/media/2020/a%20blank.png)\n![gif](/content/media/2020/animation.GIF)\n`,
  );
  const html = await file(
    root,
    "src/_includes/example.html",
    '<img src="/content/media/2020/tall.jpeg">',
  );
  const result = utility(root, "webp");
  assert.equal(result.status, 0, result.stderr);
  assert.equal(
    command("magick", [
      "identify",
      "-format",
      "%w %h",
      join(media, "wide.webp"),
    ]),
    "4096 1",
  );
  assert.equal(
    command("magick", [
      "identify",
      "-format",
      "%w %h",
      join(media, "tall.webp"),
    ]),
    "1 4096",
  );
  assert.equal(
    command("magick", [
      "identify",
      "-format",
      "%w %h %[opaque]",
      join(media, "a blank.webp"),
    ]),
    "8 9 False",
  );
  assert.deepEqual(await readFile(gif), originalGif);
  assert.equal(
    await readFile(join(media, "existing.webp"), "utf8"),
    "existing",
  );
  assert.equal(await readFile(join(media, "movie.mp4"), "utf8"), "video");
  await assert.rejects(readFile(join(media, "wide.PNG")), { code: "ENOENT" });
  const output = await readFile(markdown, "utf8");
  assert.match(output, /wide\.webp/);
  assert.match(output, /a%20blank\.webp/);
  assert.match(output, /animation\.GIF/);
  assert.doesNotMatch(output, /wide\.PNG/);
  assert.match(await readFile(html, "utf8"), /tall\.webp/);
});

test("WebP dry runs and destination collisions leave originals and references untouched", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-webp-safe-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const image = await file(
    root,
    "content/media/2020/photo.png",
    "untouched original",
  );
  const markdown = await file(
    root,
    "content/_posts/2020/2020-01-01-test.md",
    post("test", "/content/media/2020/photo.png"),
  );
  const original = await readFile(markdown, "utf8");
  assert.equal(utility(root, "webp", true).status, 0);
  assert.equal(await readFile(markdown, "utf8"), original);
  await file(root, "content/media/2020/photo.webp", "existing destination");
  const result = utility(root, "webp");
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /destination already exists/);
  assert.equal(await readFile(image, "utf8"), "untouched original");
  assert.equal(await readFile(markdown, "utf8"), original);
});

test("failed image conversions do not publish partial replacements", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-webp-failure-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const good = await file(root, "content/media/2020/a.png", "");
  command("magick", ["-size", "8x8", "xc:red", good]);
  await file(root, "content/media/2020/z.png", "not an image");
  const original = await readFile(good);
  const result = utility(root, "webp");
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /conversion failed/);
  assert.deepEqual(await readFile(good), original);
  await assert.rejects(readFile(join(root, "content/media/2020/a.webp")), {
    code: "ENOENT",
  });
});

test("date repair covers staged and unstaged dates, moves media and preserves review flags and identity", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-dates-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const one = await file(
    root,
    "content/_posts/2020/2020-03-01-one.md",
    post("one", "/content/media/2020/a%20blank.jpg"),
  );
  const two = await file(
    root,
    "content/_posts/2020/2020-03-01-two.md",
    post("two", "/content/media/2020/two.webp"),
  );
  await file(root, "content/media/2020/a blank.jpg", "first image");
  await file(root, "content/media/2020/two.webp", "second image");
  const shared = await file(
    root,
    "content/other.md",
    "![shared](/content/media/2020/a%20blank.jpg)",
  );
  commit(root);
  await writeFile(
    one,
    (await readFile(one, "utf8")).replace(
      '"2020-03-01T10:00:00.000Z"',
      "2021-02-03",
    ),
  );
  await writeFile(
    two,
    (await readFile(two, "utf8")).replace(
      "2020-03-01T10:00:00.000Z",
      "2021-12-31T23:30:00-02:00",
    ),
  );
  git(root, "add", "--", "content/_posts/2020/2020-03-01-two.md");
  const dry = utility(root, "dates", true);
  assert.equal(dry.status, 0, dry.stderr);
  assert.match(await readFile(one, "utf8"), /date: 2021-02-03/);
  await assert.rejects(
    readFile(join(root, "content/_posts/2021/2021-02-03-one.md")),
    { code: "ENOENT" },
  );
  const result = utility(root, "dates");
  assert.equal(result.status, 0, result.stderr);
  const first = await readFile(
    join(root, "content/_posts/2021/2021-02-03-one.md"),
    "utf8",
  );
  assert.match(first, /^date: "2021-02-03"$/m);
  assert.match(first, /^date_precision: "day"$/m);
  assert.match(first, /^needs_review: true$/m);
  assert.match(first, /^source_id: "one"$/m);
  assert.match(first, /^permalink: "\/posts\/one\/"$/m);
  assert.match(first, /^last_modified: "2020-04-01T10:00:00.000Z"$/m);
  assert.doesNotMatch(first, /\/content\/media\/2020\//);
  assert.match(first, /a%20blank\.jpg\?download=1/);
  const second = await readFile(
    join(root, "content/_posts/2022/2022-01-01-two.md"),
    "utf8",
  );
  assert.match(second, /^date: "2022-01-01T01:30:00.000Z"$/m);
  assert.match(second, /^date_precision: "second"$/m);
  assert.equal(
    await readFile(join(root, "content/media/2021/a blank.jpg"), "utf8"),
    "first image",
  );
  assert.equal(
    await readFile(join(root, "content/media/2022/two.webp"), "utf8"),
    "second image",
  );
  assert.match(await readFile(shared, "utf8"), /\/media\/2021\/a%20blank\.jpg/);
  await assert.rejects(readFile(one), { code: "ENOENT" });
  await assert.rejects(readFile(two), { code: "ENOENT" });
  assert.equal(
    git(root, "diff", "--cached", "--name-only").trim(),
    "content/_posts/2020/2020-03-01-two.md",
  );
});

test("date repair keeps readable media and generated post links aligned with the site timezone", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-readable-dates-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await file(
    root,
    "_config.yml",
    "timezone: America/New_York\npermalink: /post/:year-:month-:day-:title/\n",
  );
  const path = await file(
    root,
    "content/_posts/2020/2020-03-01-one.md",
    '---\nkind: photo\ntitle: one\ndate: "2020-03-01T10:00:00.000Z"\ndate_precision: second\npreview_image: "/content/media/2020/2020-03-01-one.webp"\ntags: []\n---\n![one](/content/media/2020/2020-03-01-one.webp)\n',
  );
  await file(root, "content/media/2020/2020-03-01-one.webp", "unchanged bytes");
  const reference = await file(
    root,
    "content/reference.md",
    "[one](/post/2020-03-01-one/?view=1)",
  );
  commit(root);
  await writeFile(
    path,
    (await readFile(path, "utf8")).replace(
      "2020-03-01T10:00:00.000Z",
      "2021-01-01T01:00:00.000Z",
    ),
  );
  const result = utility(root, "dates");
  assert.equal(result.status, 0, result.stderr);
  const output = await readFile(
    join(root, "content/_posts/2020/2020-12-31-one.md"),
    "utf8",
  );
  assert.match(output, /\/content\/media\/2020\/2020-12-31-one.webp/);
  assert.equal(
    await readFile(
      join(root, "content/media/2020/2020-12-31-one.webp"),
      "utf8",
    ),
    "unchanged bytes",
  );
  assert.equal(
    await readFile(reference, "utf8"),
    "[one](/post/2020-12-31-one/?view=1)",
  );
});

test("date repair retains compatible partial/minute precision and corrects incompatible values", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-dates-precision-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const cases = [
    ["year", "2021-01-01", "year"],
    ["month", "2021-06-01", "month"],
    ["minute", "2021-06-01T13:45:00Z", "minute"],
    ["year", "2021-06-01", "day"],
    ["month", "2021-06-02", "day"],
    ["minute", "2021-06-01T13:45:23Z", "second"],
  ];
  const fixtures: {
    path: string;
    edited: string;
    day: string;
    expected: string;
    id: string;
  }[] = [];
  for (const [index, [precision, date, expected]] of cases.entries()) {
    assert.ok(precision && date && expected);
    const id = `precision-${index}`;
    const original = post(id, `/content/media/2020/${id}.jpg`).replace(
      'date_precision: "second"',
      `date_precision: "${precision}"`,
    );
    const path = await file(
      root,
      `content/_posts/2020/2020-03-01-${id}.md`,
      original,
    );
    await file(root, `content/media/2020/${id}.jpg`, "image");
    fixtures.push({
      path,
      edited: original.replace("2020-03-01T10:00:00.000Z", date),
      day: date.slice(0, 10),
      expected,
      id,
    });
  }
  commit(root);
  for (const fixture of fixtures) await writeFile(fixture.path, fixture.edited);
  const result = utility(root, "dates");
  assert.equal(result.status, 0, result.stderr);
  for (const { day, expected, id } of fixtures) {
    const output = await readFile(
      join(root, `content/_posts/2021/${day}-${id}.md`),
      "utf8",
    );
    assert.match(output, new RegExp(`^date_precision: "${expected}"$`, "m"));
    assert.equal(
      await readFile(join(root, `content/media/2021/${id}.jpg`), "utf8"),
      "image",
    );
  }
});

test("body-only edits are ignored and staged renames retain the edited slug", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-dates-rename-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const original =
    post("one", "/content/media/2020/one.jpg") + "body\n".repeat(100);
  const old = await file(
    root,
    "content/_posts/2020/2020-03-01-one.md",
    original,
  );
  await file(root, "content/media/2020/one.jpg", "image");
  commit(root);
  await writeFile(old, `${original}body change\n`);
  assert.equal(utility(root, "dates").status, 0);
  assert.equal(await readFile(old, "utf8"), `${original}body change\n`);
  const renamed = join(dirname(old), "2020-03-01-renamed.md");
  await rename(old, renamed);
  await writeFile(
    renamed,
    original.replace("2020-03-01T10:00:00.000Z", "2021-04-05T12:00:00Z"),
  );
  git(root, "add", "-A");
  const result = utility(root, "dates");
  assert.equal(result.status, 0, result.stderr);
  assert.match(
    await readFile(
      join(root, "content/_posts/2021/2021-04-05-renamed.md"),
      "utf8",
    ),
    /date: "2021-04-05T12:00:00.000Z"/,
  );
});

test("invalid dates, colliding destinations and conflicting shared-media years fail without changing posts", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "blog-dates-safe-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const original = post("one", "/content/media/2020/one.jpg");
  const one = await file(
    root,
    "content/_posts/2020/2020-03-01-one.md",
    original,
  );
  const two = await file(
    root,
    "content/_posts/2020/2020-03-01-two.md",
    original,
  );
  await file(root, "content/media/2020/one.jpg", "image");
  commit(root);
  for (const value of [
    '"2021-02-30"',
    "2021-02-30T12:00:00Z",
    '"2021-02-03T12:00:00"',
  ]) {
    const edited = original.replace('"2020-03-01T10:00:00.000Z"', value);
    await writeFile(one, edited);
    const result = utility(root, "dates");
    assert.notEqual(result.status, 0);
    assert.equal(await readFile(one, "utf8"), edited);
  }
  const edited = original.replace(
    "2020-03-01T10:00:00.000Z",
    "2021-04-05T12:00:00Z",
  );
  await writeFile(one, edited);
  const destination = await file(
    root,
    "content/_posts/2021/2021-04-05-one.md",
    "existing post",
  );
  assert.match(utility(root, "dates").stderr, /destination already exists/);
  assert.equal(await readFile(destination, "utf8"), "existing post");
  await rm(destination);
  await writeFile(
    two,
    original.replace("2020-03-01T10:00:00.000Z", "2022-04-05T12:00:00Z"),
  );
  assert.match(utility(root, "dates").stderr, /conflicting destination years/);
  assert.equal(await readFile(one, "utf8"), edited);
  assert.equal(
    await readFile(join(root, "content/media/2020/one.jpg"), "utf8"),
    "image",
  );
});
