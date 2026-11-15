import assert from "node:assert/strict";
import test from "node:test";
import { parseHTML } from "linkedom";
import { enhancePostDialog } from "../post-dialog.ts";

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
      <header class="page-heading"><p class="eyebrow">a date</p></header>
      <div class="prose"><p>the caption survives</p><img src="https://example.test/missing.jpg"><img src="https://example.test/working.jpg"></div>
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
