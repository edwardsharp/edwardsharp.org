---
kind: "code"
title: "wrapping a selection in bbcode"
date: "2016-08-02T07:40:13.000Z"
date_precision: "second"
description: "a button wraps selected text in bbcode tags while keeping the original text selected."
source: "https://jsfiddle.net/edwardsharp/8gn5vg8h/"
tags: ["jsfiddle","code","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-08-02-wrapping-a-selection-in-bbcode-demo.html' | relative_url }}" title="jsfiddle / 8gn5vg8h" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<input type="button" id="surroundButton" value="Surround" unselectable="on" />
<div contenteditable="true" id="editor">
  Select some text in here and press the button to surround it in BBCode
</div>
```

## javascript

```javascript
function surroundSelection(textBefore, textAfter) {
  if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.rangeCount > 0) {
      var range = sel.getRangeAt(0);
      var startNode = range.startContainer,
        startOffset = range.startOffset;
      var boundaryRange = range.cloneRange();
      var startTextNode = document.createTextNode(textBefore);
      var endTextNode = document.createTextNode(textAfter);
      boundaryRange.collapse(false);
      boundaryRange.insertNode(endTextNode);
      boundaryRange.setStart(startNode, startOffset);
      boundaryRange.collapse(true);
      boundaryRange.insertNode(startTextNode);

      // Reselect the original text
      range.setStartAfter(startTextNode);
      range.setEndBefore(endTextNode);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
}

function surroundSelectionInBbcode(tagName) {
  surroundSelection("[" + tagName + "]", "[/" + tagName + "]");
}

document.getElementById("surroundButton").onclick = function () {
  document.getElementById("editor").focus();
  surroundSelectionInBbcode("b");
  return false;
};
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/8gn5vg8h/)
