# edwardsharp.org

a Jekyll blog using Ruby and Bundler

## develop

```sh
bundle install
./run-dev.sh
```

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

## source

- `content/_pages/`: pages; `content/_posts/YYYY-MM-DD-slug.md`: posts.
- `src/`: layouts, includes, styles, and assets.
- self-hosted Fraunces: headings at 100, bold at 800; license in `src/assets/fonts/OFL.txt`.
- magenta/pink palettes follow system preference; dark background is pure black.
