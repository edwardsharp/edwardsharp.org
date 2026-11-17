import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseHTML } from "linkedom";

test("doodle kind controls full-height image markers in post bodies and static tiles without a tag", () => {
  const root = fileURLToPath(new URL("../../../", import.meta.url));
  const result = spawnSync(
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
      site = Jekyll::Site.new(Jekyll.configuration("source" => ARGV.fetch(0), "quiet" => true))
      converter = site.find_converter_instance(Jekyll::Converters::Markdown)
      card = Liquid::Template.parse(File.read(File.join(ARGV.fetch(0), "src/_includes/feed-card.html"), encoding: "UTF-8"))
      puts JSON.generate([
        { "kind" => "doodle", "tags" => [] },
        { "kind" => "doodle", "tags" => ["other"] },
        { "kind" => "photo", "tags" => ["doodle"] },
        { "kind" => "entry", "tags" => ["doodle"] },
        { "kind" => "screenshot", "tags" => [] }
      ].map do |data|
        post = Struct.new(:data, :content, :site).new(data, "![drawing](/content/media/2026/drawing.png)", site)
        MarkdownImages.prepare(post)
        post.content = converter.convert(post.content)
        MarkdownImages.rewrite(post)
        preview = data.merge("title" => "drawing", "url" => "/post/drawing/", "date" => "2026-11-15",
          "preview_image" => "/content/media/2026/drawing.png", "content" => post.content)
        { html: post.content, card: card.render!({ "include" => { "post" => preview } }, registers: { site: site }) }
      end)
    `,
      root,
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const results: { html: string; card: string }[] = JSON.parse(result.stdout);
  for (const [index, result] of results.entries()) {
    for (const html of [result.html, result.card]) {
      const { document } = parseHTML(html);
      assert.equal(
        document.querySelector("img")?.classList.contains("doodle-image"),
        index < 2,
      );
    }
  }
});

test("dark inversion follows explicit image classes and only the selected preview, including deployment subpaths", () => {
  const image = "![drawing](/content/media/2026/drawing.png)";
  const marked = `${image}{: .invert-in-dark }`;
  const other = "![other](/content/media/2026/other.png)";
  const cases = [
    { kind: "doodle", source: image, inverted: false, marked: 0 },
    { kind: "doodle", source: marked, inverted: true, marked: 1 },
    { kind: "photo", source: marked, inverted: true, marked: 1 },
    {
      kind: "doodle",
      source: `${marked}\n\n${other}`,
      preview_image: "/content/media/2026/other.png",
      inverted: false,
      marked: 1,
    },
    {
      kind: "doodle",
      source: `${image}\n\n${other}{: .invert-in-dark }`,
      preview_image: "/content/media/2026/other.png",
      inverted: true,
      marked: 1,
    },
    {
      kind: "doodle",
      source: `${image}\n\n\`\`\`markdown\n${marked}\n\`\`\``,
      inverted: false,
      marked: 0,
    },
  ];
  const root = fileURLToPath(new URL("../../../", import.meta.url));
  const result = spawnSync(
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
      cases = JSON.parse(STDIN.read)
      card = Liquid::Template.parse(File.read(File.join(ARGV.fetch(0), "src/_includes/feed-card.html"), encoding: "UTF-8"))
      feed = Liquid::Template.parse(File.read(File.join(ARGV.fetch(0), "src/assets/feed.json.liquid"), encoding: "UTF-8").sub(/\\A---\\n.*?\\n---\\n/m, ""))
      puts JSON.generate(["", "/edwardsharp.org"].flat_map do |baseurl|
        site = Jekyll::Site.new(Jekyll.configuration("source" => ARGV.fetch(0), "baseurl" => baseurl, "quiet" => true))
        converter = site.find_converter_instance(Jekyll::Converters::Markdown)
        cases.map do |input|
          data = { "kind" => input.fetch("kind"), "tags" => [],
            "preview_image" => input.fetch("preview_image", "/content/media/2026/drawing.png") }
          post = Struct.new(:data, :content, :site).new(data, input.fetch("source"), site)
          MarkdownImages.prepare(post)
          post.content = converter.convert(post.content)
          MarkdownImages.rewrite(post)
          preview = data.merge("title" => "drawing", "url" => "/post/drawing/", "date" => "2026-11-15", "content" => post.content)
          { html: post.content,
            card: card.render!({ "include" => { "post" => preview } }, registers: { site: site }),
            feed: JSON.parse(feed.render!({ "site" => { "posts" => [preview] } }, registers: { site: site })).fetch(0) }
        end
      end)
      `,
      root,
    ],
    { cwd: root, encoding: "utf8", input: JSON.stringify(cases) },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const results: {
    html: string;
    card: string;
    feed: { invert_in_dark: boolean };
  }[] = JSON.parse(result.stdout);
  assert.equal(results.length, cases.length * 2);
  for (const [index, result] of results.entries()) {
    const expected = cases[index % cases.length]!;
    const body = parseHTML(result.html).document;
    const card = parseHTML(result.card).document;
    assert.equal(
      body.querySelectorAll("img.invert-in-dark").length,
      expected.marked,
    );
    assert.equal(
      card.querySelector("img")?.classList.contains("invert-in-dark"),
      expected.inverted,
    );
    assert.equal(result.feed.invert_in_dark, expected.inverted);
  }
});

test("Markdown media images gain deployment URLs without rewriting code, remote images, or existing HTML", () => {
  const source = [
    '![a "quote" & caf\u00e9](/content/media/2026/one.png)',
    "",
    "![second][picture]",
    "",
    "[picture]: /content/media/2026/two.jpg",
    "",
    "![remote](https://example.test/image.png)",
    "",
    '<img src="/content/media/legacy.png" loading="eager" decoding="sync">',
    "",
    "```html",
    '<img src="/content/media/code.png">',
    "```",
    "",
    "```markdown",
    "![example](/content/media/fenced.png)",
    "```",
    "",
    '![explicit](/content/media/2026/three.png){: loading="eager" decoding="sync"}',
  ].join("\n");
  const legacy = '<p><img src="/content/media/legacy.png" loading="eager"></p>';
  const root = fileURLToPath(new URL("../../../", import.meta.url));
  const result = spawnSync(
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
        input = JSON.parse(STDIN.read)
        results = ["", "/edwardsharp.org"].map do |baseurl|
          site = Jekyll::Site.new(Jekyll.configuration(
            "source" => ARGV.fetch(0), "baseurl" => baseurl, "quiet" => true
          ))
          converter = site.find_converter_instance(Jekyll::Converters::Markdown)
          post = Struct.new(:data, :content, :site).new({}, input.fetch("source"), site)
          MarkdownImages.prepare(post)
          post.content = converter.convert(post.content)
          MarkdownImages.rewrite(post)
          first = post.content
          MarkdownImages.rewrite(post)
          raise "rewritten twice" unless post.content == first
          old = Struct.new(:data, :content, :site).new({}, input.fetch("legacy"), site)
          MarkdownImages.prepare(old)
          old.content = converter.convert(old.content)
          original = old.content
          MarkdownImages.rewrite(old)
          raise "existing HTML changed" unless old.content == original
          { baseurl: baseurl, html: post.content }
        end
        puts JSON.generate(results)
      `,
      root,
    ],
    { cwd: root, encoding: "utf8", input: JSON.stringify({ source, legacy }) },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const results: { baseurl: string; html: string }[] = JSON.parse(
    result.stdout,
  );
  for (const { baseurl, html } of results) {
    const { document } = parseHTML(`<html><body>${html}</body></html>`);
    const images = document.querySelectorAll("img");
    assert.equal(images.length, 5);
    assert.equal(
      images[0]?.getAttribute("src"),
      `${baseurl}/content/media/2026/one.png`,
    );
    assert.equal(images[0]?.getAttribute("alt"), 'a "quote" & caf\u00e9');
    assert.equal(
      images[1]?.getAttribute("src"),
      `${baseurl}/content/media/2026/two.jpg`,
    );
    for (const image of [images[0]!, images[1]!]) {
      assert.equal(image.getAttribute("loading"), "lazy");
      assert.equal(image.getAttribute("decoding"), "async");
    }
    assert.equal(
      images[2]?.getAttribute("src"),
      "https://example.test/image.png",
    );
    assert.equal(images[2]?.getAttribute("loading"), null);
    assert.equal(images[3]?.getAttribute("src"), "/content/media/legacy.png");
    assert.equal(images[3]?.getAttribute("loading"), "eager");
    assert.equal(images[3]?.getAttribute("decoding"), "sync");
    assert.equal(
      images[4]?.getAttribute("src"),
      `${baseurl}/content/media/2026/three.png`,
    );
    assert.equal(images[4]?.getAttribute("loading"), "eager");
    assert.equal(images[4]?.getAttribute("decoding"), "sync");
    const code = [...document.querySelectorAll("pre code")].map(
      (el) => el.textContent,
    );
    assert.deepEqual(code, [
      '<img src="/content/media/code.png">\n',
      "![example](/content/media/fenced.png)\n",
    ]);
  }
});
