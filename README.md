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

- TypeScript: `src/ts/`; build: `src/ts/esbuild.config.ts`; output: `assets/site.js`.
- homepage: media opens in a lightbox; link posts go directly to their `link_url` front matter destination.
- font: `Fraunces` header/headings at 100, bold at 800; license in `src/assets/fonts/OFL.txt`.

---

made with 💖 in NYC
