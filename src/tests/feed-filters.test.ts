import assert from "node:assert/strict";
import test from "node:test";
import { filterChoices, filterPosts } from "../assets/feed-filters.ts";

const posts = [
  { id: 1, kind: "photo", tags: ["noise", "noise", "solo"] },
  { id: 2, kind: "audio", tags: ["noise", "type:photo"] },
  { id: 3, kind: "photo", tags: ["type:photo"] },
  { id: 4, kind: "entry", tags: [] },
];

test("filter choices count posts, omit singleton tags, and retain every post type", () => {
  assert.deepEqual(filterChoices(posts), {
    types: [
      { value: "type:audio", label: "audio (1)" },
      { value: "type:entry", label: "entry (1)" },
      { value: "type:photo", label: "photo (2)" },
    ],
    tags: [
      { value: "tag:noise", label: "noise (2)" },
      { value: "tag:type:photo", label: "type:photo (2)" },
    ],
  });
  assert.deepEqual(filterChoices(posts.slice(0, 1)).tags, []);
});

test("filtered views preserve order and support direct singleton tags and colon-containing names", () => {
  assert.deepEqual(filterPosts(posts, ""), posts);
  assert.deepEqual(
    filterPosts(posts, "type:photo").map((p) => p.id),
    [1, 3],
  );
  assert.deepEqual(
    filterPosts(posts, "tag:solo").map((p) => p.id),
    [1],
  );
  assert.deepEqual(
    filterPosts(posts, "tag:type:photo").map((p) => p.id),
    [2, 3],
  );
  assert.deepEqual(filterPosts(posts, "tag:missing"), []);
  assert.deepEqual(filterPosts(posts, "type:missing"), []);
  assert.throws(() => filterPosts(posts, "invalid"), /invalid journal filter/);
});
