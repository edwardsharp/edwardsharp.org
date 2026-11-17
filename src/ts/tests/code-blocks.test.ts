import assert from "node:assert/strict";
import test from "node:test";
import { parseHTML } from "linkedom";
import { enhanceCodeBlocks, handleCodeBlockClick } from "../code-blocks.ts";

test("only code blocks longer than ten lines collapse, ignoring the final line ending", () => {
  for (const lines of [0, 9, 10, 11]) {
    for (const ending of ["", "\n", "\r\n"]) {
      const { document } = parseHTML(
        "<html><body><pre><code></code></pre><p><code>inline</code></p></body></html>",
      );
      const pre = document.querySelector("pre")!;
      const code = pre.querySelector("code")!;
      const text =
        Array.from({ length: lines }, (_, index) => `line ${index + 1}`).join(
          ending === "\r\n" ? "\r\n" : "\n",
        ) + ending;
      code.textContent = text;
      enhanceCodeBlocks(document);
      enhanceCodeBlocks(document);
      const toggle = document.querySelector("button");
      assert.equal(Boolean(toggle), lines > 10);
      assert.equal(
        document.querySelectorAll("button").length,
        lines > 10 ? 1 : 0,
      );
      assert.equal(pre.textContent, text);
      assert.equal(
        document.querySelector("p")!.innerHTML,
        "<code>inline</code>",
      );
      if (toggle) {
        assert.equal(toggle.textContent, "show more");
        assert.equal(toggle.getAttribute("aria-expanded"), "false");
        assert.equal(toggle.getAttribute("aria-controls"), pre.id);
        assert.equal(pre.dataset.codeCollapsed, "true");
      }
    }
  }
});

test("cloned reader snippets expand and collapse without losing code, highlighting, or existing IDs", (t) => {
  const { document, window } = parseHTML(
    '<html><body><pre id="authored-code"><code><span class="k">first</span>\n' +
      Array.from({ length: 10 }, (_, index) => `line ${index + 2}`).join("\n") +
      "\n</code></pre></body></html>",
  );
  const previous = Object.getOwnPropertyDescriptor(globalThis, "Element");
  Object.defineProperty(globalThis, "Element", {
    value: window.Element,
    configurable: true,
  });
  t.after(() => {
    if (previous) Object.defineProperty(globalThis, "Element", previous);
    else Reflect.deleteProperty(globalThis, "Element");
  });
  const original = document.querySelector("pre")!.innerHTML;
  enhanceCodeBlocks(document);
  document.body.replaceChildren(
    document.querySelector(".code-snippet")!.cloneNode(true),
  );
  document.addEventListener("click", handleCodeBlockClick);
  const toggle = document.querySelector("button")!;
  const pre = document.querySelector("pre")!;
  assert.equal(toggle.getAttribute("aria-controls"), "authored-code");
  for (const expanded of [true, false]) {
    toggle.dispatchEvent(new window.Event("click", { bubbles: true }));
    assert.equal(toggle.getAttribute("aria-expanded"), String(expanded));
    assert.equal(toggle.textContent, expanded ? "show less" : "show more");
    assert.equal(pre.dataset.codeCollapsed, String(!expanded));
    assert.equal(pre.innerHTML, original);
  }
});
