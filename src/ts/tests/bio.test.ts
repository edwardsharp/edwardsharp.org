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
    const judyCursor = content.querySelector(".judy-cursor-trigger");
    assert.equal(judyCursor?.textContent, "sysadminwitch");
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

test("the Judy cursor toggles, restores its saved state, and leaves photo and modified clicks alone", async (t) => {
  const { document, window } = parseHTML(
    '<html><body><button data-bio-photo-toggle aria-pressed="false"><img class="bio-photo"></button><a class="judy-cursor-trigger" href="https://github.com/edwardsharp/">sysadminwitch</a></body></html>',
  );
  const previous = Object.getOwnPropertyDescriptor(globalThis, "document");
  const previousStorage = Object.getOwnPropertyDescriptor(
    globalThis,
    "localStorage",
  );
  const saved = new Map<string, string>();
  Object.defineProperty(globalThis, "localStorage", {
    value: {
      getItem: (key: string) => saved.get(key) ?? null,
      setItem: (key: string, value: string) => saved.set(key, value),
    },
    configurable: true,
  });
  Object.defineProperty(globalThis, "document", {
    value: document,
    configurable: true,
  });
  t.after(() => {
    if (previous) Object.defineProperty(globalThis, "document", previous);
    else Reflect.deleteProperty(globalThis, "document");
    if (previousStorage)
      Object.defineProperty(globalThis, "localStorage", previousStorage);
    else Reflect.deleteProperty(globalThis, "localStorage");
  });
  const { enhanceJudyCursor } = await import("../header.ts");
  const toggle = document.querySelector("button")!;
  toggle.click();
  assert.equal(toggle.getAttribute("aria-pressed"), "true");
  toggle.click();
  assert.equal(toggle.getAttribute("aria-pressed"), "false");
  const trigger = document.querySelector(".judy-cursor-trigger")!;
  const click = (metaKey = false) => {
    const event = new window.Event("click", {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperties(event, {
      button: { value: 0 },
      metaKey: { value: metaKey },
    });
    trigger.dispatchEvent(event);
    return event;
  };
  assert.equal(click(true).defaultPrevented, false);
  assert.equal(
    document.documentElement.classList.contains("has-judy-cursor"),
    false,
  );
  for (const enabled of [true, false, true]) {
    assert.equal(click().defaultPrevented, true);
    assert.equal(
      document.documentElement.classList.contains("has-judy-cursor"),
      enabled,
    );
    assert.equal(saved.get("judy-cursor"), String(enabled));
    const restored = parseHTML("<html><body></body></html>").document;
    enhanceJudyCursor(restored);
    assert.equal(
      restored.documentElement.classList.contains("has-judy-cursor"),
      enabled,
    );
  }
  toggle.click();
  assert.equal(
    document.documentElement.classList.contains("has-judy-cursor"),
    true,
  );
  const blocked = parseHTML(
    '<html><body><a class="judy-cursor-trigger" href="">sysadminwitch</a></body></html>',
  );
  Object.defineProperty(globalThis, "localStorage", {
    get() {
      throw new DOMException("storage blocked", "SecurityError");
    },
    configurable: true,
  });
  const warning = t.mock.method(console, "warn", () => {});
  enhanceJudyCursor(blocked.document);
  const blockedClick = new blocked.window.Event("click", {
    bubbles: true,
    cancelable: true,
  });
  Object.defineProperty(blockedClick, "button", { value: 0 });
  blocked.document.querySelector("a")!.dispatchEvent(blockedClick);
  assert.equal(
    blocked.document.documentElement.classList.contains("has-judy-cursor"),
    true,
  );
  assert.equal(warning.mock.callCount(), 2);
});
