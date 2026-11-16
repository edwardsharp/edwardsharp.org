import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { parseHTML } from "linkedom";
import { enhancePostDialog } from "../post-dialog.ts";

test("post locations render after dates, escape markup, and omit empty names", () => {
  const root = fileURLToPath(new URL("../../../", import.meta.url));
  const result = spawnSync(
    "bundle",
    [
      "exec",
      "ruby",
      "-EUTF-8:UTF-8",
      "-rjekyll",
      "-rjson",
      "-rnokogiri",
      "-e",
      `
      site = Jekyll::Site.new(Jekyll.configuration("source" => ARGV.fetch(0), "baseurl" => "/reader-test", "quiet" => true))
      source = File.read(File.join(ARGV.fetch(0), "src/_layouts/post.html"), encoding: "UTF-8")
      template = Liquid::Template.parse(source)
      puts JSON.generate(["A <venue> & City", nil, "", "  "].map do |location|
        html = template.render!(
          { "page" => { "title" => "fixture", "date" => "2026-11-15", "tags" => [], "location_name" => location } },
          registers: { site: site }
        )
        date = Nokogiri::HTML5.fragment(html).at_css(".eyebrow")
        { text: date.text.gsub(/\\s+/, " ").strip, html: date.to_html, elements: date.element_children.map(&:name),
          href: date.at_css(".post-location a")&.[]("href") }
      end)
    `,
      root,
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const rendered = JSON.parse(result.stdout);
  assert.equal(rendered[0].text, "November 15, 2026 \u00b7 A <venue> & City");
  assert.deepEqual(rendered[0].elements, ["time", "span"]);
  assert.match(rendered[0].html, /&lt;venue&gt; &amp; City/);
  assert.equal(
    rendered[0].href,
    "/reader-test/?location=A+%3Cvenue%3E+%26+City",
  );
  for (const entry of rendered.slice(1)) {
    assert.equal(entry.text, "November 15, 2026");
    assert.deepEqual(entry.elements, ["time"]);
    assert.equal(entry.href, null);
  }
});

test("failed dialog images stay local to the asset; failed post requests still offer retry", async (t) => {
  const { document, window } = parseHTML(`<html><body>
    <section id="shell">
      <article class="hex-card"><a class="hex-card__link" href="https://example.test/post/1/"><h2 class="hex-card__title">a post</h2></a></article>
      <dialog class="post-dialog">
        <a class="post-dialog__permalink"></a><button class="post-dialog__close"></button>
        <p class="post-dialog__status" hidden></p><button class="post-dialog__retry" hidden></button>
        <div class="post-dialog__content"></div>
      </dialog>
    </section>
  </body></html>`);
  const globals = {
    document,
    Element: window.Element,
    HTMLImageElement: window.HTMLImageElement,
    HTMLMediaElement: window.HTMLMediaElement,
    DOMParser: window.DOMParser,
    location: new URL("https://example.test/"),
  };
  for (const [name, value] of Object.entries(globals)) {
    const previous = Object.getOwnPropertyDescriptor(globalThis, name);
    Object.defineProperty(globalThis, name, { value, configurable: true });
    t.after(() => {
      if (previous) Object.defineProperty(globalThis, name, previous);
      else Reflect.deleteProperty(globalThis, name);
    });
  }
  t.mock.method(console, "warn", () => {});
  t.mock.method(console, "error", () => {});
  let failRequest = false;
  t.mock.method(globalThis, "fetch", async () => {
    const response = new Response(
      failRequest
        ? ""
        : `<html><body><article class="post">
      <header class="page-heading"><p class="eyebrow">a date <span class="post-location">&middot; <a href="https://example.test/?location=A+venue+%26+City">A venue &amp; City</a></span></p></header>
      <div class="prose"><p>the caption survives</p><img src="https://example.test/missing.jpg"><img class="doodle-image" src="https://example.test/working.jpg"></div>
    </article></body></html>`,
      { status: failRequest ? 503 : 200 },
    );
    Object.defineProperty(response, "url", {
      value: "https://example.test/post/1/",
    });
    return response;
  });
  const shell = document.querySelector<HTMLElement>("#shell")!;
  const dialog = shell.querySelector<HTMLDialogElement>("dialog")!;
  dialog.showModal = () => {
    dialog.open = true;
  };
  enhancePostDialog(shell);
  const click = () => {
    const event = new window.Event("click", { bubbles: true });
    Object.defineProperty(event, "button", { value: 0 });
    shell.querySelector("a")!.dispatchEvent(event);
  };
  click();
  await new Promise((resolve) => setImmediate(resolve));
  const status = shell.querySelector<HTMLElement>(".post-dialog__status")!;
  assert.ok(status.hidden);
  assert.ok(shell.querySelector(".post-dialog__content img.doodle-image"));
  assert.equal(
    shell.querySelector(".post-dialog__content .post-location")?.textContent,
    "\u00b7 A venue & City",
  );
  assert.equal(
    shell
      .querySelector(".post-dialog__content .post-location a")
      ?.getAttribute("href"),
    "https://example.test/?location=A+venue+%26+City",
  );
  // Linkedom requires bubbling to reach ancestor capture listeners.
  shell
    .querySelector("img")!
    .dispatchEvent(new window.Event("error", { bubbles: true }));
  assert.ok(status.hidden);
  assert.equal(
    shell.querySelector(".asset-notice")?.textContent,
    "this image is unavailable.",
  );
  assert.match(
    shell.querySelector(".post-dialog__content")!.textContent,
    /the caption survives/,
  );
  assert.equal(shell.querySelectorAll("img").length, 1);
  failRequest = true;
  click();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(status.hidden, false);
  assert.match(status.textContent, /HTTP 503/);
  assert.equal(
    shell.querySelector<HTMLButtonElement>(".post-dialog__retry")!.hidden,
    false,
  );
});
