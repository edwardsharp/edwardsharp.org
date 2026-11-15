---
title: "sortable portlet2"
description: "another sortable dashboard layout, with connected columns and collapsible panel bodies."
date: "2015-12-31T11:22:07.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-pom38hr7/"
source_id: "pom38hr7"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/pom38hr7/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-31-jsfiddle-pom38hr7-demo.html' | relative_url }}" title="sortable portlet2" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div class="column">
  <div class="portlet">
    <div class="portlet-header">Feeds</div>
    <div class="portlet-content">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    </div>
  </div>

  <div class="portlet">
    <div class="portlet-header">News</div>
    <div class="portlet-content">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    </div>
  </div>
</div>

<div class="column">
  <div class="portlet">
    <div class="portlet-header">Shopping</div>
    <div class="portlet-content">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    </div>
  </div>
</div>

<div class="column">
  <div class="portlet">
    <div class="portlet-header">Links</div>
    <div class="portlet-content">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    </div>
  </div>

  <div class="portlet">
    <div class="portlet-header">Images</div>
    <div class="portlet-content">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit
    </div>
  </div>
</div>
```

## css

```css
body {
  min-width: 520px;
}
.column {
  width: 170px;
  float: left;
  padding-bottom: 100px;
}
.portlet {
  margin: 0 1em 1em 0;
  padding: 0.3em;
}
.portlet-header {
  padding: 0.2em 0.3em;
  margin-bottom: 0.5em;
  position: relative;
}
.portlet-toggle {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -8px;
}
.portlet-content {
  padding: 0.4em;
}
.portlet-placeholder {
  border: 1px dotted black;
  margin: 0 1em 1em 0;
  height: 50px;
}
```

## javascript

```javascript
$(function () {
  $(".column").sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    placeholder: "portlet-placeholder ui-corner-all",
  });

  $(".portlet")
    .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
    .find(".portlet-header")
    .addClass("ui-widget-header ui-corner-all")
    .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $(".portlet-toggle").click(function () {
    var icon = $(this);
    icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
    icon.closest(".portlet").find(".portlet-content").toggle();
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/pom38hr7/)
