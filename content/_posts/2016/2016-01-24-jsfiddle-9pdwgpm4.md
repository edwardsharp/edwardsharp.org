---
title: "drag-to-paint boxes"
description: "a row of small boxes turns green as the pointer crosses them with the mouse button held down."
date: "2016-01-24T05:23:23.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-9pdwgpm4/"
source_id: "9pdwgpm4"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9pdwgpm4/"
source_revision: 0
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-01-24-jsfiddle-9pdwgpm4-demo.html' | relative_url }}" title="jsfiddle / 9pdwgpm4" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<body>
  <div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</body>
```

## css

```css
div {
  width: 500px;
  height: 50px;
}

div div {
  width: 50px;
  height: 50px;
  outline: 1px solid;
  float: left;
}
```

## javascript

```javascript
var box;
var boxArray;
boxArray = [];

box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++)
  (function (i) {
    box[i].onmousemove = function (e) {
      if (e.buttons == 1) box[i].style.backgroundColor = "green";
    };
  })(i);
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/9pdwgpm4/)
