---
title: "outlined text"
description: "large letters lose their fill and keep a thin white outline against black."
date: "2016-10-22T08:21:00.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-a8greenx/"
source_id: "a8greenx"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/a8greenx/"
source_revision: 3
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-10-22-jsfiddle-a8greenx-demo.html' | relative_url }}" title="jsfiddle / a8greenx" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div class="outline">FOOBAR</div>
```

## css

```css
body {
  background: black;
}
.outline {
  font-size: 5em;
  font-family: avenir;
  font-weight: bold;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/a8greenx/)
