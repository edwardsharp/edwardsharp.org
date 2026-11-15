---
title: "slim.js web component"
description: "a minimal slim.js custom element that renders a short greeting from its own template."
date: "2018-07-03T17:31:41.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-j78a5yre/"
source_id: "j78a5yre"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/j78a5yre/2/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-03-jsfiddle-j78a5yre-demo.html' | relative_url }}" title="slim.js web component" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/slim.js/3.3.0/Slim.min.js"></script>
<my-tag></my-tag>
```

## javascript

```javascript
Slim.tag(
  "my-tag",
  `<div>Hello, i am a custom element</div>`,
  class MyTag extends Slim {
    // your code here
  },
);
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/j78a5yre/2/)
