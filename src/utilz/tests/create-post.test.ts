import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  chmod,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  utimes,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { PassThrough } from "node:stream";
import test from "node:test";
import { setTimeout } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import { parseHTML } from "linkedom";
import { parse } from "yaml";
import {
  createPost,
  DateInputError,
  expandPath,
  githubRepositoryURL,
  mediaCreationDate,
  parsePostDate,
  readGitHubReadme,
  readGitHubRepository,
  readPostCatalog,
  type NewPost,
} from "../create-post.ts";
import { locationKey, tagKey } from "../../ts/feed-filters.ts";
import { newPost, requestDate, requestTags } from "../tui.ts";

function promptOutput(): PassThrough {
  const output = Object.assign(new PassThrough(), { columns: 240 });
  // Unlike a terminal, a PassThrough would close after the first prompt.
  output.end = () => output;
  return output;
}

function renderedPosts(root: string): { kind: string; html: string }[] {
  const rendered = spawnSync(
    "bundle",
    [
      "exec",
      "ruby",
      "-EUTF-8:UTF-8",
      "-rjekyll",
      "-rjson",
      "-e",
      `
      require File.join(ARGV.fetch(0), "src/_plugins/markdown-images.rb")
      site = Jekyll::Site.new(Jekyll.configuration(
        "source" => ARGV.fetch(1), "destination" => File.join(ARGV.fetch(1), "_site"),
        "config" => [], "plugins_dir" => [], "baseurl" => "/preview",
        "disable_disk_cache" => true, "quiet" => true
      ))
      site.process
      puts JSON.generate(site.posts.docs.map { |post| { kind: post["kind"], html: post.output } })
    `,
      fileURLToPath(new URL("../../../", import.meta.url)),
      root,
    ],
    { encoding: "utf8" },
  );
  assert.ifError(rendered.error);
  assert.equal(rendered.status, 0, rendered.stderr);
  return JSON.parse(rendered.stdout);
}

test("media kinds pick their files before the editable creation-date prompt and non-images still offer previews", async (t) => {
  t.mock.method(console, "log", () => {});
  for (const kind of ["photo", "screenshot", "doodle", "video", "audio"]) {
    await t.test(kind, async (t) => {
      const root = await mkdtemp(join(tmpdir(), "post-prompts-"));
      t.after(() => rm(root, { recursive: true, force: true }));
      await mkdir(join(root, "content/_posts/2014"), { recursive: true });
      await writeFile(
        join(root, "_config.yml"),
        "timezone: America/New_York\n",
      );
      await writeFile(
        join(root, "content/_posts/2014/2014-01-01-fixture.md"),
        `---\nkind: ${kind}\ntags: []\n---\n`,
      );
      const image = !["video", "audio"].includes(kind);
      const filename = join(
        root,
        `Screen Shot 2000-01-01 at 12.00.00.${image ? "png" : kind === "video" ? "mov" : "wav"}`,
      );
      await writeFile(
        filename,
        "not converted when the final write is declined",
      );
      await utimes(filename, new Date("2001-01-01"), new Date("2001-01-01"));
      const created = (await stat(filename)).birthtime.toISOString();
      assert.equal(await mediaCreationDate(filename), created);
      const input = new PassThrough();
      const output = promptOutput();
      const controller = new AbortController();
      let screen = "";
      output.on("data", (chunk) => {
        screen += chunk.toString();
      });
      const result = newPost(root, {
        input,
        output,
        signal: controller.signal,
      });
      async function wait(message: string) {
        for (
          let attempt = 0;
          attempt < 300 && !screen.includes(message);
          attempt++
        )
          await setTimeout(10);
        assert.ok(screen.includes(message), screen);
      }
      async function answer(message: string, keys: string) {
        await wait(message);
        screen = "";
        input.write(keys);
      }
      try {
        await answer("kind (type to search or add)", kind);
        await setTimeout(400);
        input.write("\r");
        const chooseText = process.platform === "darwin" ? "\x1b[B\r" : "\r";
        await wait(image ? "images (0 selected;" : `choose ${kind}`);
        assert.ok(!screen.includes("date (flexible;"), screen);
        await answer(
          image ? "images (0 selected;" : `choose ${kind}`,
          chooseText,
        );
        await answer(
          image ? "image path" : `choose ${kind} path`,
          `${filename}\r`,
        );
        if (image) {
          await answer("alt text:", "example\r");
          await answer("images (1 selected;", "\x1b[A\r");
        }
        await wait("date (flexible;");
        assert.ok(screen.replace(/\r?\n/g, "").includes(created), screen);
        await answer("date (flexible;", "\r");
        await answer("use this date?", "y\r");
        await answer("name / title", "example\r");
        await answer("tags (none;", "\r");
        await answer("done / skip", "\r");
        if (!image) await answer("preview images (0 selected;", "\x1b[A\r");
        await answer("write this post and prepare its media?", "n\r");
        assert.equal(await result, undefined);
        assert.deepEqual(await readdir(join(root, "content/_posts/2014")), [
          "2014-01-01-fixture.md",
        ]);
        assert.ok(!(await readdir(join(root, "content"))).includes("media"));
      } finally {
        controller.abort();
        await result.catch(() => {});
        input.destroy();
        output.destroy();
      }
    });
  }
});

