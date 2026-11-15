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
} from "../import-images.ts";

test("post filenames distinguish screenshots and photos without repeating capture dates", () => {
  const date = new Date(2026, 0, 6, 15, 35, 19).toISOString();
  assert.equal(
    imagePostFilename("Screenshot 2026-01-06 at 15.35.19", date, "photo"),
    "2026-01-06-screenshot-15-35-19.md",
  );
  assert.equal(
    imagePostFilename("IMG_1208", date, "photo"),
    "2026-01-06-photo-img-1208.md",
  );
  assert.equal(
    imagePostFilename("f-dt misc", date, "photo"),
    "2026-01-06-photo-f-dt-misc.md",
  );
  assert.equal(
    imagePostFilename("Screen Recording 2026-01-06 at 15.35.19", date, "video"),
    "2026-01-06-video-15-35-19.md",
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
        "content/_posts/2025/2025-01-02-screenshot-03-04-05.md",
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
      assert.match(files[screenshot]!, /screenshot-03-04-05-[a-f0-9]{12}\.md$/);
      assert.equal(
        await readFile(collision, "utf8"),
        "existing authored post\n",
      );
      assert.match(contents[screenshot]!, /tags: \["photo","screenshot"\]/);
      const set = contents.find((text) => text.includes('title: "set"'))!;
      assert.equal((set.match(/<img /g) ?? []).length, 2);
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
      const historyPath = join(root, "src", "ts", "image-import-history.jsonl");
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
