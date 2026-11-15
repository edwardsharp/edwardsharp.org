---
title: "ribbon corner"
description: "a diagonal css ribbon sits across the corner of the window."
date: "2016-08-26T07:08:55.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-uybhz0dm/"
source_id: "uybhz0dm"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/uybhz0dm/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-08-26-jsfiddle-uybhz0dm-demo.html' | relative_url }}" title="ribbon corner" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div class="corner-ribbon bottom-right sticky ornage shadow">Ribbon!</div>
```

## css

```css
/* The ribbons */

.corner-ribbon {
  width: 200px;
  background: #e43;
  position: absolute;
  top: 25px;
  left: -50px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Custom styles */

.corner-ribbon.sticky {
  position: fixed;
}

.corner-ribbon.shadow {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

/* Different positions */

.corner-ribbon.top-left {
  top: 25px;
  left: -50px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.corner-ribbon.top-right {
  top: 25px;
  right: -50px;
  left: auto;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.corner-ribbon.bottom-left {
  top: auto;
  bottom: 25px;
  left: -50px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.corner-ribbon.bottom-right {
  top: auto;
  right: -50px;
  bottom: 25px;
  left: auto;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Colors */

.corner-ribbon.white {
  background: #f0f0f0;
  color: #555;
}

.corner-ribbon.black {
  background: #333;
}

.corner-ribbon.grey {
  background: #999;
}

.corner-ribbon.blue {
  background: #39d;
}

.corner-ribbon.green {
  background: #2c7;
}

.corner-ribbon.turquoise {
  background: #1b9;
}

.corner-ribbon.purple {
  background: #95b;
}

.corner-ribbon.red {
  background: #e43;
}

.corner-ribbon.orange {
  background: #e82;
}

.corner-ribbon.yellow {
  background: #ec0;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/uybhz0dm/)
