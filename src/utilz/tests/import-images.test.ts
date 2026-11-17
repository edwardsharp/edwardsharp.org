import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  unlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import {
  imageDate,
  imageLocation,
  imagePostFilename,
  importImages,
  readPhotosMetadata,
  type PhotosMetadata,
} from "../import-images.ts";

test(
  "Photos metadata supplies capture dates, captions, tags and place names without GPS or Liquid images",
  {
    skip: spawnSync("magick", ["-version"]).error
      ? "requires ImageMagick"
      : false,
  },
  async (t) => {
    const temporary = await mkdtemp(join(tmpdir(), "photos-import-test-"));
    t.after(() => rm(temporary, { recursive: true, force: true }));
    const source = join(temporary, "source");
    const root = join(temporary, "site");
    await mkdir(source);
    const image = join(source, "IMG_1208.png");
    const made = spawnSync("magick", ["-size", "8x8", "xc:red", image]);
    assert.equal(made.status, 0, made.stderr.toString());
    await writeFile(join(source, "unmatched.png"), "not an image");
    const corrupt = join(source, "corrupt.png");
    await writeFile(corrupt, "not an image either");
    const file = join(temporary, "metadata.json");
    const record = {
      date: "2020-06-01T12:00:01-04:00",
      last_modified: "2020-07-01T12:00:01-04:00",
      title: "performance",
      description: "a caption",
      tags: ["noise", "NOISE", "photo"],
      place: "A venue, Brooklyn, New York, United States",
      needs_review: true,
    };
    await writeFile(
      file,
      JSON.stringify({ [image]: record, [corrupt]: record }),
    );
    const photosMetadata = await readPhotosMetadata(file);
    await importImages(
      {
        directory: source,
        dateSource: "exif",
        photosets: [],
        location: false,
        videos: false,
        dryRun: false,
        photosMetadata,
      },
      root,
    );
    const output = await readFile(
      join(root, "content/_posts/2020/2020-06-01-performance.md"),
      "utf8",
    );
    assert.match(output, /date: "2020-06-01T16:00:01.000Z"/);
    assert.match(output, /last_modified: "2020-07-01T16:00:01.000Z"/);
    assert.match(output, /^needs_review: true$/m);
    assert.match(output, /tags: \["photo","noise"\]/);
    assert.match(
      output,
      /location_name: "A venue, Brooklyn, New York, United States"/,
    );
    assert.match(output, /a caption/);
    assert.match(output, /^!\[performance\]\(\/content\/media\/2020\//m);
    assert.doesNotMatch(output, /relative_url|<img|latitude|longitude/);
    await writeFile(
      file,
      JSON.stringify({ [image]: { ...record, date: "2020-06-01" } }),
    );
    await assert.rejects(readPhotosMetadata(file), /timestamp/);
    await writeFile(
      file,
      JSON.stringify({ [image]: { ...record, needs_review: "yes" } }),
    );
    await assert.rejects(readPhotosMetadata(file), /invalid Photos metadata/);
  },
);

test(
  "Photos imports skip unusable sets and mark mixed sets for review",
  {
    skip: spawnSync("magick", ["-version"]).error
      ? "requires ImageMagick"
      : false,
  },
  async (t) => {
    const temporary = await mkdtemp(join(tmpdir(), "photos-sets-test-"));
    t.after(() => rm(temporary, { recursive: true, force: true }));
    const source = join(temporary, "source");
    const root = join(temporary, "site");
    await mkdir(join(source, "mixed"), { recursive: true });
    await mkdir(join(source, "empty"));
    const image = join(source, "mixed", "good.png");
    const made = spawnSync("magick", ["-size", "8x8", "xc:red", image]);
    assert.equal(made.status, 0, made.stderr.toString());
    await writeFile(join(source, "mixed", "bad.png"), "broken");
    await writeFile(join(source, "empty", "bad.png"), "broken");
    const photosMetadata = new Map([
      [
        image,
        {
          date: "2020-06-01T16:00:01.000Z",
          last_modified: null,
          title: "good",
          description: "",
          tags: [],
          place: null,
          needs_review: true,
        },
      ],
    ]);
    const options = {
      directory: source,
      dateSource: "exif" as const,
      photosets: ["mixed", "empty"],
      location: false,
      videos: false,
      dryRun: false,
      photosMetadata,
    };
    assert.deepEqual(await importImages(options, root), {
      imported: 1,
      skipped: 0,
    });
    const output = await readFile(
      join(root, "content/_posts/2020/2020-06-01-mixed.md"),
      "utf8",
    );
    assert.match(output, /^needs_review: true$/m);
    assert.equal(output.match(/^!\[/gm)?.length, 1);
    await assert.rejects(
      importImages({ ...options, photosMetadata: new Map() }, root),
      /no usable Photos images/,
    );
  },
);

test(
  "Photos imports group chronologically within six hours, including the boundary, while explicit sets stay intact",
  {
    skip: spawnSync("magick", ["-version"]).error
      ? "requires ImageMagick"
      : false,
  },
  async (t) => {
    const temporary = await mkdtemp(join(tmpdir(), "photos-time-groups-"));
    t.after(() => rm(temporary, { recursive: true, force: true }));
    const source = join(temporary, "source");
    const root = join(temporary, "site");
    const metadata: Record<string, PhotosMetadata> = {};
    for (const fixture of [
      {
        name: "z-earliest",
        date: "2020-12-31T23:00:00Z",
        color: "red",
        folder: "",
      },
      {
        name: "m-middle",
        date: "2021-01-01T04:00:00+02:00",
        color: "blue",
        folder: "nested",
      },
      {
        name: "a-boundary",
        date: "2020-12-31T23:00:00-06:00",
        color: "green",
        folder: "",
      },
      {
        name: "b-over",
        date: "2021-01-01T05:00:00.001Z",
        color: "yellow",
        folder: "",
      },
      {
        name: "c-second",
        date: "2021-01-01T09:00:00Z",
        color: "purple",
        folder: "",
      },
      {
        name: "y-distant",
        date: "2023-11-05T12:00:00Z",
        color: "orange",
        folder: "",
      },
      {
        name: "manual-old",
        date: "2015-01-01T12:00:00Z",
        color: "black",
        folder: "chosen",
      },
      {
        name: "manual-new",
        date: "2025-01-01T12:00:00Z",
        color: "white",
        folder: "chosen",
      },
    ]) {
      const directory = join(source, fixture.folder);
      await mkdir(directory, { recursive: true });
      const image = join(directory, `${fixture.name}.png`);
      const made = spawnSync("magick", [
        "-size",
        "8x8",
        `xc:${fixture.color}`,
        image,
      ]);
      assert.equal(made.status, 0, made.stderr.toString());
      metadata[image] = {
        date: fixture.date,
        title: fixture.name,
        description: `caption ${fixture.name}`,
        tags: ["noise"],
        place: "somewhere",
        last_modified: null,
        needs_review: fixture.name === "m-middle",
      };
    }
    const file = join(temporary, "metadata.json");
    await writeFile(file, JSON.stringify(metadata));
    const options = {
      directory: source,
      dateSource: "exif" as const,
      photosets: ["chosen"],
      location: false,
      videos: false,
      dryRun: false,
      photosMetadata: await readPhotosMetadata(file),
    };
    await importImages({ ...options, dryRun: true }, root);
    await assert.rejects(stat(root), { code: "ENOENT" });
    assert.equal((await importImages(options, root)).imported, 4);
    const posts = await readdir(join(root, "content/_posts"), {
      recursive: true,
    });
    const documents = await Promise.all(
      posts
        .filter((path) => path.endsWith(".md"))
        .map((path) => readFile(join(root, "content/_posts", path), "utf8")),
    );
    const first = documents.find((text) =>
      text.includes('title: "z-earliest"'),
    );
    const second = documents.find((text) => text.includes('title: "b-over"'));
    const distant = documents.find((text) =>
      text.includes('title: "y-distant"'),
    );
    const manual = documents.find((text) => text.includes('title: "chosen"'));
    assert.ok(first && second && distant && manual);
    assert.deepEqual(
      [...first.matchAll(/^!\[([^\]]+)\]/gm)].map((match) => match[1]),
      ["z-earliest", "m-middle", "a-boundary"],
    );
    assert.match(first, /^date: "2021-01-01T05:00:00.000Z"$/m);
    assert.match(first, /^needs_review: true$/m);
    assert.match(first, /^locations: \[/m);
    assert.deepEqual(
      [...second.matchAll(/^!\[([^\]]+)\]/gm)].map((match) => match[1]),
      ["b-over", "c-second"],
    );
    assert.equal(distant.match(/^!\[/gm)?.length, 1);
    assert.equal(manual.match(/^!\[/gm)?.length, 2);
    assert.match(manual, /^date: "2025-01-01T12:00:00.000Z"$/m);
  },
);

test(
  "automatic Photos groups skip duplicate exports and remember individual members on later imports",
  {
    skip: spawnSync("magick", ["-version"]).error
      ? "requires ImageMagick"
      : false,
  },
  async (t) => {
    const temporary = await mkdtemp(join(tmpdir(), "photos-group-history-"));
    t.after(() => rm(temporary, { recursive: true, force: true }));
    const source = join(temporary, "source");
    const root = join(temporary, "site");
    await mkdir(source);
    const photosMetadata = new Map<string, PhotosMetadata>();
    async function add(name: string, color: string, hour: number) {
      const image = join(source, `${name}.png`);
      const made = spawnSync("magick", ["-size", "8x8", `xc:${color}`, image]);
      assert.equal(made.status, 0, made.stderr.toString());
      photosMetadata.set(image, {
        date: `2020-06-01T${hour}:00:00.000Z`,
        title: name,
        description: "",
        tags: [],
        place: null,
        last_modified: null,
      });
      return image;
    }
    const original = await add("old", "blue", 12);
    const duplicate = join(source, "old-copy.png");
    await writeFile(duplicate, await readFile(original));
    const originalMetadata = photosMetadata.get(original);
    assert.ok(originalMetadata);
    photosMetadata.set(duplicate, {
      ...originalMetadata,
      date: "2020-06-01T13:00:00.000Z",
      title: "old-copy",
    });
    const options = {
      directory: source,
      dateSource: "exif" as const,
      photosets: [],
      location: false,
      videos: false,
      dryRun: false,
      photosMetadata,
    };
    assert.equal((await importImages(options, root)).imported, 1);
    const originalPost = join(
      root,
      "content/_posts/2020/2020-06-01-old.md",
    );
    const edited = `${await readFile(originalPost, "utf8")}\nuser edit\n`;
    await writeFile(originalPost, edited);
    await add("new-one", "green", 14);
    await add("new-two", "red", 15);
    assert.equal((await importImages(options, root)).imported, 1);
    assert.equal((await importImages(options, root)).imported, 0);
    await add("new-three", "purple", 16);
    assert.equal((await importImages(options, root)).imported, 1);
    assert.equal((await importImages(options, root)).imported, 0);
    assert.equal(await readFile(originalPost, "utf8"), edited);
    const posts = await readdir(join(root, "content/_posts"), {
      recursive: true,
    });
    assert.equal(posts.filter((path) => path.endsWith(".md")).length, 3);
  },
);

test("post filenames distinguish screenshots and photos without repeating capture dates", () => {
  const date = new Date(2026, 0, 6, 15, 35, 19).toISOString();
  assert.equal(
    imagePostFilename("Screenshot 2026-01-06 at 15.35.19", date, "photo"),
    "2026-01-06-screenshot.md",
  );
  assert.equal(
    imagePostFilename("IMG_1208", date, "photo"),
    "2026-01-06-photo.md",
  );
  assert.equal(
    imagePostFilename("f-dt misc", date, "photo"),
    "2026-01-06-f-dt-misc.md",
  );
  assert.equal(
    imagePostFilename("Screen Recording 2026-01-06 at 15.35.19", date, "video"),
    "2026-01-06-video.md",
  );
});

test("screenshot dates take precedence over copied file dates; EXIF preserves the capture offset", () => {
  const birthtime = new Date("2026-11-15T08:00:00Z");
  assert.equal(
    imageDate(
      "Screenshot 2026-01-06 at 15.35.19.png",
      birthtime,
      {},
      "created",
    ),
    new Date(2026, 0, 6, 15, 35, 19).toISOString(),
  );
  assert.equal(
    imageDate(
      "Screen Recording 2026-05-22 at 05.00.29.mov",
      birthtime,
      {},
      "created",
    ),
    new Date(2026, 4, 22, 5, 0, 29).toISOString(),
  );
  assert.equal(
    imageDate("phone.jpg", birthtime, {}, "created"),
    birthtime.toISOString(),
  );
  assert.equal(
    imageDate(
      "phone.jpg",
      birthtime,
      {
        DateTimeOriginal: "2026:10:27 12:56:13",
        OffsetTimeOriginal: "-04:00",
      },
      "exif",
    ),
    "2026-10-27T16:56:13.000Z",
  );
  assert.throws(
    () => imageDate("phone.jpg", birthtime, {}, "exif"),
    /DateTimeOriginal/,
  );
  assert.throws(
    () =>
      imageDate(
        "Screenshot 2026-02-30 at 00.00.00.png",
        birthtime,
        {},
        "created",
      ),
    /invalid capture date/,
  );
  assert.throws(
    () => imageDate("phone.jpg", new Date(0), {}, "created"),
    /creation date unavailable/,
  );
});

test("EXIF GPS rational values retain hemisphere; missing and corrupt data stay distinct", () => {
  assert.deepEqual(
    imageLocation({
      GPSLatitude: "40/1, 39/1, 2113/100",
      GPSLatitudeRef: "N",
      GPSLongitude: "73/1, 57/1, 2125/100",
      GPSLongitudeRef: "W",
    }),
    { latitude: 40.6558694, longitude: -73.9559028 },
  );
  assert.equal(imageLocation({}), undefined);
  assert.throws(() => imageLocation({ GPSLatitude: "0/1,0/1,0/1" }), /GPS/);
  assert.throws(
    () =>
      imageLocation({
        GPSLatitude: "40/0,0/1,0/1",
        GPSLatitudeRef: "N",
        GPSLongitude: "73/1,0/1,0/1",
        GPSLongitudeRef: "W",
      }),
    /GPS/,
  );
  assert.throws(
    () =>
      imageLocation({
        GPSLatitude: "90/1,1/1,0/1",
        GPSLatitudeRef: "N",
        GPSLongitude: "0/1,0/1,0/1",
        GPSLongitudeRef: "E",
      }),
    /out of range/,
  );
});

test(
  "exact images in another platform's post are skipped without duplicating media or touching that post",
  {
    skip: spawnSync("magick", ["-version"]).error
      ? "requires ImageMagick"
      : false,
  },
  async (t) => {
    const temporary = await mkdtemp(join(tmpdir(), "image-dedup-test-"));
    t.after(() => rm(temporary, { recursive: true, force: true }));
    const source = join(temporary, "source");
    const root = join(temporary, "site");
    const media = join(root, "content/media/2020/existing.png");
    const post = join(root, "content/_posts/2020/2020-01-01-archive.md");
    await mkdir(source);
    await mkdir(join(root, "content/media/2020"), { recursive: true });
    await mkdir(join(root, "content/_posts/2020"), { recursive: true });
    const image = join(source, "copied.png");
    const made = spawnSync("magick", [
      "-size",
      "8x8",
      "xc:blue",
      "-set",
      "comment",
      "original metadata",
      image,
    ]);
    assert.equal(made.status, 0, made.stderr.toString());
    const converted = spawnSync("magick", [
      image,
      "-auto-orient",
      "-strip",
      "-define",
      "png:exclude-chunks=all",
      media,
    ]);
    assert.equal(converted.status, 0, converted.stderr.toString());
    const text =
      "---\nkind: photo\n---\n![existing](/content/media/2020/existing.png)\n";
    await writeFile(post, text);
    const options = {
      directory: source,
      dateSource: "created" as const,
      photosets: [],
      location: false,
      videos: false,
      dryRun: false,
    };
    assert.deepEqual(await importImages(options, root), {
      imported: 0,
      skipped: 1,
    });
    assert.equal(await readFile(post, "utf8"), text);
    assert.equal(
      (await readdir(join(root, "content/_posts"), { recursive: true })).filter(
        (file) => file.endsWith(".md"),
      ).length,
      1,
    );
    assert.deepEqual(await readdir(join(root, "content/media/2020")), [
      "existing.png",
    ]);
  },
);

test(
  "imports strip metadata, group images, and never restore or overwrite edited posts",
  {
    skip: spawnSync("magick", ["-version"]).error
      ? "requires ImageMagick"
      : false,
  },
  async () => {
    const temporary = await mkdtemp(join(tmpdir(), "image-import-test-"));
    const source = join(temporary, "source");
    const root = join(temporary, "site");
    await mkdir(join(source, "set"), { recursive: true });
    function fixture(name: string, color: string) {
      const result = spawnSync("magick", [
        "-size",
        "8x8",
        `xc:${color}`,
        "-set",
        "comment",
        "private comment",
        "-set",
        "exif:GPSLatitude",
        "40/1,0/1,0/1",
        join(source, name),
      ]);
      assert.equal(result.status, 0, result.stderr.toString());
    }
    fixture("Screenshot 2025-01-02 at 03.04.05.png", "red");
    fixture("set/one.png", "blue");
    fixture("set/two.png", "green");
    const options = {
      directory: source,
      dateSource: "created" as const,
      photosets: ["set"],
      location: false,
      videos: false,
      dryRun: false,
    };
    try {
      const original = await readFile(
        join(source, "Screenshot 2025-01-02 at 03.04.05.png"),
      );
      await importImages({ ...options, dryRun: true }, root);
      await assert.rejects(readdir(root), { code: "ENOENT" });
      const collision = join(
        root,
        "content/_posts/2025/2025-01-02-screenshot.md",
      );
      await mkdir(join(root, "content/_posts/2025"), { recursive: true });
      await writeFile(collision, "existing authored post\n");
      assert.deepEqual(await importImages(options, root), {
        imported: 2,
        skipped: 0,
      });
      const files = (
        await readdir(join(root, "content", "_posts"), { recursive: true })
      ).filter((name) => name.endsWith(".md"));
      const contents = await Promise.all(
        files.map((name) =>
          readFile(join(root, "content", "_posts", name), "utf8"),
        ),
      );
      const screenshot = contents.findIndex((text) =>
        text.includes('title: "Screenshot'),
      );
      assert.match(files[screenshot]!, /screenshot-2\.md$/);
      assert.equal(
        await readFile(collision, "utf8"),
        "existing authored post\n",
      );
      assert.match(contents[screenshot]!, /^kind: "screenshot"$/m);
      assert.match(contents[screenshot]!, /tags: \["photo"\]/);
      const set = contents.find((text) => text.includes('title: "set"'))!;
      assert.equal((set.match(/^!\[/gm) ?? []).length, 2);
      assert.match(set, /kind: "photo"/);
      const newest = Math.max(
        (await stat(join(source, "set", "one.png"))).birthtime.getTime(),
        (await stat(join(source, "set", "two.png"))).birthtime.getTime(),
      );
      assert.ok(set.includes(`date: "${new Date(newest).toISOString()}"`));
      for (const filename of await readdir(join(root, "content", "media"), {
        recursive: true,
      })) {
        if (!filename.endsWith(".png")) continue;
        const result = spawnSync(
          "magick",
          [
            "identify",
            "-format",
            "%[EXIF:*]%c",
            join(root, "content", "media", filename),
          ],
          { encoding: "utf8" },
        );
        assert.equal(result.status, 0);
        assert.equal(result.stdout, "");
      }
      assert.deepEqual(
        await readFile(join(source, "Screenshot 2025-01-02 at 03.04.05.png")),
        original,
      );
      const post = join(root, "content", "_posts", files[screenshot]!);
      const historyPath = join(
        root,
        "src",
        "utilz",
        "image-import-history.jsonl",
      );
      const history = await readFile(historyPath);
      await writeFile(post, "manually edited post\n");
      const moved = join(root, "content", "_posts", "renamed.md");
      await rename(post, moved);
      assert.deepEqual(await importImages(options, root), {
        imported: 0,
        skipped: 2,
      });
      assert.equal(await readFile(moved, "utf8"), "manually edited post\n");
      await unlink(moved);
      assert.deepEqual(await importImages(options, root), {
        imported: 0,
        skipped: 2,
      });
      assert.deepEqual(await readFile(historyPath), history);
    } finally {
      await rm(temporary, { recursive: true });
    }
  },
);