test("the seeded date can be accepted or replaced without losing the normal date confirmation", async (t) => {
  t.mock.method(console, "log", () => {});
  for (const edited of [false, true]) {
    await t.test(edited ? "edited" : "accepted", async () => {
      const input = new PassThrough();
      const output = promptOutput();
      const controller = new AbortController();
      let screen = "";
      output.on("data", (chunk) => {
        screen += chunk.toString();
      });
      const created = "2014-09-30T23:11:15.801Z";
      const result = requestDate("America/New_York", created, {
        input,
        output,
        signal: controller.signal,
      });
      try {
        for (
          let i = 0;
          i < 200 && !screen.replace(/\r?\n/g, "").includes(created);
          i++
        )
          await setTimeout(10);
        assert.ok(screen.replace(/\r?\n/g, "").includes(created), screen);
        input.write(edited ? "2015-01-02 7pm\r" : "\r");
        for (let i = 0; i < 200 && !screen.includes("use this date?"); i++)
          await setTimeout(10);
        assert.ok(screen.includes("use this date?"), screen);
        input.write("y\r");
        const date = await result;
        assert.equal(date.date, edited ? "2015-01-03T00:00:00.000Z" : created);
        assert.equal(date.precision, edited ? "minute" : "second");
      } finally {
        controller.abort();
        await result.catch(() => {});
        input.destroy();
        output.destroy();
      }
    });
  }
});

