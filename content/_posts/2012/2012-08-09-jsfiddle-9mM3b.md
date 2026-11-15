---
title: "a popcorn video sequence"
description: "popcorn.js joins short video excerpts into a sequence with a timed footnote and callback."
date: "2012-08-09T06:13:29.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-9mM3b/"
source_id: "9mM3b"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9mM3b/"
source_revision: 0
---

<iframe class="code-demo" src="{{ '/content/media/2012/2012-08-09-jsfiddle-9mM3b-demo.html' | relative_url }}" title="jsfiddle / 9mM3b" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//popcornjs.org/code/dist/popcorn-complete.js"></script>
<div id="container-id"></div>
<div id="foo"></div>
```

## javascript

```javascript
// create our sequence
var sequence = Popcorn.sequence("container-id", [
  {
    src: "//videos.mozilla.org/serv/webmademovies/atultroll.webm",
    in: 0,
    out: 3,
  },
  {
    src: "//videos.mozilla.org/serv/webmademovies/justintime.ogv",
    in: 174,
    out: 180,
  },
  {
    src: "//videos.mozilla.org/serv/webmademovies/popcornplug.ogv",
    in: 0,
    out: 6,
  },
]);

// play popcorn
sequence.play();

sequence.footnote({
  start: 0,
  end: 2,
  text: "footnote",
  target: "foo",
});

// get popcorn object of first video
console.log(sequence.eq(0));

//exec something at 4 seconds
sequence.exec(4, function () {
  console.log("AT 4 SECONDS");
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/9mM3b/)
