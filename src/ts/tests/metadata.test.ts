import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseHTML } from "linkedom";

test("all layouts render escaped link previews with absolute deployment URLs and appropriate image cards", () => {
  const root = fileURLToPath(new URL("../../../", import.meta.url));
  const result = spawnSync(
    "bundle",
    [
      "exec",
      "ruby",
      "-EUTF-8:UTF-8",
      "-rjekyll",
      "-rjson",
      "-rtmpdir",
      "-rfileutils",
      "-e",
      `
        results = ["", "/blog"].flat_map do |baseurl|
          Dir.mktmpdir("journal-metadata-") do |source|
            FileUtils.mkdir_p(File.join(source, "src/_includes"))
            FileUtils.cp_r(File.join(ARGV.fetch(0), "src/_layouts"), File.join(source, "src"))
            FileUtils.cp(File.join(ARGV.fetch(0), "src/_includes/metadata.html"), File.join(source, "src/_includes"))
            File.write(File.join(source, "src/_includes/header.html"), "")
            pages = [
              ["home", { "title" => "home", "layout" => "default", "permalink" => "/" }, "home body"],
              ["archive", { "title" => "archive", "layout" => "page", "permalink" => "/archive/" }, "archive body"]
            ]
            posts = [
              ["photo", {
                "title" => 'a "quote" & <angle>',
                "description" => 'a "quote" & <em>caption</em>.',
                "preview_image" => "/content/media/2020/photo.webp",
                "preview_alt" => 'a "quote" & <image>',
                "redirect_from" => "/legacy/photo/",
                "last_modified" => "2020-06-02T12:00:00Z"
              }, "photo body"],
              ["text", { "title" => "words" }, "a **bold** paragraph & an [example](https://example.test).\\n\\nnext paragraph."],
              ["remote", { "title" => "remote", "preview_image" => "https://images.example.test/photo.jpg" }, "remote image"],
              ["empty", { "title" => "no title", "kind" => "photo" }, '<img src="/content/media/2020/photo.webp">']
            ]
            pages.each do |name, data, body|
              directory = File.join(source, "content/_pages")
              FileUtils.mkdir_p(directory)
              header = data.map { |key, value| "#{key}: #{JSON.generate(value)}" }.join("\\n")
              File.write(File.join(directory, "#{name}.html"), "---\\n#{header}\\n---\\n#{body}")
            end
            posts.each do |name, data, body|
              directory = File.join(source, "content/_posts/2020")
              FileUtils.mkdir_p(directory)
              data = data.merge("layout" => "post", "date" => "2020-06-01T12:00:00Z", "permalink" => "/posts/#{name}/")
              header = data.map { |key, value| "#{key}: #{JSON.generate(value)}" }.join("\\n")
              File.write(File.join(directory, "2020-06-01-#{name}.md"), "---\\n#{header}\\n---\\n#{body}")
            end
            site = Jekyll::Site.new(Jekyll.configuration(
              "source" => source, "destination" => File.join(source, "_site"),
              "collections_dir" => "content", "collections" => { "pages" => { "output" => true } },
              "layouts_dir" => "src/_layouts", "includes_dir" => "src/_includes",
              "url" => "https://example.test", "baseurl" => baseurl,
              "title" => 'journal & "stuff"', "description" => "site fallback",
              "plugins" => ["jekyll-redirect-from"],
              "timezone" => "UTC", "quiet" => true, "strict_front_matter" => true,
              "liquid" => { "error_mode" => "strict" }, "exclude" => ["src"]
            ))
            site.process
            (site.collections.fetch("pages").docs + site.posts.docs + site.pages.select { |page| page.data.key?("redirect") }).map do |document|
              { baseurl: baseurl, url: document.url, html: document.output }
            end
          end
        end
        puts JSON.generate(results)
      `,
      root,
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const results: { baseurl: string; url: string; html: string }[] = JSON.parse(
    result.stdout,
  );
  assert.equal(results.length, 14);
  for (const { baseurl, url, html } of results) {
    const { document } = parseHTML(html);
    const meta = (key: string) =>
      document
        .querySelector(`meta[property="${key}"], meta[name="${key}"]`)
        ?.getAttribute("content");
    const legacy = url === "/legacy/photo/";
    const canonical = `https://example.test${baseurl}${legacy ? "/posts/photo/" : url}`;
    assert.equal(
      document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
      canonical,
    );
    assert.equal(meta("og:url"), canonical);
    assert.equal(meta("og:site_name"), 'journal & "stuff"');
    assert.equal(meta("og:locale"), "en_US");
    assert.equal(meta("twitter:title"), meta("og:title"));
    assert.equal(meta("twitter:description"), meta("og:description"));
    assert.equal(meta("description"), meta("og:description"));
    assert.equal(
      document.querySelectorAll('meta[property="og:title"]').length,
      1,
    );
    assert.equal(
      meta("og:type"),
      url.startsWith("/posts/") || legacy ? "article" : "website",
    );
    if (url === "/posts/photo/" || legacy) {
      assert.equal(meta("og:title"), 'a "quote" & <angle>');
      assert.equal(meta("og:description"), 'a "quote" & caption.');
      assert.equal(
        meta("og:image"),
        `https://example.test${baseurl}/content/media/2020/photo.webp`,
      );
      assert.equal(meta("og:image:alt"), 'a "quote" & <image>');
      assert.equal(meta("twitter:image"), meta("og:image"));
      assert.equal(meta("twitter:image:alt"), meta("og:image:alt"));
      assert.equal(meta("twitter:card"), "summary_large_image");
      assert.equal(
        Date.parse(meta("article:published_time")!),
        Date.parse("2020-06-01T12:00:00Z"),
      );
      assert.equal(
        Date.parse(meta("article:modified_time")!),
        Date.parse("2020-06-02T12:00:00Z"),
      );
    } else if (url === "/posts/remote/") {
      assert.equal(meta("og:image"), "https://images.example.test/photo.jpg");
      assert.equal(meta("og:image:alt"), "remote");
    } else {
      assert.equal(meta("twitter:card"), "summary");
      assert.equal(meta("og:image"), undefined);
      assert.equal(
        meta("og:description"),
        url === "/posts/text/"
          ? "a bold paragraph & an example."
          : "site fallback",
      );
      if (url === "/") assert.equal(meta("og:title"), 'journal & "stuff"');
      if (url === "/posts/empty/")
        assert.equal(meta("og:title"), "photo / 2020-06-01");
    }
    if (legacy) {
      assert.equal(meta("robots"), "noindex");
      assert.equal(
        document
          .querySelector('meta[http-equiv="refresh"]')
          ?.getAttribute("content"),
        `0; url=${canonical}`,
      );
      assert.match(
        document.querySelector("script")?.textContent ?? "",
        /window\.location\.href/,
      );
    }
    assert.equal(document.querySelectorAll("script").length, 1);
  }
});