test("the code wizard asks for GitHub first and writes the repository date, source, and opted-in README", async (t) => {
  t.mock.method(console, "log", () => {});
  const root = await mkdtemp(join(tmpdir(), "post-github-prompts-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(root, "content/_posts/2014"), { recursive: true });
  await writeFile(join(root, "_config.yml"), "timezone: America/New_York\n");
  await writeFile(
    join(root, "content/_posts/2014/2014-01-01-fixture.md"),
    "---\nkind: code\ntags: []\n---\n",
  );
  const url = "https://github.com/example/project";
  const created = "2010-01-02T03:04:05.000Z";
  const readme = "# project\n\n{{ literal }}\n";
  const responses = {
    "repos/example/project": {
      html_url: url,
      created_at: "2010-01-02T03:04:05Z",
      private: false,
    },
    "repos/example/project/readme": {
      name: "README.md",
      encoding: "base64",
      content: Buffer.from(readme).toString("base64"),
    },
  };
  const bin = join(root, "bin");
  await mkdir(bin);
  const gh = join(bin, "gh");
  await writeFile(
    gh,
    `#!/usr/bin/env node\nconst responses = ${JSON.stringify(responses)};\nconst endpoint = process.argv.at(-1);\nif (!Object.hasOwn(responses, endpoint)) throw new Error("unexpected GitHub endpoint: " + endpoint);\nconsole.log(JSON.stringify(responses[endpoint]));\n`,
  );
  await chmod(gh, 0o755);
  const previous = process.env.PATH;
  process.env.PATH = `${bin}${process.platform === "win32" ? ";" : ":"}${previous ?? ""}`;
  t.after(() => {
    if (previous === undefined) delete process.env.PATH;
    else process.env.PATH = previous;
  });
  const input = new PassThrough();
  const output = promptOutput();
  const controller = new AbortController();
  let screen = "";
  output.on("data", (chunk) => {
    screen += chunk.toString();
  });
  const result = newPost(root, { input, output, signal: controller.signal });
  async function answer(message: string, keys: string) {
    for (let i = 0; i < 300 && !screen.includes(message); i++)
      await setTimeout(10);
    assert.ok(screen.includes(message), screen);
    screen = "";
    input.write(keys);
  }
  try {
    await answer("kind (type to search or add)", "code");
    await setTimeout(400);
    input.write("\r");
    await answer("GitHub repository URL (optional)", `${url}.git\r`);
    await answer("import the repository README as post content?", "y\r");
    for (let i = 0; i < 300 && !screen.includes("date (flexible;"); i++)
      await setTimeout(10);
    assert.ok(screen.replace(/\r?\n/g, "").includes(created), screen);
    await answer("date (flexible;", "\r");
    await answer("use this date?", "y\r");
    await answer("name / title", "project\r");
    await answer("tags (none;", "\r");
    await answer("done / skip", "\r");
    await answer("images (0 selected;", "\x1b[A\r");
    await answer("write this post and prepare its media?", "y\r");
    const filename = await result;
    assert.ok(filename);
    const text = await readFile(filename, "utf8");
    const header = parse(text.split("---")[1] ?? "");
    assert.equal(header.date, created);
    assert.equal(header.source, url);
    assert.equal(header.render_with_liquid, false);
    assert.ok(text.includes(readme));
  } finally {
    controller.abort();
    await result.catch(() => {});
    input.destroy();
    output.destroy();
  }
});

test("GitHub repository metadata and Markdown README imports validate responses and propagate failures", async () => {
  const url = "https://github.com/example/project";
  assert.equal(githubRepositoryURL(`${url}.git?tab=readme#usage`), url);
  for (const invalid of [
    "https://example.com/a/b",
    `${url}/tree/main`,
    "https://token@github.com/a/b",
    "file:///a/b",
  ])
    assert.throws(() => githubRepositoryURL(invalid));
  const repository = await readGitHubRepository(url, async (endpoint) => {
    assert.equal(endpoint, "repos/example/project");
    return {
      html_url: url,
      created_at: "2014-09-30T23:11:15Z",
      private: false,
    };
  });
  assert.deepEqual(repository, {
    url,
    createdAt: "2014-09-30T23:11:15.000Z",
    private: false,
  });
  const readme = "# example\n\n```liquid\n{{ literal }}\n```\n";
  assert.equal(
    await readGitHubReadme(url, async (endpoint) => {
      assert.equal(endpoint, "repos/example/project/readme");
      return {
        name: "README.md",
        encoding: "base64",
        content: Buffer.from(readme).toString("base64") + "\n",
      };
    }),
    readme,
  );
  await assert.rejects(
    readGitHubRepository(url, async () => ({
      html_url: url,
      created_at: "2014-02-31T12:00:00Z",
      private: false,
    })),
    /metadata/,
  );
  await assert.rejects(
    readGitHubReadme(url, async () => ({
      name: "README.md",
      encoding: "base64",
      content: "%%%broken",
    })),
    /base64/,
  );
  await assert.rejects(
    readGitHubReadme(url, async () => ({
      name: "README.rst",
      encoding: "base64",
      content: "",
    })),
    /not Markdown/,
  );
  await assert.rejects(
    readGitHubReadme(url, async () => {
      throw new Error("GitHub 404: README not found");
    }),
    /README not found/,
  );
});

test("code posts persist the repository source, imported Markdown, and an overridden date without evaluating Liquid", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "post-readme-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const body =
    "# project\n\n```liquid\n{{ example }} {% include missing.html %}\n```\n";
  const filename = await createPost(root, {
    title: "project",
    kind: "code",
    date: parsePostDate("2014-09-30"),
    tags: [],
    images: [],
    source: "https://github.com/example/project.git",
    body,
  });
  const text = await readFile(filename, "utf8");
  const header = parse(text.split("---")[1] ?? "");
  assert.equal(header.source, "https://github.com/example/project");
  assert.equal(header.date, "2014-09-30");
  assert.equal(header.render_with_liquid, false);
  assert.ok(text.includes(body));
  const rendered = renderedPosts(root)[0];
  assert.ok(rendered);
  const { document } = parseHTML(rendered.html);
  assert.ok(
    document
      .querySelector("code")
      ?.textContent.includes("{{ example }} {% include missing.html %}"),
  );
});

test("video and audio posts transcode media, retain original files, and use optional WebP previews", async (t) => {
  const temporary = await mkdtemp(join(tmpdir(), "post-media-"));
  t.after(() => rm(temporary, { recursive: true, force: true }));
  const root = join(temporary, "site");
  await mkdir(root);
  const preview = join(temporary, "preview.png");
  const image = spawnSync("magick", ["-size", "16x16", "xc:red", preview]);
  assert.ifError(image.error);
  assert.equal(image.status, 0, image.stderr.toString());
  for (const kind of ["video", "audio"] as const) {
    const original = join(
      temporary,
      kind === "video" ? "recording.mov" : "recording.wav",
    );
    const made = spawnSync("ffmpeg", [
      "-nostdin",
      "-v",
      "error",
      "-f",
      "lavfi",
      "-i",
      kind === "video" ? "color=c=red:s=16x16:r=5" : "sine=frequency=440",
      ...(kind === "video"
        ? ["-f", "lavfi", "-i", "sine=frequency=440", "-c:a", "pcm_s16le"]
        : []),
      "-t",
      "0.2",
      "-metadata",
      "title=private metadata",
      original,
    ]);
    assert.ifError(made.error);
    assert.equal(made.status, 0, made.stderr.toString());
    const bytes = await readFile(original);
    for (const withPreview of [true, false]) {
      const filename = await createPost(root, {
        title: `example ${kind}`,
        kind,
        date: parsePostDate("2014-09-30 7pm", new Date(), "America/New_York"),
        tags: [],
        images: withPreview ? [{ filename: preview, alt: "preview" }] : [],
        media: { filename: original, kind },
      });
      const text = await readFile(filename, "utf8");
      const header = parse(text.split("---")[1] ?? "");
      assert.equal(header.date, "2014-09-30T23:00:00.000Z");
      const mediaPath = text.match(/\/content\/media\/[^']+\.(?:mp4|mp3)/)?.[0];
      assert.ok(mediaPath, text);
      const checked = spawnSync(
        "ffprobe",
        [
          "-v",
          "error",
          "-show_streams",
          "-show_format",
          "-of",
          "json",
          join(root, mediaPath.slice(1)),
        ],
        { encoding: "utf8" },
      );
      assert.ifError(checked.error);
      assert.equal(checked.status, 0, checked.stderr);
      const info = JSON.parse(checked.stdout);
      assert.equal(
        info.streams[0].codec_name,
        kind === "video" ? "h264" : "mp3",
      );
      if (kind === "video")
        assert.equal(
          info.streams.find(
            (stream: { codec_type: string }) => stream.codec_type === "audio",
          )?.codec_name,
          "aac",
        );
      assert.ok(Number(info.format.duration) > 0);
      assert.doesNotMatch(checked.stdout, /private metadata/);
      assert.match(
        text,
        kind === "video" ? /<video controls/ : /<audio controls/,
      );
      if (withPreview) {
        assert.match(header.preview_image, /-poster\.webp$/);
        assert.equal(header.preview_alt, "preview");
        assert.ok(
          (await stat(join(root, header.preview_image.slice(1)))).size > 0,
        );
        if (kind === "video") {
          assert.ok(
            text.includes(
              `poster="{{ '${header.preview_image}' | relative_url }}"`,
            ),
          );
          assert.doesNotMatch(text, /^!\[/m);
        } else assert.match(text, /^!\[preview\]/m);
      } else {
        assert.equal(header.preview_image, undefined);
        assert.doesNotMatch(text, /poster=/);
      }
    }
    assert.deepEqual(await readFile(original), bytes);
  }
  const rendered = renderedPosts(root);
  assert.equal(rendered.length, 4);
  for (const post of rendered) {
    const { document } = parseHTML(post.html);
    const source = document.querySelector(`${post.kind} source`);
    assert.ok(
      source?.getAttribute("src")?.startsWith("/preview/content/media/"),
    );
    const poster = document.querySelector("video")?.getAttribute("poster");
    if (poster) assert.ok(poster.startsWith("/preview/content/media/"));
    for (const image of document.querySelectorAll("img"))
      assert.ok(
        image.getAttribute("src")?.startsWith("/preview/content/media/"),
      );
  }
});

test("failed media conversion publishes neither previews nor posts", async (t) => {
  const temporary = await mkdtemp(join(tmpdir(), "post-media-failure-"));
  t.after(() => rm(temporary, { recursive: true, force: true }));
  const root = join(temporary, "site");
  await mkdir(root);
  const preview = join(temporary, "preview.png");
  const image = spawnSync("magick", ["-size", "8x8", "xc:red", preview]);
  assert.ifError(image.error);
  assert.equal(image.status, 0, image.stderr.toString());
  for (const kind of ["video", "audio"] as const) {
    const filename = join(
      temporary,
      `broken.${kind === "video" ? "mov" : "wav"}`,
    );
    await writeFile(filename, "not media");
    await assert.rejects(
      createPost(root, {
        title: "broken",
        kind,
        date: parsePostDate("2014-09-30"),
        tags: [],
        images: [{ filename: preview, alt: "preview" }],
        media: { filename, kind },
      }),
      /ffmpeg/,
    );
    assert.deepEqual(await readdir(root), []);
  }
});

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

test("new posts convert images to WebP, strip metadata, preserve alt text, and never overwrite posts", async (t) => {
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
    assert.ifError(made.error);
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
  assert.equal(
    filename,
    join(root, "content/_posts/2014/2014-09-01-test-thing.md"),
  );
  assert.deepEqual(Object.keys(header).slice(0, 5), [
    "kind",
    "title",
    "date",
    "date_precision",
    "preview_image",
  ]);
  assert.equal(Object.keys(header).at(-1), "tags");
  assert.equal(header.source_id, undefined);
  assert.equal(header.permalink, undefined);
  assert.match(text, /^!\[first \\\[alt\\\] &amp; &quot;quoted&quot;\]/m);
  assert.equal(text.match(/^!\[/gm)?.length, 2);
  assert.equal(header.preview_alt, 'first [alt] & "quoted"');
  const links = [...text.matchAll(/\]\((\/content\/media\/[^)]+)\)/g)].map(
    (match) => match[1],
  );
  assert.equal(header.preview_image, links[0]);
  assert.ok(links.every((link) => link?.endsWith(".webp")));
  for (const link of links) {
    assert.ok(link);
    const checked = spawnSync(
      "magick",
      ["identify", "-verbose", join(root, link.slice(1))],
      { encoding: "utf8" },
    );
    assert.ifError(checked.error);
    assert.equal(checked.status, 0, checked.stderr);
    assert.match(checked.stdout, /Format: WEBP/);
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
  assert.equal(
    other,
    join(root, "content/_posts/2014/2014-09-01-test-thing-2.md"),
  );
  assert.equal(otherHeader.permalink, undefined);
  assert.equal(otherHeader.preview_image, undefined);
});

test("WebP post images preserve animation and transparency without modifying originals", async (t) => {
  const temporary = await mkdtemp(join(tmpdir(), "create-post-animation-"));
  t.after(() => rm(temporary, { recursive: true, force: true }));
  const root = join(temporary, "site");
  await mkdir(root);
  const original = join(temporary, "animation.gif");
  const made = spawnSync("magick", [
    "-delay",
    "12",
    "-size",
    "8x8",
    "xc:none",
    "-fill",
    "red",
    "-draw",
    "rectangle 2,2 5,5",
    "-delay",
    "25",
    "(",
    "-size",
    "8x8",
    "xc:none",
    "-fill",
    "blue",
    "-draw",
    "rectangle 2,2 5,5",
    ")",
    "-loop",
    "0",
    original,
  ]);
  assert.ifError(made.error);
  assert.equal(made.status, 0, made.stderr.toString());
  const bytes = await readFile(original);
  const filename = await createPost(root, {
    title: "animation",
    kind: "photo",
    date: parsePostDate("2026-03-20"),
    tags: [],
    images: [{ filename: original, alt: "animated shapes" }],
  });
  const header = parse(
    (await readFile(filename, "utf8")).split("---")[1] ?? "",
  );
  const checked = spawnSync(
    "magick",
    [
      "identify",
      "-format",
      "%m %T %[fx:p{0,0}.a]\n",
      join(root, header.preview_image.slice(1)),
    ],
    { encoding: "utf8" },
  );
  assert.ifError(checked.error);
  assert.equal(checked.status, 0, checked.stderr);
  assert.deepEqual(checked.stdout.trim().split("\n"), [
    "WEBP 12 0",
    "WEBP 25 0",
  ]);
  assert.deepEqual(await readFile(original), bytes);
});

test("generated filenames stay short without changing titles; doodle wins over screenshot tags", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "post-kinds-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const filename = await createPost(root, {
    title: "image (2026-03-20 180643)",
    kind: "photo",
    date: parsePostDate("2026-03-20"),
    tags: ["screenshot", "doodle", "drawing"],
    images: [],
  });
  assert.equal(
    filename,
    join(root, "content/_posts/2026/2026-03-20-doodle.md"),
  );
  const header = parse(
    (await readFile(filename, "utf8")).split("---")[1] ?? "",
  );
  assert.equal(header.title, "image (2026-03-20 180643)");
  assert.equal(header.kind, "doodle");
  assert.deepEqual(header.tags, ["drawing"]);
});

test("failed image preparation publishes nothing and pasted paths are expanded without shell evaluation", async (t) => {
  const temporary = await mkdtemp(join(tmpdir(), "create-post-failure-"));
  t.after(() => rm(temporary, { recursive: true, force: true }));
  const root = join(temporary, "site");
  await mkdir(root);
  const good = join(temporary, "good.png");
  const bad = join(temporary, "bad.png");
  const made = spawnSync("magick", ["-size", "8x8", "xc:red", good]);
  assert.ifError(made.error);
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
