---
kind: "code"
title: "tiny lil'carousel"
date: "2020-10-11T02:52:30.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/pm1a0hq9/38/"
tags: ["jsfiddle","code","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2020/2020-10-10-tiny-lil-carousel-demo.html' | relative_url }}" title="tiny lil'carousel" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

checkitout! just a little prototype that uses tiny-slider ([http://ganlanyuan.github.io/tiny-slider](http://ganlanyuan.github.io/tiny-slider)) lib to make a mouse/keyboard friendly full window (fullscreen) carousel slider thingy. see: [https://jsfiddle.net/edwardsharp/pm1a0hq9/show](https://jsfiddle.net/edwardsharp/pm1a0hq9/show)

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
      src="../2026/2026-03-20-photo.webp"
      width="1284"
      height="1989"
      alt="a cat cutout on a black background"
    />
  </div>
  <div class="item">
    <img
      src="../2026/2026-10-06-hello-world.webp"
      width="4032"
      height="3024"
      alt="hello world printed on a small paper roll"
    />
  </div>
  <div class="item">
    <img
      src="../2026/2026-10-10-coming-soon.webp"
      width="4032"
      height="3024"
      alt="a spirit halloween coming soon banner on a city street"
    />
  </div>
  <div class="item">
    <img
      src="../2026/2026-10-27-photo.webp"
      width="4032"
      height="3024"
      alt="a homemade electronic instrument with a knob and display"
    />
  </div>
  <div class="item">
    <img
      src="../2026/2026-10-30-fuzzy-fren.webp"
      width="3024"
      height="4032"
      alt="a fuzzy black caterpillar among leaves"
    />
  </div>
  <div class="item">
    <img
      src="../2026/2026-11-03-freqh6le.webp"
      width="4032"
      height="3024"
      alt="a raspberry pi in a pink case with a green knob"
    />
  </div>
  <div class="item">
    <img
      src="../2026/2026-11-07-apc.webp"
      width="4096"
      height="3072"
      alt="a circular mark on a sidewalk beside fallen leaves"
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
