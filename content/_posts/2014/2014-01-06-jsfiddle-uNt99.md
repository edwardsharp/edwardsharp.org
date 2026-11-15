---
title: "d3 graphing test"
date: "2014-01-06T17:51:42.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript","svg","animation"]
permalink: "/post/jsfiddle-uNt99/"
source_id: "uNt99"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/uNt99/2/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-jsfiddle-uNt99-demo.html' | relative_url }}" title="d3 graphing test" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

just testing out the d3 js framework

## html

```html
<script src="//d3js.org/d3.v2.js"></script>
<form>
  <input type="button" value="Graph" id="graph_submit" />
</form>
<div id="chart"><div></div></div>
```

## css

```css
.link line {
  stroke: #32cd32;
  stroke-width: 2;
}
```

## javascript

```javascript
var data_nodes, data_links, svg_nodes, svg_links, svg_root;

// array for chart size [width, height]
var chart_size = [];

chart_size.push(600);
chart_size.push(600);

// create new force directed graph
var force = d3.layout
  .force()
  .size(chart_size)
  .linkDistance(150)
  .charge(-1000)
  .friction(0.3);

// set tick handler for force graph animation
force.on("tick", function () {
  // all links get an x and y coordinate for their end points
  svg_root
    .selectAll("g.link line")
    .attr("x1", function (d) {
      return d.source.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });

  // all nodes get a SVG transform attribute
  // http://www.w3.org/TR/SVG/coords.html#TransformAttribute
  svg_root.selectAll("g.node").attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + ")";
  });
});

$("#graph_submit").click(function (event) {
  // remove inner div
  d3.select("#chart div").remove();

  // create new inner div and svg element with a configurable size
  svg_root = d3
    .select("#chart")
    .append("div")
    .append("svg")
    .attr("width", chart_size[0])
    .attr("height", chart_size[1])
    .call(d3.behavior.zoom().on("zoom", redraw))
    .append("svg:g");

  // fill rect which is same size as while SVG element
  svg_root
    .append("svg:rect")
    .attr("width", chart_size[0])
    .attr("height", chart_size[1])
    .attr("fill", "#F2F0E3");

  // zoom handler
  function redraw() {
    svg_root.attr(
      "transform",
      "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")",
    );
  }

  // start from scratch with empty nodes and links
  data_nodes = [{ name: "ROOT" }, { name: "NODE1" }, { name: "NODE2" }];
  data_links = [
    { source: 1, target: 0 },
    { source: 2, target: 0 },
  ];

  update_graph();
});

function update_graph() {
  // update SVG links and assign proper attributes
  svg_links = svg_root
    .selectAll("g.link")
    .data(data_links)
    .enter()
    .insert("svg:g", ".node")
    .attr("class", "link");

  svg_links
    .append("svg:line")
    .attr("x1", function (d) {
      return d.source.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });

  // update SVG nodes
  svg_nodes = svg_root
    .selectAll("g.node")
    .data(data_nodes)
    .enter()
    .insert("svg:g")
    .attr("class", "node")
    .call(force.drag);

  // set SVG nodes attributes for position and look/feel
  svg_nodes
    .append("svg:rect")
    .attr("x", function (d) {
      return -8 * d.name.length;
    })
    .attr("y", -20)
    .attr("rx", 7)
    .attr("stroke", "blue")
    .attr("stroke-width", 2)
    .attr("width", function (d) {
      return d.name.length * 15;
    })
    .attr("height", function (d) {
      return 30;
    })
    .attr("fill", function (d) {
      if (d.id == 1) {
        return "red";
      } else {
        return "lightblue";
      }
    });

  // set SVG node text
  svg_nodes
    .append("svg:text")
    .attr("text-anchor", "middle")
    .text(function (d) {
      return d.name;
    });

  // set SVG click handler
  svg_nodes.on("click", node_event_handler);
  // set SVG touch handler (iPad needs this)
  svg_nodes.on("touchstart", node_event_handler);

  function node_event_handler(d) {
    data_nodes.push({ name: d.name + "_X" });
    data_links.push({ target: d.index, source: data_nodes.length - 1 });
    update_graph();
  }

  // render graph
  force.links(data_links).nodes(data_nodes).start();
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/uNt99/2/)
