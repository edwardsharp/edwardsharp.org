import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { parseHTML } from "linkedom";

test("post dates and archive tooltips include known precision while lists and tiles stay compact", () => {
  const cases = [
    {
      precision: "minute",
      expected: "Tuesday, November 17, 2026 at 4:19 pm",
      archive: "Tue, Nov 17, 4p",
      narrow: "Nov 17",
    },
    {
      precision: "second",
      expected: "Tuesday, November 17, 2026 at 4:19 pm",
      archive: "Tue, Nov 17, 4p",
      narrow: "Nov 17",
    },
    {
      precision: "day",
      expected: "Tuesday, November 17, 2026",
      archive: "Tue, Nov 17",
      narrow: "Nov 17",
    },
    {
      precision: null,
      expected: "Tuesday, November 17, 2026",
      archive: "Tue, Nov 17",
      narrow: "Nov 17",
    },
    {
      precision: "month",
      expected: "November 2026",
      archive: "Nov",
      narrow: "Nov",
    },
    { precision: "year", expected: "2026", archive: "2026", narrow: "2026" },
    {
      precision: "minute",
      date: "2026-11-18T00:00:00-05:00",
      expected: "Wednesday, November 18, 2026 at 12:00 am",
      archive: "Wed, Nov 18, 12a",
      narrow: "Nov 18",
    },
    {
      precision: "minute",
      date: "2026-07-23T12:15:00-04:00",
      expected: "Thursday, July 23, 2026 at 12:15 pm",
      archive: "Thu, Jul 23, 12p",
      narrow: "Jul 23",
    },
  ];
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
      site = Jekyll::Site.new(Jekyll.configuration("source" => ARGV.fetch(0), "quiet" => true, "disable_disk_cache" => true))
      templates = %w[src/_layouts/post.html src/_includes/feed-card.html src/_includes/archive-entry.html src/_includes/post-list.html src/assets/feed.json.liquid src/assets/search.json.liquid].map do |path|
        Liquid::Template.parse(File.read(File.join(site.source, path)).sub(/\\A---\\n.*?\\n---\\n/m, ""))
      end
      puts JSON.generate(JSON.parse(STDIN.read).map do |input|
        post = { "title" => "fixture", "url" => "/post/fixture/", "kind" => "entry", "collection" => "posts",
          "date" => Time.iso8601(input.fetch("date", "2026-11-17T16:19:56-05:00")),
          "date_precision" => input["precision"], "tags" => [], "content" => "" }
        payload = { "page" => post, "include" => { "post" => post, "entry" => post },
          "site" => { "posts" => [post], "collections" => [{ "label" => "pages", "docs" => [] }] } }
        templates.map { |template| template.render!(payload, registers: { site: site }) }
      end)
      `,
      root,
    ],
    { cwd: root, encoding: "utf8", input: JSON.stringify(cases) },
  );
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  const results: string[][] = JSON.parse(result.stdout);
  for (const [index, outputs] of results.entries()) {
    const expected = cases[index]!.expected;
    assert.equal(
      parseHTML(outputs[0]!).document.querySelector("time")?.textContent.trim(),
      expected,
    );
    const compact = cases[index]!.date?.slice(0, 10) ?? "2026-11-17";
    for (const html of [outputs[1]!, outputs[3]!])
      assert.equal(
        parseHTML(html).document.querySelector("time")?.textContent.trim(),
        compact,
      );
    const archive = parseHTML(outputs[2]!).document;
    assert.equal(
      archive.querySelector(".archive-date-wide")?.textContent.trim(),
      cases[index]!.archive,
    );
    assert.equal(
      archive.querySelector(".archive-date-narrow")?.textContent.trim(),
      cases[index]!.narrow,
    );
    assert.equal(
      archive.querySelector("time")?.getAttribute("title"),
      expected,
    );
    assert.equal(
      archive.querySelector("a")?.getAttribute("title"),
      `fixture / ${expected}`,
    );
    assert.equal(JSON.parse(outputs[4]!)[0].label, compact);
    assert.equal(JSON.parse(outputs[5]!)[0].date, compact);
    assert.equal(JSON.parse(outputs[5]!)[0].date_title, expected);
    assert.equal(JSON.parse(outputs[5]!)[0].date_label, cases[index]!.archive);
    assert.equal(
      JSON.parse(outputs[5]!)[0].date_short_label,
      cases[index]!.narrow,
    );
  }
});
