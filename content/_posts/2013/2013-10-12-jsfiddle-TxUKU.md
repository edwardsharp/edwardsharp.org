---
title: "a coffee consumption chart"
description: "a google charts experiment queries a fusion table for yearly coffee consumption by country."
date: "2013-10-12T06:30:39.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","javascript"]
permalink: "/post/jsfiddle-TxUKU/"
source_id: "TxUKU"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/TxUKU/1/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-10-12-jsfiddle-TxUKU-demo.html' | relative_url }}" title="jsfiddle / TxUKU" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//www.google.com/jsapi?fake=.js"></script>

<body style="font-family: Arial; border: 0 none">
  <div id="visualization_div" style="width: 600px; height: 400px"></div>
</body>
```

## javascript

```javascript
google.load("visualization", "1", { packages: ["corechart"] });
function drawVisualization() {
  var queryText = encodeURIComponent(
    "SELECT Year, Austria, Bulgaria, Denmark, Greece FROM 641716",
  );
  google.visualization.drawChart({
    containerId: "visualization_div",
    dataSourceUrl: "https://www.google.com/fusiontables/gvizdata?tq=",
    query: "SELECT Year, Austria, Bulgaria, Denmark, Greece FROM 641716",
    refreshInterval: 5,
    chartType: "BarChart",
    options: {
      title: "Yearly Coffee Consumption by Country",
      vAxis: { title: "Year" },
      hAxis: { title: "Cups" },
    },
  });
}

google.setOnLoadCallback(drawVisualization);
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/TxUKU/1/)
