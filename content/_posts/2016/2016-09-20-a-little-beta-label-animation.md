---
kind: "code"
title: "a little beta-label animation"
date: "2016-09-20T07:23:26.000Z"
date_precision: "second"
description: "a beta label flips into place beside a site name when the page is marked as loaded."
source: "https://jsfiddle.net/edwardsharp/u0dg6cwt/1/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-20-a-little-beta-label-animation-demo.html' | relative_url }}" title="jsfiddle / u0dg6cwt" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div id="navbar-header">
  <small id="sched-beta"><i>beta</i></small>
  <a class="navbar-brand" href="/">Sched</a>
</div>
```

## css

```css
#sched-beta {
  float: left;
  margin-top: 25px;
  position: relative;
  left: 56px;
}

#sched-beta {
  -webkit-transform-origin: 50% 0%;
  -o-transform-origin: 50% 0%;
  transform-origin: 50% 0%;
  -webkit-transform: perspective(350px) rotateX(-90deg);
  -o-transform: perspective(350px) rotateX(-90deg);
  transform: perspective(350px) rotateX(-90deg);
}

.loaded #sched-beta {
  -webkit-transform: perspective(350px) rotateX(0deg);
  -o-transform: perspective(350px) rotateX(0deg);
  transform: perspective(350px) rotateX(0deg);
  -webkit-transition: 0.5s linear 0.5s;
  -o-transition: 0.5s linear 0.5s;
  transition: 0.5s linear 0.5s;
}
```

## javascript

```javascript
$("body").addClass("loaded");
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/u0dg6cwt/1/)
