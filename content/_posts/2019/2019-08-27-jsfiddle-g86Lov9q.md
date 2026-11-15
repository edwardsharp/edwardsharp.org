---
title: "finding an object with reduce"
description: "a small array-reduce experiment that picks out an object with a matching property."
date: "2019-08-27T18:34:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","javascript"]
permalink: "/post/jsfiddle-g86Lov9q/"
source_id: "g86Lov9q"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/g86Lov9q/1/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2019/2019-08-27-jsfiddle-g86Lov9q-demo.html' | relative_url }}" title="jsfiddle / g86Lov9q" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## javascript

```javascript
log = (msg) => {
  document.body.innerHTML += `<pre>${msg}</pre>`;
};

foo = ["zomg", 666, { zork: "beep" }];

out = foo.reduce((acc, val) => {
  if (val.zork && val.zork === "beep") {
    return val;
  }
});
log(out);
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/g86Lov9q/1/)
