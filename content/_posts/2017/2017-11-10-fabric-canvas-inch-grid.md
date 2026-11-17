---
kind: "code"
title: "fabric canvas inch grid"
date: "2017-11-10T23:56:45.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/jdxfdej3/"
tags: ["jsfiddle","code","html","css","javascript","canvas"]
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-11-10-fabric-canvas-inch-grid-demo.html' | relative_url }}" title="fabric canvas inch grid" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

fabric.js elements rendered at 72dpi, which is a somewhat standard (and rough) density (...i guess?)

## html

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/fabric.js/1.5.0/fabric.min.js"></script>
<canvas id="c" width="1000" height="1000"></canvas>
```

## css

```css
html,
body {
  margin: 0;
  padding: 0;
}
```

## javascript

```javascript
var grid = 72;
var width = 1000;

window.canvas = new fabric.Canvas("c", {
  selection: false,
});

// Draw measuring area
// First = first point
//
// Third = second point
var measurementThickness = 60;
window.canvas.add(
  new fabric.Rect({
    left: 0,
    top: 0,
    fill: "#DDD",
    selectable: false,
    width: measurementThickness,
    height: 1000,
  }),
);

window.canvas.add(
  new fabric.Rect({
    left: 0,
    top: 0,
    fill: "#DDD",
    width: 4000,
    selectable: false,
    height: measurementThickness,
  }),
);

var tickSize = 10;
var tickSizeFoot = 40;

// Drag grid
var count = 1;
var footCount = 0;

for (var i = 0; i < width / grid; i++) {
  var offset = i * grid,
    location1 = offset + measurementThickness,
    isFoot = (i + 1) % 12 === 0 && i !== 0;

  // Grid ------------

  // vertical
  window.canvas.add(
    new fabric.Line([location1, measurementThickness, location1, width], {
      stroke: isFoot ? "#888" : "#ccc",
      selectable: false,
    }),
  );

  // horizontal
  window.canvas.add(
    new fabric.Line([measurementThickness, location1, width, location1], {
      stroke: isFoot ? "#888" : "#ccc",
      selectable: false,
    }),
  );

  // Ruler ------------

  // left
  window.canvas.add(
    new fabric.Line(
      [
        measurementThickness - tickSize,
        location1,
        measurementThickness,
        location1,
      ],
      {
        stroke: "#888",
        selectable: false,
      },
    ),
  );
  window.canvas.add(
    new fabric.Text(count + '"', {
      left: measurementThickness - tickSize * 2 - 7,
      top: location1,
      selectable: false,
      fontSize: 12,
      fontFamily: "san-serif",
    }),
  );

  if (isFoot) {
    footCount++;

    window.canvas.add(
      new fabric.Line(
        [
          measurementThickness - tickSizeFoot,
          location1,
          measurementThickness,
          location1,
        ],
        {
          stroke: "#222",
          selectable: false,
        },
      ),
    );
    window.canvas.add(
      new fabric.Text(footCount + "\'", {
        left: measurementThickness - tickSizeFoot - 7,
        top: location1 + 4,
        selectable: false,
        fontSize: 12,
        fontFamily: "san-serif",
      }),
    );
  }

  // top
  window.canvas.add(
    new fabric.Line(
      [
        location1,
        measurementThickness - tickSize,
        location1,
        measurementThickness,
      ],
      {
        stroke: "#888",
        selectable: false,
      },
    ),
  );
  window.canvas.add(
    new fabric.Text(count + '"', {
      left: location1,
      top: measurementThickness - tickSize * 2 - 4,
      selectable: false,
      fontSize: 12,
      fontFamily: "san-serif",
    }),
  );

  if (isFoot) {
    window.canvas.add(
      new fabric.Line(
        [
          location1,
          measurementThickness - tickSizeFoot,
          location1,
          measurementThickness,
        ],
        {
          stroke: "#222",
          selectable: false,
        },
      ),
    );
    window.canvas.add(
      new fabric.Text(footCount + "\'", {
        left: location1 + 4,
        top: measurementThickness - tickSizeFoot - 7,
        selectable: false,
        fontSize: 12,
        fontFamily: "san-serif",
      }),
    );
  }

  count++;
}

// snap to grid

window.canvas.on("object:moving", function (options) {
  // Snap to grid
  options.target.set({
    left: Math.round(options.target.left / grid) * grid,
    top: Math.round(options.target.top / grid) * grid,
  });

  // Detect nearby plants
  window.canvas.forEachObject(function (obj) {});
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/jdxfdej3/)
