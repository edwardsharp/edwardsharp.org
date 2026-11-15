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

## source

- `content/_pages/`: pages; `content/_posts/`: dated Markdown posts.
- media matches the post filename, with `-01`, `-02`, etc. for sets; metadata uses `kind`, `source_id`, and `source_url`.
- `src/`: layouts, includes, styles, and assets.
- TypeScript feed, no React; `npm test`, `npm run format`, `npm run format:check`.
- archive: Lunr searches posts and pages; `searchable: false` excludes utility pages.
- journal: 24-post batches, type/tag filters, and two-wide phone honeycomb; RSS summaries at `/feed.xml`.
- rebuild after TypeScript edits; preview metadata uses `preview_title`, `preview_image`, and `preview_alt`.
- self-hosted Fraunces: headings at 100, bold at 800; license in `src/assets/fonts/OFL.txt`.
- grayscale text, magenta accents, system-matched themes, and a pure-black dark background.
- Tumblr preview: 8 posts, 5 local images, corrected dates, and old URL redirects; full import pending.
