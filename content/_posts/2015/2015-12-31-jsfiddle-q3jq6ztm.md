---
title: "tubeslide"
description: "a sideways strip of sortable cards grows one letter at a time and scrolls to each new card."
date: "2015-12-31T10:46:55.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-q3jq6ztm/"
source_id: "q3jq6ztm"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/q3jq6ztm/"
source_revision: 7
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-jsfiddle-q3jq6ztm-demo.html' | relative_url }}" title="tubeslide" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//cdn.jsdelivr.net/jquery.scrollto/2.1.2/jquery.scrollTo.min.js"></script>
<button id="new_elem">new elem</button>
<div id="parent" class="parent">
  <div id="list" class="list">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
    <div class="item">E</div>
  </div>
</div>
```

## css

```css
.parent {
  width: 100%;
}

.list {
  background-color: #d0d0d0;
  color: white;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  /*text-align:left;*/
}

.item {
  background-color: #404040;
  height: 270px;
  width: 320px;
  margin: 0 4px 8px 4px;
  cursor: pointer;
  display: inline-block;
  /*float:left;*/
  /*float:none;*/
  /*clear:both;*/
}

.placeholder {
  height: 270px;
  width: 60px;
  display: inline-block;
  margin: 10px;
  background-color: yellow;
}
```

## javascript

```javascript
function nextLetter() {
  s = $("#list .item").last().html();
  return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
    var c = a.charCodeAt(0);
    switch (c) {
      case 90:
        return "A";
      case 122:
        return "a";
      default:
        return String.fromCharCode(++c);
    }
  });
}

$(function () {
  $("#list")
    .disableSelection()
    .sortable({
      scroll: true,
      placeholder: "placeholder",
      start: function (event, ui) {
        ui.placeholder.html("&nbsp;");
      },
      axis: "x",
    });

  $("#new_elem").click(function () {
    $("<div/>", {
      class: "item",
      text: nextLetter(),
    }).appendTo("#list");
    $("#list").sortable("refresh");
    $("#list").scrollTo($("#list .item").last(), 800);
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/q3jq6ztm/)
