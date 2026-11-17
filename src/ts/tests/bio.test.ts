import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseHTML } from "linkedom";

test("bio image and home links render on archive, home, and standalone pages without relying on collection render order", () => {
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
      site = Jekyll::Site.new(Jekyll.configuration("source" => ARGV.fetch(0), "baseurl" => "/journal", "quiet" => true))
      site.read
      layout = File.read(File.join(site.source, "src/_layouts/default.html"))
      page_layout = File.read(File.join(site.source, "src/_layouts/page.html")).sub(/\\A---\\n.*?\\n---\\n/m, "")
      bio = site.collections.fetch("pages").docs.find { |doc| doc.url == "/bio/" }
      bio.data["image"] = "/portrait.jpg"
      pages = [
        { "url" => "/archive/", "title" => "archive", "archive" => true },
        { "url" => "/", "feed" => true },
        { "url" => "/bio/", "title" => "bio", "bio" => true }
      ]
      puts JSON.generate(pages.map do |page|
        payload = { "site" => site.site_payload["site"], "page" => page["bio"] ? bio.data.merge(page) : page, "content" => "" }
        if page["bio"]
          payload["content"] = site.find_converter_instance(Jekyll::Converters::Markdown).convert(bio.content)
          payload["content"] = Liquid::Template.parse(page_layout).render!(payload, registers: { site: site })
        end
        Liquid::Template.parse(layout).render!(payload, registers: { site: site })
      end)
      `,
      root,
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const pages: string[] = JSON.parse(result.stdout);
  for (const html of pages) {
    const { document } = parseHTML(html);
    const bio =
      document.querySelector("#bio-panel") ?? document.querySelector("main");
    assert.ok(bio);
    assert.equal(
      bio.querySelector("img")?.getAttribute("src"),
      "/journal/portrait.jpg",
    );
    assert.equal(
      bio.querySelector("[data-bio-home]")?.getAttribute("href"),
      "/journal/",
    );
    assert.equal(
      bio.querySelector("[data-bio-home]")?.hasAttribute("hidden"),
      document.body.classList.contains("home-page"),
    );
    assert.ok(!bio.innerHTML.includes("{{"));
  }
});
