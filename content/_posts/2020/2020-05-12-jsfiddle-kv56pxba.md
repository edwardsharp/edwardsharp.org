---
title: "fetching a little json"
description: "a small async fetch experiment that puts a field from a json response into the page."
date: "2020-05-12T16:40:15.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-kv56pxba/"
source_id: "kv56pxba"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/kv56pxba/6/"
source_revision: 6
---

<iframe class="code-demo" src="{{ '/content/media/2020/2020-05-12-jsfiddle-kv56pxba-demo.html' | relative_url }}" title="jsfiddle / kv56pxba" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div id="test"></div>
```

## javascript

```javascript
(async function main() {
  const data = await fetch("//echo.jsontest.com/foo/bar/baz/beep")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const test = document.getElementById("test");

  test.innerHTML = data.foo;
})();
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/kv56pxba/6/)
