---
kind: "code"
title: "zooming through a hex grid"
date: "2012-11-24T23:43:08.000Z"
date_precision: "second"
description: "a d3 view glides back and forth between two circles on a hexagonal grid."
source: "https://jsfiddle.net/edwardsharp/Atz5v/"
tags: ["jsfiddle","code","mootools","html","css","javascript","svg"]
---

<iframe class="code-demo" src="{{ '/content/media/2012/2012-11-24-zooming-through-a-hex-grid-demo.html' | relative_url }}" title="jsfiddle / Atz5v" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<!DOCTYPE html>
<meta charset="utf-8" />

<body>
  <script src="//d3js.org/d3.v2.min.js?2.10.1"></script>
  <script src="//raw.github.com/d3/d3-plugins/master/hexbin/hexbin.js"></script>
  <script src="//raw.github.com/d3/d3-plugins/master/interpolate-zoom/interpolate-zoom.js"></script>
</body>
```

## css

```css
.mesh {
  fill: none;
  stroke: #000;
  stroke-width: 0.25px;
}

.start {
  fill: none;
  stroke: brown;
}

.end {
  fill: none;
  stroke: steelblue;
}
```

## javascript

```javascript
var width = 960,
  height = 500,
  radius = 10;

var p0 = [250, 200, 60],
  p1 = [560, 300, 120];

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .call(transition, p0, p1);

svg
  .append("path")
  .attr("class", "mesh")
  .attr("d", d3.hexbin.mesh(width, height, radius));

svg
  .selectAll("circle")
  .data([p0, p1])
  .enter()
  .append("circle")
  .attr("class", function (d, i) {
    return i ? "end" : "start";
  })
  .attr("cx", function (d) {
    return d[0];
  })
  .attr("cy", function (d) {
    return d[1];
  })
  .attr("r", function (d) {
    return d[2] / 2 - 0.5;
  });

function transition(svg, start, end) {
  var center = [width / 2, height / 2],
    i = d3.interpolateZoom(start, end);

  svg
    .attr("transform", transform(start))
    .transition()
    .delay(250)
    .duration(i.duration * 2)
    .attrTween("transform", function () {
      return function (t) {
        return transform(i(t));
      };
    })
    .each("end", function () {
      d3.select(this).call(transition, end, start);
    });

  function transform(p) {
    var k = height / p[2];
    return (
      "translate(" +
      (center[0] - p[0] * k) +
      "," +
      (center[1] - p[1] * k) +
      ")scale(" +
      k +
      ")"
    );
  }
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/Atz5v/)
