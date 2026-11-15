---
title: "3sort"
description: "three separate jquery sortable lists let their items be rearranged in place."
date: "2015-12-31T11:21:34.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-1avput9h/"
source_id: "1avput9h"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/1avput9h/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-jsfiddle-1avput9h-demo.html' | relative_url }}" title="3sort" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<ul id="sortable1">
  <li class="ui-state-default">Item 3</li>
  <li class="ui-state-default">Item 4</li>
  <li class="ui-state-default">Item 5</li>
</ul>

<ul id="sortable2">
  <li class="ui-state-highlight">Item A</li>
  <li class="ui-state-highlight">Item B</li>
  <li class="ui-state-highlight">Item C</li>
</ul>

<ul id="sortable3" class="droptrue">
  <li class="ui-state-highlight">Item 31</li>
  <li class="ui-state-highlight">Item 32</li>
  <li class="ui-state-highlight">Item 33</li>
</ul>

<br style="clear: both" />
```

## css

```css
#sortable1,
#sortable2,
#sortable3 {
  list-style-type: none;
  margin: 0;
  float: left;
  margin-right: 10px;
  background: #eee;
  padding: 5px;
  width: 143px;
}

#sortable1 li,
#sortable2 li,
#sortable3 li {
  margin: 5px;
  padding: 5px;
  font-size: 1.2em;
  width: 120px;
}
```

## javascript

```javascript
$(function () {
  $("ul#sortable1").sortable({});

  $("ul#sortable2").sortable({});

  $("ul#sortable3").sortable({});
  $("#sortable1, #sortable2, #sortable3").disableSelection();
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/1avput9h/)
