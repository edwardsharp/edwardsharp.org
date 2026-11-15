---
title: "Gantt Chart Example"
date: "2016-09-30T11:35:50.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-svmw6taj/"
source_id: "svmw6taj"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/svmw6taj/"
source_revision: 0
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-30-jsfiddle-svmw6taj-demo.html' | relative_url }}" title="Gantt Chart Example" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

An example of a Google Gantt Chart.

## html

```html
<script
  type="text/javascript"
  src="//www.gstatic.com/charts/loader.js"
></script>
<div id="chart_div"></div>
```

## javascript

```javascript
google.charts.load("current", { packages: ["gantt"] });
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Task ID");
  data.addColumn("string", "Task Name");
  data.addColumn("string", "Resource");
  data.addColumn("date", "Start Date");
  data.addColumn("date", "End Date");
  data.addColumn("number", "Duration");
  data.addColumn("number", "Percent Complete");
  data.addColumn("string", "Dependencies");

  data.addRows([
    [
      "Research",
      "Find sources",
      null,
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      100,
      null,
    ],
    [
      "Write",
      "Write paper",
      "write",
      null,
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      25,
      "Research,Outline",
    ],
    [
      "Cite",
      "Create bibliography",
      "write",
      null,
      new Date(2015, 0, 7),
      daysToMilliseconds(1),
      20,
      "Research",
    ],
    [
      "Complete",
      "Hand in paper",
      "complete",
      null,
      new Date(2015, 0, 10),
      daysToMilliseconds(1),
      0,
      "Cite,Write",
    ],
    [
      "Outline",
      "Outline paper",
      "write",
      null,
      new Date(2015, 0, 6),
      daysToMilliseconds(1),
      100,
      "Research",
    ],
  ]);

  var options = {
    height: 275,
    gantt: {
      criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
      arrow: {
        angle: 100,
        width: 5,
        color: "green",
        radius: 0,
      },
    },
  };

  var chart = new google.visualization.Gantt(
    document.getElementById("chart_div"),
  );

  chart.draw(data, options);
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/svmw6taj/)
