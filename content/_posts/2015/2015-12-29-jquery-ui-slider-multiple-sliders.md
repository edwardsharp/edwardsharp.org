---
kind: "code"
title: "jQuery UI Slider - Multiple sliders"
date: "2015-12-29T12:28:30.000Z"
date_precision: "second"
description: "a horizontal master slider sits above a bank of vertical sliders styled like an equalizer."
source: "https://jsfiddle.net/edwardsharp/mMzmq/1/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-29-jquery-ui-slider-multiple-sliders-demo.html' | relative_url }}" title="jQuery UI Slider - Multiple sliders" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<link
  rel="stylesheet"
  href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css"
/>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

<span
  class="ui-icon ui-icon-volume-on"
  style="float: left; margin: -2px 5px 0 0"
></span>
Master volume

<div id="master" style="width: 260px; margin: 15px"></div>

<span
  class="ui-icon ui-icon-signal"
  style="float: left; margin: -2px 5px 0 0"
></span>
Graphic EQ

<div id="eq">
  <span>88</span>
  <span>77</span>
  <span>55</span>
  <span>33</span>
  <span>40</span>
  <span>45</span>
  <span>70</span>
</div>
```

## css

```css
#eq span {
  height: 120px;
  float: left;
  margin: 15px;
}
```

## javascript

```javascript
$(function () {
  // setup master volume
  $("#master").slider({
    value: 60,
    orientation: "horizontal",
    range: "min",
    animate: true,
  });
  // setup graphic EQ
  $("#eq > span").each(function () {
    // read initial values from markup and remove that
    var value = parseInt($(this).text(), 10);
    $(this).empty().slider({
      value: value,
      range: "min",
      animate: true,
      orientation: "vertical",
    });
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/mMzmq/1/)
