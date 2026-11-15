# edwardsharp.org

a jekyll blog with a virtualized honeycomb feed and a infinite scroll post reader.

## develop

```sh
bundle install
npm ci
./run-dev.sh
```

```sh
npm run build && JEKYLL_ENV=production bundle exec jekyll build
```

font: `Fraunces` header/headings at 100, bold at 800; license in `src/assets/fonts/OFL.txt`.

## extract stuff from the social media corpz.

`npm run import:social -- capture.json report.json` accepts normalized `SocialPost[]` records (see [the importer](src/utilz/import-social.ts)).

imports are append-only: existing posts and their media are left alone. commit `src/utilz/social-import-history.jsonl` and `src/utilz/image-import-history.jsonl` with imported content; their source IDs prevent renamed or deleted posts from being reimported. unavailable images leave an inline notice; the rest of the post remains readable.

## local utilz/

scripts/tests: `src/utilz/`. browser code: `src/ts/`. requires python 3.11+, imagemagick, and full disk access for your terminal/editor; notes also needs automation permission.

```sh
python3 -m venv src/utilz/.venv
src/utilz/.venv/bin/python -m pip install -r src/utilz/requirements.txt
mkdir -p src/utilz/.tools
git clone --depth 1 --branch v1.5.0 https://github.com/storizzi/notes-exporter.git src/utilz/.tools/notes-exporter
```

the [notes exporter](https://github.com/storizzi/notes-exporter) installs its dependencies on first use. tools/environments stay out of git and the site.

```sh
npm run export:notes -- "$HOME/Desktop/all-notes-review"
npm run export:notes -- "$HOME/Desktop/notes-review" --since 2020
npm run export:notes -- "$HOME/Desktop/recent-notes-review" --since 2020-06-15 --since-field modified --tags
```

notes: choose a new/empty private folder outside this repo. `raw/`: upstream export. `notes/`: markdown/images. `report.json`: skips/errors. preserves `date` and `last_modified`; drawings get `kind: doodle`. `--since`: year, year-month, or year-month-day, inclusive, using creation dates unless `--since-field modified`. raw includes all accessible notes; locked notes/non-image attachments are excluded.

```sh
npm run import:photos -- "/path/to/Photos exports" --dry-run
npm run import:photos -- "/path/to/Photos exports"
npm run import:photos -- "/path/to/Photos exports" --photoset "one set" --library "/path/to/Photos Library.photoslibrary"
```

photos: export original filenames with metadata. only the chosen folder is imported. output: `content/_posts/` and `content/media/`, grouped by year. unmatched/ambiguous files stop the batch; `--dry-run` writes nothing. captions/tags/full cached place names become public; gps is stripped, missing names omitted. reruns and exact standalone-image duplicates are skipped; resized/recompressed copies may not match. dry runs do not check converted-image duplicates.

---

made with 💖 in NYC
