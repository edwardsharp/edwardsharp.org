---
title: "tiny lil'carousel"
date: "2020-10-11T02:52:30.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-pm1a0hq9/"
source_id: "pm1a0hq9"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/pm1a0hq9/38/"
source_revision: 38
---

<iframe class="code-demo" src="{{ '/content/media/2020/2020-10-11-jsfiddle-pm1a0hq9-demo.html' | relative_url }}" title="tiny lil'carousel" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

checkitout! just a little prototype that uses tiny-slider (http://ganlanyuan.github.io/tiny-slider) lib to make a mouse/keyboard friendly full window (fullscreen) carousel slider thingy. see: https://jsfiddle.net/edwardsharp/pm1a0hq9/show

## html

```html
<link
  rel="stylesheet"
  href="//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
/>
<script src="//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
<!-- <head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css">
  [if (lt IE 9)]><script src="//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.helper.ie8.js"></script><![endif]
  <script src="//cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>

</head> -->

<div class="carousel" tabindex="0">
  <div class="item">
    <img
      src="//source.unsplash.com/collection/993239/600x320"
      width="600"
      height="320"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="//source.unsplash.com/collection/1673600/500x300"
      width="500"
      height="300"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="//source.unsplash.com/collection/1513994/200x310"
      width="200"
      height="310"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="//source.unsplash.com/collection/502925/400x330"
      width="400"
      height="330"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="//source.unsplash.com/collection/1891993/640x300"
      width="640"
      height="300"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="//source.unsplash.com/collection/1103088/360x240"
      width="360"
      height="240"
      alt=""
    />
  </div>
  <div class="item">
    <img
      src="//source.unsplash.com/collection/548245/460x280"
      width="460"
      height="280"
      alt=""
    />
  </div>
</div>

<div>
  <h1>zomg</h1>
  <p>some other txt here!</p>
  <p>and yet another thing, here; wowowowowow!</p>
</div>
```

## css

```css
html,
body {
  padding: 0;
  margin: 0;
  background: black;
  color: white;
}

*:focus {
  outline: none;
}

.carousel > .item {
  width: 100vw;
  height: 100vh;
}

.carousel > .item > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

## javascript

```javascript
(function () {
  var slider = tns({
    container: ".carousel",
    items: 1,
    slideBy: "page",
    autoplay: true,
    controls: false,
    arrowKeys: true,
    mouseDrag: true,
    autoplayButtonOutput: false,
    nav: false,
  });
  var carousel = document.querySelector(".carousel");
  if (carousel) {
    carousel.focus();
  }
})();
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/pm1a0hq9/38/)
