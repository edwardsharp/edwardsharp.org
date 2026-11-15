import assert from "node:assert/strict";
import test from "node:test";
import { filterChoices, filterPosts } from "../feed-filters.ts";

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

const aliases = [
  {
    id: 1,
    kind: "photo",
    tags: ["PDX", "p-d_x", "future death toll", "Future_Death-Toll", " _- "],
  },
  { id: 2, kind: "audio", tags: [" p d x ", "FUTUREDEATHTOLL"] },
  {
    id: 3,
    kind: "photo",
    tags: ["pdx", "futuredeath.agency", "future_death_agency"],
  },
  { id: 4, kind: "photo", tags: ["futuredeath.agency"] },
];

test("tag groups merge case and separator variants without double-counting posts", () => {
  const original = structuredClone(aliases);
  assert.deepEqual(filterChoices(aliases).tags, [
    { value: "tag:futuredeath.agency", label: "futuredeath.agency (2)" },
    { value: "tag:futuredeathtoll", label: "future death toll (2)" },
    { value: "tag:pdx", label: "pdx (3)" },
  ]);
  assert.deepEqual(aliases, original);
});

test("existing tag links match grouped aliases while other punctuation stays meaningful", () => {
  for (const filter of ["tag:PDX", "tag:p-d_x", "tag: p d x "])
    assert.deepEqual(
      filterPosts(aliases, filter).map((post) => post.id),
      [1, 2, 3],
    );
  assert.deepEqual(
    filterPosts(aliases, "tag:Future_Death-Toll").map((post) => post.id),
    [1, 2],
  );
  assert.deepEqual(
    filterPosts(aliases, "tag:futuredeath.agency").map((post) => post.id),
    [3, 4],
  );
  assert.deepEqual(
    filterPosts(aliases, "tag:futuredeathagency").map((post) => post.id),
    [3],
  );
  assert.deepEqual(filterPosts(aliases, "tag: _- "), []);
});
