---
title: "cross"
date: "2016-10-22T07:27:52.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-9kdkxst1/"
source_id: "9kdkxst1"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9kdkxst1/"
source_revision: 0
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-10-22-jsfiddle-9kdkxst1-demo.html' | relative_url }}" title="cross" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

+

## html

```html
<div></div>
```

## css

```css
div {
  width: 280px;
  height: 280px;
  background: white;
  -webkit-clip-path: polygon(
    0 45%,
    45% 45%,
    45% 0,
    55% 0,
    55% 45%,
    100% 45%,
    100% 55%,
    55% 55%,
    55% 100%,
    45% 100%,
    45% 55%,
    0 55%
  );
  clip-path: polygon(
    0 45%,
    45% 45%,
    45% 0,
    55% 0,
    55% 45%,
    100% 45%,
    100% 55%,
    55% 55%,
    55% 100%,
    45% 100%,
    45% 55%,
    0 55%
  );
}

/* Center the demo */
html,
body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/9kdkxst1/)
