import assert from "node:assert/strict";
import test from "node:test";
import { archiveTitle, groupArchiveEntries } from "../archive-groups.ts";
import type { SearchDocument } from "../search.ts";

const post: SearchDocument = {
  url: "/post/1/",
  title: "a title",
  date: "2026-03-04",
  kind: "photo",
  text: "",
  tags: [],
};

test("archive groups years newest first without losing pages or within-year search order", () => {
  const older = { ...post, url: "/post/2/", date: "2014-01-01" };
  const another = { ...post, url: "/post/3/" };
  const page = { ...post, url: "/about/", date: null, kind: null };
  assert.deepEqual(groupArchiveEntries([older, post, page, another]), [
    { year: null, entries: [page] },
    { year: "2026", entries: [post, another] },
    { year: "2014", entries: [older] },
  ]);
  assert.deepEqual(groupArchiveEntries([]), []);
});

test("empty or placeholder archive titles retain a usable link label", () => {
  for (const title of ["", "  ", "no title", "Untitled"])
    assert.equal(archiveTitle({ ...post, title }), "photo / 2026-03-04");
  assert.equal(
    archiveTitle({ ...post, title: "", date: null, kind: null }),
    "/post/1/",
  );
  assert.equal(archiveTitle(post), "a title");
});
