import assert from "node:assert/strict";
import test from "node:test";
import { createSearch, parseDocuments } from "../assets/search.ts";
import type { SearchDocument } from "../assets/search.ts";

const documents: SearchDocument[] = [
  {
    url: "/post/1/",
    title: "signal",
    text: "notes about radio",
    tags: [],
    date: "2015-06-29",
  },
  {
    url: "/post/2/",
    title: "older notes",
    text: `${"an introduction. ".repeat(30)}a signal from migrating birds`,
    tags: ["fieldwork"],
    date: "2012-11-15",
  },
  {
    url: "/about/",
    title: "about",
    text: "listening for birds",
    tags: [],
    date: null,
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
    [{ ...documents[0], url: "javascript:alert(1)" }],
    [{ ...documents[0], url: "//example.com/" }],
    [{ ...documents[0], url: "/\\example.com/" }],
  ]) {
    assert.throws(() => parseDocuments(value), /invalid archive search index/);
  }
});
