---
kind: "code"
title: "diagonal stripes"
date: "2017-04-23T08:39:37.000Z"
date_precision: "second"
description: "red, gold, and green stripes run diagonally behind a circle in a simple css composition."
source: "https://jsfiddle.net/edwardsharp/7L0jrb3d/1/"
tags: ["jsfiddle","code","html","css"]
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-23-diagonal-stripes-demo.html' | relative_url }}" title="jsfiddle / 7L0jrb3d" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div class="stripeContainer">
  <div class="red stripe">&nbsp;</div>
  <div class="gold stripe">&nbsp;</div>
  <div class="green stripe">&nbsp;</div>
</div>
<div class="circle">&nbsp;</div>
```

## css

```css
.stripeContainer {
  transform: rotateZ(-45deg);
  overflow: hidden;
  position: fixed;
  z-index: 0;
  width: 200vw;
  top: 0;
  right: -200px;
}

.stripe {
  min-height: 66px;
  margin-bottom: 66px;
}

.red {
  background-color: red;
  color: white;
}

.gold {
  background-color: gold;
  color: white;
}

.green {
  background-color: seagreen;
  color: white;
}

.circle {
  box-shadow: 0 0 2px 20px black;
  background-color: black;
  border-radius: 9999px;
  -moz-border-radius: 9999px;
  -webkit-border-radius: 9999px;
  height: 300px;
  width: 300px;
  z-index: 1;
  position: fixed;
  top: 121px;
  left: 121px;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/7L0jrb3d/1/)
