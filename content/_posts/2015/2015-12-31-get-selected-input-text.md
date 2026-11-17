---
kind: "code"
title: "get selected input text"
date: "2015-12-31T08:58:47.000Z"
date_precision: "second"
description: "a button reports the selected part of a text area, or lets you know when nothing is selected."
source: "https://jsfiddle.net/edwardsharp/2qhz43eo/"
tags: ["jsfiddle","code","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-get-selected-input-text-demo.html' | relative_url }}" title="get selected input text" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<textarea id="test" rows="10" cols="50">Some text, yo!</textarea>
<br />
<input
  type="button"
  onmousedown="alert(isTextSelected(document.getElementById('test')))"
  value="What's Selected?"
/>
```

## javascript

```javascript
function isTextSelected(input) {
  if (typeof input.selectionStart == "number") {
    if (input.selectionEnd - input.selectionStart > 0) {
      var text = input.value;
      return text.substring(input.selectionStart, input.selectionEnd);
    } else {
      return "N0THING!";
    }
  }
  //else if (typeof document.selection != "undefined") {
  //    input.focus();
  //    return document.selection.createRange().text == input.value;
  //}
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/2qhz43eo/)
