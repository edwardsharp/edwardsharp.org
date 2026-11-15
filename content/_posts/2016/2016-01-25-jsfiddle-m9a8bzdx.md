---
title: "multi selectable"
date: "2016-01-25T05:32:56.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-m9a8bzdx/"
source_id: "m9a8bzdx"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/m9a8bzdx/6/"
source_revision: 6
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-01-25-jsfiddle-m9a8bzdx-demo.html' | relative_url }}" title="multi selectable" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

clever twist on a jQuery favourite

## html

```html
<script src="//code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
<link
  rel="stylesheet"
  href="//code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"
/>
<div>
  <ul class="itemlist">
    <li class="item" data-time="12:00p">
      12
      <div class="inner"></div>
    </li>
    <li class="item unavailable" data-time="12:30p">
      :30
      <div class="inner"></div>
    </li>
    <li class="item unavailable" data-time="1:00p">
      1
      <div class="inner"></div>
    </li>
    <li class="item" data-time="1:30p">
      :30
      <div class="inner"></div>
    </li>
    <li class="item" data-time="2:00p">
      2
      <div class="inner"></div>
    </li>
    <li class="item" data-time="2:30p">
      :30
      <div class="inner"></div>
    </li>
    <li class="item unavailable" data-time="3:00p">
      3
      <div class="inner"></div>
    </li>
    <li class="item unavailable" data-time="3:30p">
      :30
      <div class="inner"></div>
    </li>
    <li class="item" data-time="4:00p">
      4
      <div class="inner"></div>
    </li>
    <li class="item" data-time="4:30p">
      :30
      <div class="inner"></div>
    </li>
    <li class="item" data-time="5:00p">
      5
      <div class="inner"></div>
    </li>
    <li class="item" data-time="5:30p">
      :30
      <div class="inner"></div>
    </li>
    <li class="item" data-time="6:00p">
      6
      <div class="inner"></div>
    </li>
    <li class="item" data-time="6:30p">
      :30
      <div class="inner"></div>
    </li>
    <li class="item" data-time="7:00p">
      7
      <div class="inner"></div>
    </li>
  </ul>
</div>

<p id="feedback">
  <span>You've selected:</span> <span id="select-result">nothing yet</span>.
</p>
```

## css

```css
.itemlist {
  width: 550px;
  height: 100px;
  background: #f7f7f7;
  overflow: scroll;
}

.item {
  color: #fff;
  height: 30px;
  width: 25px;
  background: #12a6eb;
  margin: 5px;
  float: left;
  text-align: center;
}

.unavailable {
  background: #ddd;
}

.fmgrRubberBand {
  position: absolute;
  background: rgba(255, 250, 245, 0.5);
  border: 3px solid #ccc;
}

.inner {
  background-color: #f2f2f2;
  color: green;
  width: 50%;
  margin: 0px auto;
  padding: 2px;
}

.ui-selected {
  background-color: orange !important;
}
```

## javascript

```javascript
$(".itemlist")
  .bind("mousedown", function (e) {
    e.metaKey = true;
  })
  .selectable({
    filter: "li:not('.unavailable')",
    stop: function (event, ui) {
      $(".ui-selected", this).addClass("ui-selected");

      var result = $("#select-result").empty();
      selectedTimes = $(".ui-selected", this);
      var selectedArr = [];
      selectedTimes.each(function () {
        selectedArr.push(selectedTimes.index(this));
      });

      var min = Math.min.apply(null, selectedArr),
        max = Math.max.apply(null, selectedArr);
      console.log(min, max, selectedArr);
      if (selectedArr.length > 0) {
        result.append(
          selectedTimes.eq(min).data("time") +
            " - " +
            selectedTimes.eq(max).data("time"),
        );
      } else {
        result.append("nothing yet");
      }
    },
  });
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/m9a8bzdx/6/)
