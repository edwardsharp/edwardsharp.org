---
title: "jQuery UI slider theming customization"
date: "2013-01-20T05:36:57.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-RVdFj/"
source_id: "RVdFj"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/RVdFj/"
source_revision: 0
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-01-20-jsfiddle-RVdFj-demo.html' | relative_url }}" title="jQuery UI slider theming customization" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

http://forum.jquery.com/topic/ui-slider-interface-for-ui-horizontal-range-slider-does-not-make-sense

## html

```html
<link
  rel="stylesheet"
  href="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/themes/base/jquery-ui.css"
/>
<br />

<div class="default">
  <div class="slider"></div>
</div>
```

## css

```css
body {
  font:
    62.5% Verdana,
    Arial,
    sans-serif;
}
.default,
.alt {
  margin: 1em;
  padding: 1em;
}
.a .ui-slider {
  border-radius: 0;
}
.a .ui-slider-handle {
  border-radius: 0;
}
.b .ui-slider {
  border-radius: 0;
  height: 1.1em;
}
.b .ui-slider-handle {
  border-radius: 0;
  top: 0.1em;
  height: 0.75em;
}
.c .ui-slider {
  border-radius: 2px;
}
.c .ui-slider-handle {
  border-radius: 4px;
  width: 0.4em;
  margin-left: -0.2em;
}
.d .ui-slider {
  height: 0.3em;
  border-radius: 10px;
}
.d .ui-slider-handle {
  height: 1em;
  top: -0.45em;
  border-radius: 0.5em;
  width: 1em;
  margin-left: -0.5em;
}
.e .ui-slider {
  border-radius: 2px;
  height: 0.3em;
}
.e .ui-slider-handle {
  height: 1.4em;
  top: -0.55em;
  border-radius: 0 0 16px 16px;
  width: 0.7em;
  margin-left: -0.35em;
}

.dafuq {
  top: -15px;
  position: absolute;
}
```

## javascript

```javascript
$(".slider").slider({
  min: -40,
  max: 100,
  values: [-40, 15, 35, 55, 75, 100],
  step: 5,
  slide: function (event, ui) {
    if (
      ui.handle.children[0].id == "sliderLabel0" ||
      ui.handle.children[0].id == "sliderLabel5"
    ) {
      return false;
    }
    updateSliderLabels(ui.values);
  },
});

function createSliderLabels() {
  var sliders = $(".ui-slider-handle");
  for (i = 0; i < sliders.length; i++) {
    $(".ui-slider-handle")
      .eq(i)
      .html("<div class='dafuq' id='sliderLabel" + i + "' ><div>");
  }
}

function updateSliderLabels(values) {
  var sliders = $(".ui-slider-handle");
  for (i = 0; i < sliders.length; i++) {
    $("#sliderLabel" + i).html(values[i]);
    //$("#sliderLabel"+i).html($(".slider").slider("values")[i]);
  }
}

createSliderLabels();
updateSliderLabels($(".slider").slider("values"));
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/RVdFj/)
