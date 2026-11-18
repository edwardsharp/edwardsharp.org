---
kind: "code"
title: "peedeeeff"
date: "2025-06-24T23:17:36.000Z"
date_precision: "second"
preview_image: "/content/media/2025/2025-06-24-peedeeeff-readme-image-1.webp"
location_name: "nyc"
source: "https://github.com/edwardsharp/peedeeeff"
render_with_liquid: false
preview_alt: "P E E  D E E  E F F"
tags: ["web-components", "javascript", "zinez"]
---

**DEMO:** [edwardsharp.github.io/peedeeeff/](https://edwardsharp.github.io/peedeeeff/)

just a lil' pdf -> webp converter & carousel web-component for viewing!

![P E E  D E E  E F F](/content/media/2025/2025-06-24-peedeeeff-readme-image-1.webp)

## quickstart

open `index.html` in your browser! get a handle on the different view options by fiddle'n with the controlz.

### gen your own

```sh
./pdf2webp.sh path/to/some.pdf
```

now there should be .webp files in `gen/` (one for each page of yr pdf).

edit `really-simple.html` and change the `base-path="gen/whatever-folder-of-webp-images"`

note: .webp images need to follow format `page-000.web` (where 000 is the page number).

if u wanna use this, copy `pee-dee-eff.js` to where ever you host yr other stuff. then on whatever page include the web-component tag and a `<script />` (u could just copy/paste pee-dee-eff.js and inline it in a `<script>` on yr page) like:

```html
<pee-dee-eff
  base-path="example/undoinganddoing"
  pages-per-view="4"
  direction="horizontal"
  loop="true"
  first-last-single="false"
  background="black"
>
</pee-dee-eff>

<script src="pee-dee-eff.js"></script>
```

### web component props

| attribute               | type      | options / example values          | default        | required | description                                                                              |
| ----------------------- | --------- | --------------------------------- | -------------- | -------- | ---------------------------------------------------------------------------------------- |
| `base-path`             | `string`  | `"./examples/undoinganddoing"`    | `"."`          | yes      | directory where image files like `page-000.webp`, `page-001.webp`, etc. are loaded from. |
| `pages-per-view`        | `number`  | `1`, `2`, `4`, `6`, etc.          | `2`            | no       | number of images shown per slide. determines the grid layout automatically.              |
| `direction`             | `string`  | `"horizontal"`, `"vertical"`      | `"horizontal"` | no       | chooses between swipe-to-slide and scroll-down-to-browse modes.                          |
| `loop`                  | `boolean` | `"true"`                          | `false`        | no       | whether to loop back to the first slide after the last one, and vice versa.              |
| `first-last-single`     | `boolean` | `"true"`                          | `false`        | no       | shows first and last pages on a single slide (only with pages-per-view=2).               |
| `wheel-navigation`      | `boolean` | `"true"`, `"false"`               | `"true"`       | no       | enables mouse wheel and trackpad scrolling for page navigation.                          |
| `background`            | `string`  | `"white"`, `"#eeddee"`, `"black"` | `"white"`      | no       | background color of each image cell in the grid.                                         |
| `narrow-breakpoint`     | `number`  | `640`, `768`                      | —              | no       | viewport width (px) below which `narrow-pages-per-view` kicks in. no-op if omitted.      |
| `narrow-pages-per-view` | `number`  | `1`, `2`                          | `1`            | no       | `pages-per-view` to use when the viewport is narrower than `narrow-breakpoint`.          |
| `fullscreen-z-index`    | `number`  | `9999`, `100`                     | `9999`         | no       | z-index applied to the component when in fullscreen mode.                                |
| `nav-hide-after-ms`     | `number`  | `2000`, `5000`                    | `3000`         | no       | milliseconds of inactivity before the prev/next nav buttons fade out.                    |
| `overlay-hide-after-ms` | `number`  | `1000`, `2000`                    | `1234`         | no       | milliseconds of inactivity before the fullscreen button and pagination slot fade out.    |

### web component slots

#### pagination

want to show current and (or) total pages? add a slot as children and apply styles as you wish.

```html
<pee-dee-eff
  base-path="example/test-even"
  pages-per-view="2"
  first-last-single="true"
>
  <div class="pagination" slot="pagination">
    <span id="currentPages">?</span> /
    <span id="totalPages">?</span>
  </div>
</pee-dee-eff>
```

see also: [test-pagination.html](https://github.com/edwardsharp/peedeeeff/blob/main/test-pagination.html)

#### fullscreen button

a fullscreen toggle button (expand/compress icons) is built into the component and appears in the top-right corner by default. all four sides are exposed as CSS custom properties — to reposition it, set the sides you want and clear the opposite sides with `auto`:

```css
/* default: top-right */
pee-dee-eff {
  --fullscreen-btn-top: 0.5rem;
  --fullscreen-btn-right: 0.5rem;
}

/* bottom-left example */
pee-dee-eff {
  --fullscreen-btn-top: auto;
  --fullscreen-btn-right: auto;
  --fullscreen-btn-bottom: 0.5rem;
  --fullscreen-btn-left: 0.5rem;
}
```

you can also replace the icon content by providing a `slot="fullscreen-icon"` child:

```html
<pee-dee-eff base-path="example/undoinganddoing">
  <span slot="fullscreen-icon">⛶</span>
</pee-dee-eff>
```

### pwa && cache

- web app Mmanifest for "Add to Home Screen" support
- offline-first image loading with network fallback
- background caching of images as they load

### generating icons & favicon

a lil' icon generator:

1. open `generate-icons.html`
2. open `generate-favicon.html`
3. download png and favicon! 🥹

---

made with 💖 in nyc
