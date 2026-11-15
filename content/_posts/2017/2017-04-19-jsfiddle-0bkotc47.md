---
title: "pre-line!"
date: "2017-04-19T12:33:02.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-0bkotc47/"
source_id: "0bkotc47"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/0bkotc47/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-19-jsfiddle-0bkotc47-demo.html' | relative_url }}" title="pre-line!" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

so without, all text will ignore newlines between tags, however, it will add new-lines to text if there is not enough screen width for the whole line of text, so what what-space: pre-line; does it the usual when wrapping because of width, but also respects new lines between the tags.

## html

```html
<div id="font0" class="font"></div>
<br />
<div id="font1" class="font"></div>
<br />
<div id="font2" class="font"></div>
<br />
<div id="font3" class="font"></div>
<br />
<div id="font4" class="font"></div>
<br />
<div id="font5" class="font"></div>
<br />
<div id="font6" class="font"></div>
```

## css

```css
@import url("//fonts.googleapis.com/css?family=Gloria+Hallelujah|Lobster|Merriweather+Sans|Permanent+Marker|Roboto+Mono|Shrikhand");
.font {
  font-size: 2em;
  line-height: 1em;
  white-space: pre-line;
}

#font0 {
  font-family: "Roboto Mono", monospace;
}

#font1 {
  font-family: "Lobster", cursive;
}

#font2 {
  font-family: "Shrikhand", cursive;
}

#font3 {
  font-family: "Merriweather Sans", sans-serif;
}

#font4 {
  font-family: "Gloria Hallelujah", cursive;
}

#font5 {
  font-family: "Permanent Marker", cursive;
}

#font6 {
  font-family: cursive;
}
```

## javascript

```javascript
/*
 *  ( •_•)>⌐■-■
 *  (⌐■_■)
 */

var txt =
  "CUSTOM SCREEN PRINTING" +
  "&amp; PRE-PRESS SERVICES" +
  "5040 SE MILWAUKIE AVE." +
  "PORTLAND, OR 97202";

for (var i = 0; i < 7; i++) {
  var _elem = document.getElementById("font" + i);
  _elem.innerHTML = txt;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/0bkotc47/)
