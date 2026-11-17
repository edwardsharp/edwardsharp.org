import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { parseHTML } from "linkedom";

test("bio image and home links render on all page types without relying on collection render order", () => {
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
        { "url" => "/bio/", "title" => "bio", "bio" => true },
        { "url" => "/post/example/", "title" => "example", "layout" => "post" },
        { "url" => "/404.html", "title" => "not found", "layout" => "page" }
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
  for (const [index, html] of pages.entries()) {
    const { document } = parseHTML(html);
    assert.ok(
      [...document.querySelectorAll(".eyebrow")].every(
        (element) => element.textContent.trim() !== "",
      ),
    );
    const bio =
      document.querySelector("#bio-panel") ?? document.querySelector("main");
    assert.ok(bio);
    assert.equal(
      bio.querySelector("img.bio-photo")?.getAttribute("src"),
      "/journal/portrait.jpg",
    );
    const content = bio.querySelector(".bio-content");
    assert.ok(content);
    assert.deepEqual(
      [...content.children].slice(0, 3).map((element) => element.tagName),
      ["P", "H1", "H2"],
    );
    assert.ok(content.querySelector(":scope > .bio-portrait img.bio-photo"));
    assert.ok(
      [...content.children].some((element) =>
        element.textContent.includes("see also:"),
      ),
    );
    assert.ok(!content.querySelector("[data-bio-home]"));
    assert.equal(
      bio.querySelector("[data-bio-home]")?.getAttribute("href"),
      "/journal/",
    );
    assert.equal(
      bio.querySelector("[data-bio-home]")?.hasAttribute("hidden"),
      document.body.classList.contains("home-page") ||
        document.body.classList.contains("bio-page"),
    );
    const wordmark = document.querySelector(".wordmark");
    const standaloneBio = document.body.classList.contains("bio-page");
    assert.equal(
      wordmark?.getAttribute("href"),
      standaloneBio ? "/journal/" : "/journal/bio/",
    );
    assert.equal(wordmark?.hasAttribute("aria-controls"), !standaloneBio);
    assert.ok(!bio.innerHTML.includes("{{"));
    assert.equal(document.body.classList.contains("archive-page"), index === 0);
    assert.equal(document.body.classList.contains("post-page"), index === 3);
    assert.equal(document.body.classList.contains("bio-page"), index === 2);
  }
});

test("the bio photo can be tapped or activated again to restore its cutout", async (t) => {
  const { document } = parseHTML(
    '<html><body><button data-bio-photo-toggle aria-pressed="false"><img class="bio-photo"></button></body></html>',
  );
  const previous = Object.getOwnPropertyDescriptor(globalThis, "document");
  Object.defineProperty(globalThis, "document", {
    value: document,
    configurable: true,
  });
  t.after(() => {
    if (previous) Object.defineProperty(globalThis, "document", previous);
    else Reflect.deleteProperty(globalThis, "document");
  });
  await import("../header.ts");
  const toggle = document.querySelector("button")!;
  toggle.click();
  assert.equal(toggle.getAttribute("aria-pressed"), "true");
  toggle.click();
  assert.equal(toggle.getAttribute("aria-pressed"), "false");
});
