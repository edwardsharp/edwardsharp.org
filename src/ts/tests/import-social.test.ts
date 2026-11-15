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
  assert.match(markdown, /permalink: "\/post\/jsfiddle-example\/"/);
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
  assert.match(markdown, /permalink: "\/post\/1212440717953556482\/"/);
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
  const filename = join(
    root,
    "content/_posts/2014/2014-06-01-youtube-example.md",
  );
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
    join(root, "src/ts/social-import-history.jsonl"),
    "{not json}\n",
  );
  await assert.rejects(importPosts(input, report, root), SyntaxError);
});
