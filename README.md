# edwardsharp.org

a jekyll blog with a virtualized honeycomb feed and a infinite scroll post reader.

**font:** `Fraunces` header/headings at 100, bold at 800; license in [src/assets/fonts/OFL.txt](src/assets/fonts/OFL.txt).

## devel

```sh
bundle install      # run once
npm ci              # run once

make dev            # incremental watch mode

# or do a full build
npm run build && JEKYLL_ENV=production bundle exec jekyll build
```

## /utilz/

```sh
make post  # new post interactive tui
make       # interactive tui utilz menu
```

uses [@inquirer npm package](https://npmjs.com/package/inquirer) for interactive tui; with system file pickers on macOS, or typed paths for file paths; dates accept text/iso/partial dates; `today` defaults to the current minute, month/year-only dates use their first day; images are converted to WebP with metadata stripped; originals stay untouched.

requires python 3.11+, imagemagick, and full disk access for your terminal/editor; notes.app scriptz also needs automation permission: `python3 src/utilz/.tools/notes-exporter/notes_permission.py --ask`

```sh
python3 -m venv src/utilz/.venv
src/utilz/.venv/bin/python -m pip install -r src/utilz/requirements.txt
mkdir -p src/utilz/.tools
git clone --depth 1 --branch v1.5.0 https://github.com/storizzi/notes-exporter.git src/utilz/.tools/notes-exporter
```

the [notes exporter](https://github.com/storizzi/notes-exporter) installs its dependencies on first use. extract stuff from the social media corpz (accepts normalized `SocialPost[]` records (see [the importer](src/utilz/import-social.ts)))

```sh
# for example:
npm run import:social -- capture.json report.json
```

_imports are append-only:_ existing posts and their media are left alone. commit `src/utilz/social-import-history.jsonl` and `src/utilz/image-import-history.jsonl` with imported content; their source IDs prevent renamed or deleted posts from being reimported. unavailable images leave an inline notice; the rest of the post remains readable.

```sh
# for example:
npm run export:notes -- "$HOME/Desktop/all-notes-review"
npm run export:notes -- "$HOME/Desktop/notes-review" --since 2020
npm run export:notes -- "$HOME/Desktop/recent-notes-review" --since 2020-06-15 --since-field modified --tags
```

_notes:_ choose a new/empty private folder outside this repo. `raw/`: upstream export. `notes/`: markdown/images. `report.json`: skips/errors. preserves `date` and `last_modified`; drawings get `kind: doodle`. `--since`: year, year-month, or year-month-day, inclusive, using creation dates unless `--since-field modified`. raw includes all accessible notes; locked notes/non-image attachments are excluded.

```sh
# for example:
npm run import:photos -- "/path/to/Photos exports" --dry-run
npm run import:photos -- "/path/to/Photos exports"
npm run import:photos -- "/path/to/Photos exports" --photoset "one set" --library "/path/to/Photos Library.photoslibrary"
```

_photos:_ keep original filenames. new photos form six-hour groups; `--photoset` keeps a folder together. output: `content/_posts/` and `content/media/`, grouped by year. timestamp fallbacks warn and set `needs_review: true`; file creation time may be the export date. bad files are skipped; `--dry-run` writes nothing. captions/tags/cached place names become public; gps is stripped, missing names reported, no network lookup. reruns/exact standalone-image duplicates are skipped; resized/recompressed copies may not match. dry runs do not check converted-image duplicates.

```sh
npm run convert:webp -- --dry-run
npm run convert:webp
```

_webp:_ max 4096px, quality 90; gifs stay unchanged.

```sh
npm run update:dates -- --dry-run
npm run update:dates
```

_dates:_ repairs git-diff date edits; keeps `needs_review`.

---

made with 💖 in NYC
