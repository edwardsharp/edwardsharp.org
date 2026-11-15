import assert from "node:assert/strict";
import test from "node:test";
import { buildRows, geometry, rowForIndex } from "../assets/honeycomb.ts";

test("regular hexagons interlock with equal gaps along each neighboring edge", () => {
  const { columns, tileWidth, tileHeight, gap, pitch } = geometry(1200);
  assert.ok(columns > 1);
  assert.ok(Math.abs((tileHeight * Math.sqrt(3)) / 2 - tileWidth) < 0.0001);
  const diagonalCenterDistance = Math.hypot((tileWidth + gap) / 2, pitch);
  assert.ok(Math.abs(diagonalCenterDistance - tileWidth - gap) < 0.0001);
  assert.ok(pitch < tileHeight);
});

test("staggered rows preserve chronological order without missing or duplicated tiles", () => {
  for (const width of [320, 519, 520, 800, 1200, 1600]) {
    const { columns } = geometry(width);
    const rows = buildRows(105, columns);
    const indexes = rows.flatMap(({ start, end }, rowIndex) => {
      const values = Array.from({ length: end - start }, (_, i) => start + i);
      for (const index of values)
        assert.equal(rowForIndex(index, columns), rowIndex);
      return values;
    });
    assert.deepEqual(
      indexes,
      Array.from({ length: 105 }, (_, index) => index),
    );
  }
});

test("narrow screens use non-overlapping readable tiles and empty feeds have no rows", () => {
  const { columns, tileWidth, tileHeight, pitch } = geometry(343);
  assert.equal(columns, 1);
  assert.equal(tileWidth, 343);
  assert.ok(pitch > tileHeight);
  assert.deepEqual(buildRows(0, columns), []);
  assert.throws(() => geometry(0), RangeError);
});
