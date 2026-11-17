import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  filterChoices,
  filterPosts,
  readerSelection,
} from "../feed-filters.ts";

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
    locations: [],
  });
  assert.deepEqual(filterChoices(posts.slice(0, 1)).tags, []);
});

test("location choices count posts once and hide singletons without disabling their direct filters", () => {
  const feed = [
    {
      url: "/new",
      kind: "photo",
      tags: [],
      locations: ["Venue A, City", " venue  a, city ", "Venue-A, City"],
    },
    { url: "/text", kind: "entry", tags: [], locations: ["VENUE A, CITY"] },
    { url: "/old", kind: "photo", tags: [], locations: ["Other Place"] },
    { url: "/none", kind: "photo", tags: [] },
  ];
  assert.deepEqual(filterChoices(feed).locations, [
    { value: "location:venue a, city", label: "Venue A, City (2)" },
  ]);
  assert.deepEqual(filterPosts(feed, "location: VENUE  A, CITY "), [
    feed[0],
    feed[1],
  ]);
  assert.deepEqual(filterPosts(feed, "location:Venue-A, City"), [feed[0]]);
  assert.deepEqual(filterPosts(feed, "location:Other Place"), [feed[2]]);
  assert.deepEqual(filterPosts(feed, "location:missing"), []);
  assert.deepEqual(filterPosts(feed, "location:  "), []);
  assert.deepEqual(
    readerSelection(feed, "location:Venue A, City", feed[0]!, "/text"),
    {
      posts: [feed[0], feed[1]],
      index: 1,
    },
  );
});

