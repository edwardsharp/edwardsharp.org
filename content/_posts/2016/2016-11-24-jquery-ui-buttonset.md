---
kind: "code"
title: "JQuery UI Buttonset"
date: "2016-11-24T16:27:37.000Z"
date_precision: "second"
description: "two radio inputs become a jquery button set, with a small check for whether it is initialized."
source: "https://jsfiddle.net/z_acharki/JME7x/44/"
tags: ["jsfiddle","code","jquery","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-11-24-jquery-ui-buttonset-demo.html' | relative_url }}" title="JQuery UI Buttonset" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<link
  rel="stylesheet"
  href="//code.jquery.com/ui/1.8.20/themes/base/jquery-ui.css"
/>
<div id="myRadio">
  <input id="first" type="radio" value="1" name="steps" /><label for="first"
    >First</label
  >
  <input id="second" type="radio" value="2" name="steps" /><label for="second"
    >Second</label
  >
</div>
```

## javascript

```javascript
$("#myRadio").buttonset();

$.fn.buttonsetIsInitialized = function () {
  return this.hasClass("ui-buttonset");
};

if ($("#myRadio").buttonsetIsInitialized()) {
  console.log("initialized: refresh");
} else {
  console.log("Not initialized");
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/z_acharki/JME7x/44/)
