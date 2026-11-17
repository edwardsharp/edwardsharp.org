---
kind: "code"
title: "Default jQEditRangeSlider"
date: "2013-01-20T05:31:48.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/dL7A9/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-01-20-default-jqeditrangeslider-demo.html' | relative_url }}" title="Default jQEditRangeSlider" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

If you want to reproduce bugs on editRangeSlider !

## html

```html
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderMouseTouch.js"></script>
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderDraggable.js"></script>
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderBar.js"></script>
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderHandle.js"></script>
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQRangeSliderLabel.js"></script>
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQEditRangeSliderLabel.js"></script>
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQRangeSlider.js"></script>
<script src="//raw.github.com/ghusse/jQRangeSlider/master/jQEditRangeSlider.js"></script>
<link
  rel="stylesheet"
  href="//raw.github.com/ghusse/jQRangeSlider/master/css/iThing.css"
/>
<article style="padding: 50px">
  <div id="slider"></div>
  <div id="slider02"></div>
  <div id="slider03"></div>
</article>
```

## css

```css
/**
 * Theme for jQRangeSlider
 * Inspired by http://cssdeck.com/item/381/itunes-10-storage-bar
 *        and http://cssdeck.com/item/276/pure-css-arrow-with-border-tooltip
 */

.ui-rangeSlider-withArrows .ui-rangeSlider-container {
  margin: 0 15px;
  -webkit-box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
  box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
}

.ui-rangeSlider-noArrow .ui-rangeSlider-container {
  -moz-border-radius: 4px;
  border-radius: 4px;
  border-left: solid 1px #515862;
  border-right: solid 1px #515862;

  -webkit-box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
  box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
}

.ui-rangeSlider-container {
  height: 30px;
  border-top: solid 1px #232a32;
  border-bottom: solid 1px #6a7179;
  background: #67707f;
  background: -moz-linear-gradient(top, #67707f 0%, #888da0 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #67707f),
    color-stop(100%, #888da0)
  );
}

.ui-rangeSlider-arrow {
  width: 14px;
  height: 30px;
  border-top: solid 1px #232a32;
  border-bottom: solid 1px #6a7179;
  background: #67707f;
  cursor: pointer;

  box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
  -webkit-box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0px 4px 6px -2px RGBA(0, 0, 0, 0.5);
  background: -moz-linear-gradient(top, #67707f 0%, #888da0 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #67707f),
    color-stop(100%, #888da0)
  );
}

.ui-rangeSlider-leftArrow {
  border-radius: 4px 0 0 4px;
  border-left: solid 1px #515862;
}

.ui-rangeSlider-rightArrow {
  border-radius: 0 4px 4px 0;
  border-right: solid 1px #515862;
}

.ui-rangeSlider-arrow-inner {
  position: absolute;
  top: 50%;
  border: 10px solid transparent;
  width: 0;
  height: 0;

  margin-top: -10px;
}

.ui-rangeSlider-leftArrow .ui-rangeSlider-arrow-inner {
  border-right: 10px solid #a4a8b7;
  left: 0;
  margin-left: -8px;
}

.ui-rangeSlider-leftArrow:hover .ui-rangeSlider-arrow-inner {
  border-right: 10px solid #b3b6c2;
}

.ui-rangeSlider-rightArrow .ui-rangeSlider-arrow-inner {
  border-left: 10px solid #a4a8b7;
  right: 0;
  margin-right: -8px;
}

.ui-rangeSlider-rightArrow:hover .ui-rangeSlider-arrow-inner {
  border-left: 10px solid #b3b6c2;
}

.ui-rangeSlider-innerBar {
  width: 110%;
  height: 100%;
  left: -10px;
}

.ui-rangeSlider-bar {
  background: #68a1d6;
  height: 29px;
  margin: 1px 0;
  -moz-border-radius: 4px;
  border-radius: 4px;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;

  -webkit-box-shadow: inset 0 2px 6px RGBA(0, 0, 0, 0.5);
  -moz-box-shadow: inset 0 2px 6px RGBA(0, 0, 0, 0.5);
  box-shadow: inset 0 2px 6px RGBA(0, 0, 0, 0.5);
}

.ui-rangeSlider-handle {
  width: 10px;
  height: 30px;
  background: transparent;
  cursor: col-resize;
}

.ui-rangeSlider-label {
  background: #888da0;
  background: -moz-linear-gradient(top, #67707f 0%, #888da0 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #67707f),
    color-stop(100%, #888da0)
  );
  padding: 5px 10px;
  bottom: 10px;

  -moz-border-radius: 4px;
  border-radius: 4px;

  -webkit-box-shadow: 0px 1px 0px #c2c5d6;
  -moz-box-shadow: 0px 1px 0px #c2c5d6;
  box-shadow: 0px 1px 0px #c2c5d6;

  color: white;
  font-size: 15px;

  cursor: col-resize;
}

.ui-editRangeSlider .ui-rangeSlider-label {
}

.ui-rangeSlider-label-inner {
  position: absolute;
  top: 100%;
  left: 50%;
  display: block;
  z-index: 99;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;

  margin-left: -10px;
  border-top: 10px solid #888da0;
}

.ui-editRangeSlider-inputValue {
  width: 2em;
  text-align: center;
  font-size: 15px;
}
```

## javascript

```javascript
$("#slider").rangeSlider({});
$("#slider02").editRangeSlider({});

$("#slider03").editRangeSlider({});

$("#slider").rangeSlider({
  bounds: { min: 0, max: 100 },
});
// Change options after slider creation
$("#slider").rangeSlider("option", "bounds", { min: 10, max: 90 });
// Get option value
var bounds = $("#slider").rangeSlider("option", "bounds", { min: 60, max: 70 });
// Set date option
$("#dateSlider").dateRangeSlider("option", "bounds", {
  min: new Date(2012, 0, 1),
  max: new Date(2012, 11, 31),
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/dL7A9/)
