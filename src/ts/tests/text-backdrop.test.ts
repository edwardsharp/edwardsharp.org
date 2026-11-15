import assert from "node:assert/strict";
import test from "node:test";
import { parseHTML } from "linkedom";
import { createTextBackdrop } from "../text-backdrop.ts";

test("blur rectangles hug words, skip whitespace and hidden lines, and clip overflowing text", async (t) => {
  const { document, HTMLElement } = parseHTML(
    '<html><body><div id="copy"><time>2022-08-16</time><h2>bright   sky hidden clipped</h2><span>audio</span></div></body></html>',
  );
  for (const [name, value] of Object.entries({
    document,
    HTMLElement,
    NodeFilter: { SHOW_TEXT: 4 },
    CSS: { supports: () => true },
  })) {
    const previous = Object.getOwnPropertyDescriptor(globalThis, name);
    Object.defineProperty(globalThis, name, { configurable: true, value });
    t.after(() => {
      if (previous) Object.defineProperty(globalThis, name, previous);
      else Reflect.deleteProperty(globalThis, name);
    });
  }
  Object.defineProperty(document, "fonts", {
    value: { ready: Promise.resolve() },
  });
  const rect = (left: number, top: number, right: number, bottom: number) => ({
    left,
    top,
    right,
    bottom,
    width: right - left,
    height: bottom - top,
  });
  const copy = document.querySelector<HTMLElement>("#copy")!;
  for (const [element, bounds] of [
    [copy, rect(100, 200, 300, 300)],
    [copy.querySelector("time")!, rect(100, 200, 300, 214)],
    [copy.querySelector("h2")!, rect(100, 220, 300, 260)],
    [copy.querySelector("span")!, rect(100, 280, 300, 294)],
  ] as const)
    Object.defineProperty(element, "getBoundingClientRect", {
      value: () => bounds,
    });
  const words: Record<string, ReturnType<typeof rect>> = {
    "2022-08-16": rect(100, 200, 180, 214),
    bright: rect(100, 220, 140, 240),
    sky: rect(180, 220, 210, 240),
    hidden: rect(100, 270, 160, 290),
    clipped: rect(290, 240, 340, 270),
    audio: rect(160, 280, 200, 294),
  };
  const measured: string[] = [];
  Object.defineProperty(document, "createRange", {
    value: () => {
      let text = "";
      let start = 0;
      let end = 0;
      return {
        setStart: (node: Node, offset: number) => {
          text = node.textContent ?? "";
          start = offset;
        },
        setEnd: (_node: Node, offset: number) => {
          end = offset;
        },
        getClientRects: () => {
          const word = text.slice(start, end);
          measured.push(word);
          return [words[word]];
        },
      };
    },
  });
  const paint = await createTextBackdrop();
  assert.ok(paint);
  paint(copy);
  assert.deepEqual(measured, Object.keys(words));
  const value = copy.style.getPropertyValue("--text-mask");
  const svg = decodeURIComponent(value.slice(value.indexOf(",") + 1, -2));
  const mask = parseHTML(svg).document;
  assert.deepEqual(
    [...mask.querySelectorAll("rect")].map((element) =>
      ["x", "y", "width", "height"].map((name) =>
        Number(element.getAttribute(name)),
      ),
    ),
    [
      [0, 0, 82, 16],
      [0, 20, 42, 22],
      [80, 20, 32, 22],
      [190, 40, 12, 22],
      [60, 80, 42, 16],
    ],
  );
});