test("feed metadata includes single-post and photoset names but omits coordinate-only locations", () => {
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
      site = Jekyll::Site.new(Jekyll.configuration("source" => ARGV.fetch(0), "quiet" => true))
      source = File.read(File.join(ARGV.fetch(0), "src/assets/feed.json.liquid"), encoding: "UTF-8").sub(/\\A---\\n.*?\\n---\\n/m, "")
      posts = [
        { "url" => "/named", "title" => "named", "date" => "2026-11-15", "tags" => [], "location_name" => "Venue, City",
          "locations" => [{ "image" => "/one", "name" => "Venue, City" }, { "image" => "/two", "name" => "Other Place" }] },
        { "url" => "/gps", "title" => "gps", "date" => "2026-11-15", "tags" => [], "locations" => [{ "latitude" => 1, "longitude" => 2 }] },
        { "url" => "/none", "title" => "none", "date" => "2026-11-15", "tags" => [] }
      ]
      puts Liquid::Template.parse(source).render!({ "site" => { "posts" => posts } }, registers: { site: site })
    `,
      root,
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(
    JSON.parse(result.stdout).map(
      (post: { locations: string[] }) => post.locations,
    ),
    [["Venue, City", "Other Place"], [], []],
  );
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

test("doodles have their own type choice and reader sequence, separate from photos", () => {
  const posts = [
    { url: "/new-doodle", kind: "doodle", tags: ["drawing"] },
    { url: "/photo", kind: "photo", tags: ["drawing"] },
    { url: "/old-doodle", kind: "doodle", tags: ["drawing"] },
  ];
  assert.deepEqual(filterChoices(posts).types, [
    { value: "type:doodle", label: "doodle (2)" },
    { value: "type:photo", label: "photo (1)" },
  ]);
  assert.deepEqual(readerSelection(posts, "", posts[0]!).posts, [
    posts[0],
    posts[2],
  ]);
  assert.deepEqual(
    readerSelection(posts, "tag:drawing", posts[0]!).posts,
    posts,
  );
});

test("reader defaults to the opening kind but tag filters include every matching kind in date order", () => {
  const feed = posts.map((post) => ({ ...post, url: `/post/${post.id}/` }));
  const opening = feed[2]!;
  const initial = readerSelection(feed, "", opening);
  assert.deepEqual(
    initial.posts.map((post) => post.id),
    [1, 3],
  );
  assert.equal(initial.index, 1);
  const tagged = readerSelection(feed, "tag:type:photo", opening);
  assert.deepEqual(
    tagged.posts.map((post) => post.id),
    [2, 3],
  );
  assert.equal(tagged.index, 1);
  assert.deepEqual(
    feed.map((post) => post.id),
    [1, 2, 3, 4],
  );
});

test("reader filters keep a matching current post, otherwise start at the newest match", () => {
  const feed = posts.map((post) => ({ ...post, url: `/post/${post.id}/` }));
  const opening = feed[0]!;
  const changed = readerSelection(feed, "tag:noise", opening, "/post/3/");
  assert.deepEqual(
    changed.posts.map((post) => post.id),
    [1, 2],
  );
  assert.equal(changed.index, 0);
  assert.equal(
    readerSelection(feed, "tag:noise", opening, "/post/2/").index,
    1,
  );
  assert.deepEqual(readerSelection(feed, "tag:missing", opening), {
    posts: [],
    index: null,
  });
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
    { value: "tag:futuredeathtoll", label: "future death toll (2)" },
    { value: "tag:futuredeath.agency", label: "futuredeath.agency (2)" },
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

test("tag and location choices sort by descending tens bands, alphabetically within each band", () => {
  const counts = [
    ["zeta", 59],
    ["alpha", 50],
    ["charlie", 20],
    ["bravo", 29],
    ["echo", 11],
    ["delta", 19],
    ["golf", 10],
    ["foxtrot", 2],
    ["singleton", 1],
  ] as const;
  const feed = Array.from({ length: 59 }, (_, index) => {
    const labels = counts
      .filter(([, count]) => index < count)
      .map(([label]) => label);
    return {
      kind: index % 2 === 0 ? "photo" : "audio",
      tags: labels,
      locations: labels,
    };
  });
  const choices = filterChoices(feed);
  assert.deepEqual(choices.tags, [
    { value: "tag:alpha", label: "alpha (50)" },
    { value: "tag:zeta", label: "zeta (59)" },
    { value: "tag:bravo", label: "bravo (29)" },
    { value: "tag:charlie", label: "charlie (20)" },
    { value: "tag:delta", label: "delta (19)" },
    { value: "tag:echo", label: "echo (11)" },
    { value: "tag:foxtrot", label: "foxtrot (2)" },
    { value: "tag:golf", label: "golf (10)" },
  ]);
  assert.deepEqual(
    choices.locations,
    choices.tags.map(({ value, label }) => ({
      value: value.replace(/^tag:/, "location:"),
      label,
    })),
  );
  assert.deepEqual(choices.types, [
    { value: "type:audio", label: "audio (29)" },
    { value: "type:photo", label: "photo (30)" },
  ]);
});

test("low-count tags sort alphabetically regardless of their individual counts", () => {
  const choices = filterChoices([
    { kind: "photo", tags: ["zeta", "beta", "alpha"] },
    { kind: "photo", tags: ["zeta", "beta", "alpha"] },
    { kind: "audio", tags: ["zeta"] },
  ]);
  assert.deepEqual(choices.tags, [
    { value: "tag:alpha", label: "alpha (2)" },
    { value: "tag:beta", label: "beta (2)" },
    { value: "tag:zeta", label: "zeta (3)" },
  ]);
  assert.deepEqual(choices.types, [
    { value: "type:audio", label: "audio (1)" },
    { value: "type:photo", label: "photo (2)" },
  ]);
});

test("post footer tags gain one display hash without changing their filter identities", () => {
  const root = fileURLToPath(new URL("../../../", import.meta.url));
  const result = spawnSync(
    "bundle",
    [
      "exec",
      "ruby",
      "-EUTF-8:UTF-8",
      "-rjekyll",
      "-rjson",
      "-rnokogiri",
      "-e",
      `
        require File.join(ARGV.fetch(0), "src/_plugins/tag-counts.rb")
        tags = ["noise", "#noise", " spaced "]
        site = Jekyll::Site.new(Jekyll.configuration(
          "source" => ARGV.fetch(0), "baseurl" => "/reader-test", "quiet" => true
        ))
        site.posts.docs << Struct.new(:data, :path).new({ "tags" => tags }, "fixture.md")
        JournalTagCounts::Generator.new.generate(site)
        source = File.read(File.join(ARGV.fetch(0), "src/_layouts/post.html"), encoding: "UTF-8")
        html = Liquid::Template.parse(source).render!(
          { "page" => { "title" => "fixture", "date" => "2026-11-15", "tags" => tags } },
          registers: { site: site }
        )
        links = Nokogiri::HTML5.fragment(html).css(".tags a")
        puts JSON.generate(links.map { |link| { label: link.text.strip, href: link["href"] } })
      `,
      root,
    ],
    { cwd: root, encoding: "utf8" },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), [
    { label: "#noise (1)", href: "/reader-test/?tag=noise" },
    { label: "#noise (1)", href: "/reader-test/?tag=%23noise" },
    { label: "#spaced (1)", href: "/reader-test/?tag=+spaced+" },
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
