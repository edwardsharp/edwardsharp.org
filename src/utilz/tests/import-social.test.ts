import assert from "node:assert/strict";
import test from "node:test";
import {
  mkdir,
  mkdtemp,
  readFile,
  rename,
  rm,
  unlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseHTML } from "linkedom";
import { parse } from "yaml";
import { postDay } from "../post-format.ts";
import {
  cleanHTML,
  escapeHTML,
  formatSnippets,
  importPosts,
  parseEllo,
  parseTweet,
  postMarkdown,
  postHTML,
  postTags,
  protocolRelativeResources,
  replaceUnavailableImage,
  sourceDate,
  type SocialPost,
} from "../import-social.ts";

const post: SocialPost = {
  platform: "jsfiddle",
  id: "example",
  title: "canvas test",
  date: "2014-06-01T10:20:30-04:00",
  url: "https://jsfiddle.net/example/1/",
  kind: "code",
  html: '<pre><code class="language-javascript">{{ example }}</code></pre>',
  tags: ["Canvas", "canvas"],
  images: [],
};

test("demo resources inherit the page protocol without changing namespace identifiers or credits", () => {
  const source = [
    '<script src="http://code.jquery.com/jquery.js"></script>',
    "<link href='https://code.jquery.com/ui.css'>",
    "<img src=http://example.test/image.png>",
    '@import "http://example.test/style.css";',
    "body { background: url(https://example.test/background.png); }",
    "@namespace svg url(http://www.w3.org/2000/svg);",
    'import("http://example.test/module.js");',
    'fetch("http://example.test/data.json");',
    'const options = { url: "http://example.test/request" };',
    'const media = { src: "http://example.test/audio.mp3", icon: "http://example.test/marker.png", proxy: "http://example.test/proxy" };',
    'var url = "http://example.test/jsonp";',
    '<svg xmlns="http://www.w3.org/2000/svg"></svg>',
    '<svg xmlns:src="http://example.test/namespace"></svg>',
    'document.createElementNS("http://www.w3.org/2000/svg", "circle");',
    "// Source: http://example.test/project",
  ].join("\n");
  const normalized = protocolRelativeResources(source);
  assert.match(normalized, /src="\/\/code\.jquery\.com\/jquery\.js"/);
  assert.match(normalized, /href='\/\/code\.jquery\.com\/ui\.css'/);
  assert.match(normalized, /src=\/\/example\.test\/image\.png/);
  assert.match(normalized, /@import "\/\/example\.test\/style\.css"/);
  assert.match(normalized, /url\(\/\/example\.test\/background\.png\)/);
  assert.match(
    normalized,
    /@namespace svg url\(http:\/\/www\.w3\.org\/2000\/svg\)/,
  );
  assert.match(normalized, /import\("\/\/example\.test\/module\.js"\)/);
  assert.match(normalized, /fetch\("\/\/example\.test\/data\.json"\)/);
  assert.match(normalized, /url: "\/\/example\.test\/request"/);
  assert.match(normalized, /src: "\/\/example\.test\/audio\.mp3"/);
  assert.match(normalized, /icon: "\/\/example\.test\/marker\.png"/);
  assert.match(normalized, /proxy: "\/\/example\.test\/proxy"/);
  assert.match(normalized, /url = "\/\/example\.test\/jsonp"/);
  assert.match(normalized, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
  assert.match(normalized, /xmlns:src="http:\/\/example\.test\/namespace"/);
  assert.match(
    normalized,
    /createElementNS\("http:\/\/www\.w3\.org\/2000\/svg"/,
  );
  assert.match(normalized, /Source: http:\/\/example\.test\/project/);
  assert.equal(protocolRelativeResources(normalized), normalized);
});

test("imports preserve source instants and mark date-only sources without assuming a timezone", () => {
  assert.deepEqual(sourceDate(post.date), {
    date: "2014-06-01T14:20:30.000Z",
    precision: "second",
  });
  assert.deepEqual(sourceDate("2014-06-01"), {
    date: "2014-06-01",
    precision: "day",
  });
  assert.throws(() => sourceDate("2014-06-01 10:20:30"), /timezone/);
  assert.throws(() => sourceDate("2014-02-31"), /invalid/);
  assert.equal(
    postDay("2014-06-01T01:00:00Z", "America/New_York"),
    "2014-05-31",
  );
  assert.equal(postDay("2014-06-01", "America/New_York"), "2014-06-01");
});

test("source metadata keeps active services but omits retired profile provenance", () => {
  for (const [platform, url] of [
    ["youtube", "https://www.youtube.com/watch?v=example"],
    ["instagram", "https://www.instagram.com/p/example/"],
    ["ello", "https://ello.co/owner/post/example"],
  ] as const) {
    const captured: SocialPost = { ...post, platform, url };
    const text = postMarkdown(captured, postHTML(captured, "<p>caption</p>"));
    const header = parse(text.split("---")[1] ?? "");
    assert.equal(header.source, platform === "youtube" ? url : undefined);
    assert.equal(text.includes("original "), platform === "youtube");
    assert.equal(Object.keys(header).at(-1), "tags");
    assert.doesNotMatch(
      text,
      /^(?:source_id|source_platform|source_url|permalink):/m,
    );
  }
});

test("imported code remains literal while local media keeps baseurl-aware URLs", () => {
  const markdown = postMarkdown(
    post,
    `${post.html}<img src="/content/media/2014/example.jpg">`,
  );
  assert.match(markdown, /&#123;&#123; example &#125;&#125;/);
  assert.match(
    markdown,
    /src="{{ '\/content\/media\/2014\/example.jpg' \| relative_url }}"/,
  );
  assert.match(markdown, /^source: "https:\/\/jsfiddle.net\/example\/1\/"$/m);
  assert.doesNotMatch(markdown, /^(?:permalink|source_id|source_platform):/m);
  assert.deepEqual(postTags(post), [
    "jsfiddle",
    "code",
    "Canvas",
    "javascript",
  ]);
  assert.equal(escapeHTML("<&{{"), "&lt;&amp;&#123;&#123;");
  assert.match(
    postMarkdown({ ...post, title: " " }, post.html),
    /title: "code \/ 2014-06-01"/,
  );
});

test("archived HTML keeps public links and captions without executable markup", () => {
  const html = cleanHTML(
    '<p onclick="bad()">caption <a href="/post">link</a><script>bad()</script><img src="https://example.com/image.jpg" onerror="bad()"><a href="javascript:bad()">bad</a>{{ value }}</p>',
    "https://ello.co/owner",
  );
  assert.match(html, /href="https:\/\/ello.co\/post"/);
  assert.match(html, /&#123;&#123; value &#125;&#125;/);
  assert.doesNotMatch(html, /onclick|onerror|javascript:|<script/);
});

test("older photoset captures produce photo metadata and retain every image", () => {
  const images = [
    "https://example.com/first.jpg",
    "https://example.com/second.jpg",
  ];
  const photoset: SocialPost = {
    ...post,
    platform: "ello",
    kind: "photoset",
    title: "",
    tags: [],
    images,
    html: images.map((src) => `<img src="${src}">`).join(""),
  };
  assert.deepEqual(postTags(photoset), ["ello", "photo"]);
  const markdown = postMarkdown(photoset, photoset.html);
  assert.match(markdown, /^kind: "photo"$/m);
  assert.match(markdown, /^title: "photo \/ 2014-06-01"$/m);
  assert.doesNotMatch(markdown, /photoset/);
  for (const image of images) assert.ok(markdown.includes(image));
});

test("Ello imports use post publication dates rather than snapshot dates", () => {
  const [parsed] = parseEllo(
    '<article><header><span>Thu, 26 Jul 18 21:07:10 +0000</span><a href="https://ello.co/3dwardsharp/post/abc">post</a></header><section><p>original caption</p><img src="https://example.com/photo.jpg"><img src="https://example.com/second.jpg"></section><footer>10 likes</footer></article>',
    "https://web.archive.org/web/20210614012230/https://ello.co/3dwardsharp",
  );
  assert.equal(parsed?.date, "2018-07-26T21:07:10.000Z");
  assert.equal(parsed?.kind, "photo");
  assert.deepEqual(parsed?.images, [
    "https://example.com/photo.jpg",
    "https://example.com/second.jpg",
  ]);
  assert.doesNotMatch(parsed!.html, /likes/);
});

test("unavailable archived images become notices without removing captions or working images", () => {
  const html = replaceUnavailableImage(
    '<p>a caption</p><img src="https://example.com/missing.jpg"><img src="/content/media/working.jpg">',
    "https://example.com/missing.jpg",
  );
  assert.doesNotMatch(html, /missing\.jpg/);
  assert.match(html, /image unavailable in the recovered archive/);
  assert.match(html, /a caption/);
  assert.match(html, /src="\/content\/media\/working.jpg"/);
  assert.match(
    replaceUnavailableImage(
      "<p>caption without a preview</p>",
      "https://example.com/preview.jpg",
    ),
    /caption without a preview.*image unavailable/s,
  );
});

test("Twitter imports check ownership and recover the original instant from its source ID", () => {
  const id = "1212440717953556482";
  const html = `<div class="tweet" data-tweet-id="${id}" data-screen-name="3dwardsharp"><p class="js-tweet-text">original tweet</p><div class="AdaptiveMedia-photoContainer"><img src="https://example.com/first.jpg"></div><div class="AdaptiveMedia-photoContainer"><img src="https://example.com/second.jpg"></div></div>`;
  const parsed = parseTweet(
    html,
    id,
    "https://web.archive.org/web/20200107075707/https://twitter.com/3dwardsharp/status/" +
      id,
  );
  assert.equal(parsed.date, "2020-01-01T18:29:27.876Z");
  assert.equal(parsed.kind, "photo");
  assert.deepEqual(parsed.images, [
    "https://example.com/first.jpg",
    "https://example.com/second.jpg",
  ]);
  assert.throws(
    () =>
      parseTweet(
        html.replace(
          'data-screen-name="3dwardsharp"',
          'data-screen-name="someone-else"',
        ),
        id,
        parsed.archiveUrl!,
      ),
    /original account/,
  );
});

test("extracted entries omit platform branding and turn hashtag links into local filters", () => {
  const extracted: SocialPost = {
    ...post,
    platform: "twitter",
    id: "1212440717953556482",
    kind: "entry",
    url: "https://twitter.com/3dwardsharp/status/1212440717953556482",
    archiveUrl:
      "https://web.archive.org/web/20200107075707/https://twitter.com/3dwardsharp/status/1212440717953556482",
    html: '<p><a href="https://twitter.com/hashtag/hodgepodge?src=hash">#hodgepodge</a></p>',
    tags: [],
  };
  const markdown = postMarkdown(extracted, postHTML(extracted, extracted.html));
  assert.doesNotMatch(
    markdown,
    /twitter|web\.archive|source_url|source_platform/i,
  );
  assert.doesNotMatch(markdown, /^(?:permalink|source):/m);
  assert.match(markdown, /href="{{ '\/' \| relative_url }}\?tag=hodgepodge"/);
});

test("snippets are formatted and highlighted without running their code; invalid source stays visible", async () => {
  const result = await formatSnippets(
    '<pre><code class="language-javascript">const x="caf\u00e9"</code></pre><pre><code class="language-javascript">const =</code></pre>',
  );
  const { document } = parseHTML(`<html><body>${result.html}</body></html>`);
  const blocks = document.querySelectorAll("pre.highlight > code");
  assert.equal(blocks[0]?.textContent, 'const x = "caf\u00e9";\n');
  assert.ok(blocks[0]?.querySelector("span"));
  assert.equal(blocks[1]?.textContent, "const =");
  assert.equal(result.warnings.length, 1);
  assert.match(result.html, /original code is shown/);
});

test("code imports normalize both displayed includes and saved demo resources", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "social-import-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const input = join(root, "capture.json");
  const report = join(root, "report.json");
  await writeFile(
    input,
    JSON.stringify([
      {
        ...post,
        html: '<pre><code class="language-html">&lt;script src="http://example.test/library.js"&gt;&lt;/script&gt;\n&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;&lt;/svg&gt;</code></pre>',
        demo: '<link href="http://example.test/style.css"><script src="https://example.test/library.js"></script>',
      },
    ]),
  );
  await importPosts(input, report, root);
  assert.equal(JSON.parse(await readFile(report, "utf8")).failures.length, 0);
  const markdown = await readFile(
    join(root, "content/_posts/2014/2014-06-01-canvas-test.md"),
    "utf8",
  );
  const body = markdown.slice(markdown.indexOf("\n---\n") + 5);
  const { document } = parseHTML(`<html><body>${body}</body></html>`);
  const code = document.querySelector("pre code");
  assert.ok(code);
  assert.match(code.textContent, /src="\/\/example\.test\/library\.js"/);
  assert.match(code.textContent, /xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
  const demo = await readFile(
    join(root, "content/media/2014/2014-06-01-canvas-test-demo.html"),
    "utf8",
  );
  assert.match(demo, /href="\/\/example\.test\/style\.css"/);
  assert.match(demo, /src="\/\/example\.test\/library\.js"/);
});

test("import history skips edited, renamed, and deleted posts but admits new source IDs", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "social-import-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const network = t.mock.method(globalThis, "fetch", async () => {
    throw new Error("unexpected media download");
  });
  const input = join(root, "capture.json");
  const report = join(root, "report.json");
  const original: SocialPost = {
    ...post,
    platform: "youtube",
    html: "<p>original</p>",
  };
  await writeFile(input, JSON.stringify([original]));
  await importPosts(input, report, root);
  const filename = join(root, "content/_posts/2014/2014-06-01-canvas-test.md");
  const moved = join(root, "content/_posts/2014/2014-06-01-my-edited-title.md");
  await rename(filename, moved);
  await writeFile(moved, "my edited post\n");
  const changed: SocialPost = {
    ...original,
    date: "2021-01-01",
    html: "replacement",
    images: ["https://example.invalid/new.jpg"],
  };
  await writeFile(
    input,
    JSON.stringify([changed, { ...original, id: "new-post" }]),
  );
  await importPosts(input, report, root);
  const result = JSON.parse(await readFile(report, "utf8"));
  assert.equal(result.skipped.length, 1);
  assert.equal(result.imported.length, 1);
  assert.equal(network.mock.callCount(), 0);
  assert.equal(await readFile(moved, "utf8"), "my edited post\n");
  await unlink(moved);
  await writeFile(input, JSON.stringify([changed]));
  await importPosts(input, report, root);
  assert.equal(JSON.parse(await readFile(report, "utf8")).skipped.length, 1);
  await assert.rejects(
    readFile(join(root, "content/_posts/2021/2021-01-01-youtube-example.md")),
    { code: "ENOENT" },
  );
});

test("existing posts are registered without touching their media; malformed history is rejected", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "social-import-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const input = join(root, "capture.json");
  const report = join(root, "report.json");
  const filename = join(
    root,
    "content/_posts/2014/2014-06-01-jsfiddle-example.md",
  );
  const demo = join(
    root,
    "content/media/2014/2014-06-01-jsfiddle-example-demo.html",
  );
  await mkdir(join(root, "content/_posts/2014"), { recursive: true });
  await mkdir(join(root, "content/media/2014"), { recursive: true });
  await writeFile(filename, "edited before history was introduced\n");
  await writeFile(demo, "my edited demo\n");
  await writeFile(input, JSON.stringify([{ ...post, demo: "replacement" }]));
  await importPosts(input, report, root);
  assert.equal(
    await readFile(filename, "utf8"),
    "edited before history was introduced\n",
  );
  assert.equal(await readFile(demo, "utf8"), "my edited demo\n");
  await writeFile(
    join(root, "src/utilz/social-import-history.jsonl"),
    "{not json}\n",
  );
  await assert.rejects(importPosts(input, report, root), SyntaxError);
});

