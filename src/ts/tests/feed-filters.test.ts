import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
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
    { value: "tag:pdx", label: "pdx (3)" },
    { value: "tag:futuredeathtoll", label: "future death toll (2)" },
    { value: "tag:futuredeath.agency", label: "futuredeath.agency (2)" },
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

test("tag choices sort by descending count, then alphabetical label; post types stay alphabetical", () => {
  const choices = filterChoices([
    { kind: "photo", tags: ["zeta", "beta", "alpha"] },
    { kind: "photo", tags: ["zeta", "beta", "alpha"] },
    { kind: "audio", tags: ["zeta"] },
  ]);
  assert.deepEqual(choices.tags, [
    { value: "tag:zeta", label: "zeta (3)" },
    { value: "tag:alpha", label: "alpha (2)" },
    { value: "tag:beta", label: "beta (2)" },
  ]);
  assert.deepEqual(choices.types, [
    { value: "type:audio", label: "audio (1)" },
    { value: "type:photo", label: "photo (2)" },
  ]);
});

test("rendered post counts share alias identity and invalidate affected incremental posts only", () => {
  const root = fileURLToPath(new URL("../../../", import.meta.url));
  const result = spawnSync(
    "bundle",
    [
      "exec",
      "ruby",
      "-EUTF-8:UTF-8",
      "-rjekyll",
      "-rjson",
      "-e",
      `
        require File.join(ARGV.fetch(0), "src/_plugins/tag-counts.rb")
        docs = JSON.parse(STDIN.read).each_with_index.map do |tags, index|
          Struct.new(:data, :path).new({ "tags" => tags }, index.to_s)
        end
        Encoding.default_external = Encoding::US_ASCII
        regenerator = Struct.new(:forced).new([])
        def regenerator.force(path)
          forced << path
        end
        site = Struct.new(:source, :posts, :data, :regenerator).new(
          ARGV.fetch(0), Struct.new(:docs).new(docs), {}, regenerator
        )
        generator = JournalTagCounts::Generator.new
        generator.generate(site)
        template = Liquid::Template.parse("{{ tag | post_tag_count }}")
        counts = docs.flat_map { |post| post.data.fetch("tags") }.uniq.to_h do |tag|
          [tag, template.render!({ "tag" => tag }, registers: { site: site }).to_i]
        end
        regenerator.forced.clear
        generator.generate(site)
        unchanged = regenerator.forced.dup
        docs << Struct.new(:data, :path).new({ "tags" => ["p-d_x"] }, "new")
        generator.generate(site)
        puts JSON.generate({ counts: counts, unchanged: unchanged, changed: regenerator.forced })
      `,
      root,
    ],
    {
      cwd: root,
      encoding: "utf8",
      input: JSON.stringify([
        ["PDX", "p-d_x", "solo"],
        [" p d x "],
        ["futuredeath.agency"],
        ["future_death_agency"],
        ["\u00a0P\uFEFFd_x\u3000"],
        ["\u039f\u03a3", "\u03bf\u03c2"],
        ["\u039f\u03a3"],
      ]),
    },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), {
    counts: {
      PDX: 3,
      "p-d_x": 3,
      solo: 1,
      " p d x ": 3,
      "futuredeath.agency": 1,
      future_death_agency: 1,
      "\u00a0P\uFEFFd_x\u3000": 3,
      "\u039f\u03a3": 2,
      "\u03bf\u03c2": 2,
    },
    unchanged: [],
    changed: ["0", "1", "4", "new"],
  });
});
