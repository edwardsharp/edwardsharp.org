import assert from "node:assert/strict";
import test from "node:test";
import {
  createSearch,
  createSearchIndex,
  parseDocuments,
  searchFragment,
} from "../search.ts";
import { filterPosts } from "../feed-filters.ts";
import type { SearchDocument } from "../search.ts";

const documents: SearchDocument[] = [
  {
    url: "/post/1/",
    title: "signal",
    text: "notes about radio",
    tags: [],
    date: "2015-06-29",
    kind: "entry",
  },
  {
    url: "/post/2/",
    title: "older notes",
    text: `${"an introduction. ".repeat(30)}a signal from migrating birds`,
    tags: ["fieldwork"],
    date: "2012-11-15",
    kind: "photo",
  },
  {
    url: "/about/",
    title: "about",
    text: "listening for birds",
    tags: [],
    date: null,
    kind: null,
  },
];

test("full-text search includes pages, tags, and text beyond preview excerpts", () => {
  const search = createSearch(documents);
  assert.deepEqual(search(""), documents);
  assert.deepEqual(search("  "), documents);
  assert.deepEqual(search("FIELDWORK"), [documents[1]]);
  assert.deepEqual(search("migrate"), [documents[1]]);
  assert.deepEqual(search("listening"), [documents[2]]);
  assert.deepEqual(search("signal birds"), [documents[1]]);
  assert.equal(search("signal")[0], documents[0]);
});

test("plain-text queries do not interpret malformed Lunr query syntax", () => {
  const search = createSearch(documents);
  assert.deepEqual(search("signal:"), search("signal"));
  assert.deepEqual(search("["), []);
  assert.deepEqual(search('"+signal"'), search("signal"));
  assert.deepEqual(search("nonexistent"), []);
  assert.deepEqual(createSearch([])("anything"), []);
});

test("word prefixes and single-character typos match while every query word remains required", () => {
  const search = createSearch(documents);
  assert.deepEqual(search("sig bir"), [documents[1]]);
  assert.deepEqual(search("siganl"), [documents[0], documents[1]]);
  assert.deepEqual(search("fieldwor"), [documents[1]]);
  assert.deepEqual(search("sig nonexistent"), []);
  assert.equal(search("signal")[0], documents[0]);
  assert.deepEqual(search("*"), []);
});

test("match positions support title highlights, fuzzy body excerpts, and tag-only matches", () => {
  const search = createSearchIndex(documents);
  const titleHit = search("sig").find(({ entry }) => entry.url === "/post/1/")!;
  assert.ok(
    titleHit.matches.title.some(
      ([offset, length]) =>
        titleHit.entry.title.slice(offset, offset + length) === "signal",
    ),
  );
  const bodyHit = search("migarting")[0]!;
  assert.equal(bodyHit.entry, documents[1]);
  const fragment = searchFragment(bodyHit.entry.text, bodyHit.matches.text);
  assert.ok(fragment.text.startsWith("…"));
  assert.ok(fragment.text.length <= 182);
  assert.ok(
    fragment.matches.some(
      ([offset, length]) =>
        fragment.text.slice(offset, offset + length) === "migrating",
    ),
  );
  const tagHit = search("field")[0]!;
  assert.deepEqual(tagHit.matches.title, []);
  assert.deepEqual(tagHit.matches.text, []);
  assert.ok(tagHit.matches.tags.length > 0);
});

test("archive filters and full-text results intersect without admitting unrelated pages", () => {
  const scoped = filterPosts(documents, "tag:fieldwork");
  assert.deepEqual(createSearch(scoped)("sig"), [documents[1]]);
  assert.deepEqual(createSearch(scoped)("radio"), []);
  assert.deepEqual(createSearch(filterPosts(documents, "type:photo"))(""), [
    documents[1],
  ]);
});

test("search index validation rejects malformed, unsafe, and duplicate entries", () => {
  assert.deepEqual(parseDocuments(documents), documents);
  assert.deepEqual(parseDocuments([]), []);
  for (const value of [
    null,
    {},
    [{}],
    [documents[0], documents[0]],
    [{ ...documents[0], tags: null }],
    [{ ...documents[0], text: 42 }],
    [{ ...documents[0], kind: 42 }],
    [{ ...documents[0], kind: "" }],
    [{ ...documents[0], locations: [12] }],
    [{ ...documents[0], url: "javascript:alert(1)" }],
    [{ ...documents[0], url: "//example.com/" }],
    [{ ...documents[0], url: "/\\example.com/" }],
  ]) {
    assert.throws(() => parseDocuments(value), /invalid archive search index/);
  }
});