test("Flickr, Archive.org, and Bandcamp captures keep dates, project tags, source links, and import history", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "social-import-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const input = join(root, "capture.json");
  const report = join(root, "report.json");
  const sources: SocialPost[] = [
    {
      ...post,
      platform: "flickr",
      kind: "photo",
      url: "https://www.flickr.com/photos/example/123/",
    },
    {
      ...post,
      platform: "archive",
      kind: "audio",
      url: "https://archive.org/details/example",
    },
    {
      ...post,
      platform: "bandcamp",
      kind: "audio",
      date: "2014-06-01",
      url: "https://example.bandcamp.com/album/example",
    },
  ];
  for (const source of sources) {
    source.html = "<p>original caption</p>";
    source.tags = ["futuredeath.agency"];
  }
  await writeFile(input, JSON.stringify(sources));
  await importPosts(input, report, root);
  assert.equal(JSON.parse(await readFile(report, "utf8")).imported.length, 3);
  for (const [index, source] of sources.entries()) {
    const markdown = await readFile(
      join(
        root,
        `content/_posts/2014/2014-06-01-canvas-test${index ? `-${index + 1}` : ""}.md`,
      ),
      "utf8",
    );
    assert.ok(markdown.includes(`href="${source.url}"`));
    assert.match(markdown, /original caption/);
    assert.match(markdown, /futuredeath\.agency/);
    assert.ok(markdown.includes(`kind: "${source.kind}"`));
    assert.ok(
      markdown.includes(
        source.platform === "bandcamp"
          ? 'date: "2014-06-01"\ndate_precision: "day"'
          : 'date: "2014-06-01T14:20:30.000Z"\ndate_precision: "second"',
      ),
    );
  }
  await importPosts(input, report, root);
  const rerun = JSON.parse(await readFile(report, "utf8"));
  assert.equal(rerun.imported.length, 0);
  assert.equal(rerun.skipped.length, 3);
});
