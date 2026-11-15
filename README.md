# edwardsharp.org

a Jekyll blog with a virtualized honeycomb feed; Node.js 22.18+.

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

`npm run import:social -- capture.json report.json` accepts normalized `SocialPost[]` records (see [the importer](src/ts/import-social.ts)).

imports are append-only: existing posts and their media are left alone. commit `src/ts/social-import-history.jsonl` with imported content; its source IDs prevent renamed or deleted posts from being reimported. unavailable images leave an inline notice; the rest of the post remains readable.

---

made with 💖 in NYC
