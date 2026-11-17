---
kind: "code"
title: "a sortable list with fixed headers"
date: "2013-03-18T21:42:42.000Z"
date_precision: "second"
description: "list items can be dragged around while disabled header rows stay put."
source: "https://jsfiddle.net/edwardsharp/tMzhs/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-03-18-a-sortable-list-with-fixed-headers-demo.html' | relative_url }}" title="jsfiddle / tMzhs" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<title>jQuery UI Sortable</title>
<body>
  <ul class="sortable">
    <li class="ui-state-default ui-state-disabled">
      <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Header 1
    </li>
    <li class="ui-state-default">
      <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2
    </li>
    <li class="ui-state-default">
      <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3
    </li>
    <li class="ui-state-default">
      <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 4
    </li>
    <li class="ui-state-default ui-state-disabled">
      <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Header 2
    </li>
    <li class="ui-state-default">
      <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 5
    </li>
    <li class="ui-state-default">
      <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 6
    </li>
  </ul>
</body>
```

## css

```css
.sortable {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 60%;
}
.sortable li {
  margin: 0 3px 3px 3px;
  padding: 0.4em;
  padding-left: 1.5em;
  font-size: 1.4em;
  height: 18px;
}
.sortable li span {
  position: absolute;
  margin-left: -1.3em;
}
```

## javascript

```javascript
$(function () {
  $(".sortable").sortable({
    items: "li:not(.ui-state-disabled)",
    placeholder: "ui-state-highlight",
  });
  $(".sortable").disableSelection();
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/tMzhs/)
