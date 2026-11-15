import assert from "node:assert/strict";
import test from "node:test";
import { needsMenu } from "../header-layout.ts";

test("navigation collapses only after the filter reaches its minimum width", () => {
  const widths = {
    available: 500,
    wordmark: 180,
    navigation: 150,
    filter: 96,
    gap: 16,
  };
  assert.equal(needsMenu(widths), false);
  assert.equal(needsMenu({ ...widths, available: 458 }), false);
  assert.equal(needsMenu({ ...widths, available: 457 }), true);
  assert.equal(needsMenu({ ...widths, available: 375 }), true);
});

test("menu decisions follow content and filter presence rather than a fixed viewport", () => {
  const widths = {
    available: 420,
    wordmark: 180,
    navigation: 150,
    filter: 0,
    gap: 16,
  };
  assert.equal(needsMenu(widths), false);
  assert.equal(needsMenu({ ...widths, filter: 96 }), true);
  assert.equal(needsMenu({ ...widths, navigation: 260 }), true);
});
