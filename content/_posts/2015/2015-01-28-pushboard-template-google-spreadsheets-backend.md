---
kind: "code"
title: "pushboard template (Google Spreadsheets backend)"
date: "2015-01-28T10:44:37.000Z"
date_precision: "second"
source: "https://jsfiddle.net/ao5tfes2/6/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-01-28-pushboard-template-google-spreadsheets-backend-demo.html' | relative_url }}" title="pushboard template (Google Spreadsheets backend)" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

JSONP & Google Spreadsheetz to retrieve dataz

## html

```html
<div id="results"></div>
```

## css

```css
td {
  padding-right: 1em;
}
.name {
  font-weight: 900;
}
.date {
  background-color: #666;
  border: #fff 0.75em solid;
  color: #ccc;
}
```

## javascript

```javascript
var spreadsheet_id = "1PugfDgRTtRQosAqCb-C9OaRr0rvpFdpcQrP5tZA5oLE";
var url =
  "//spreadsheets.google.com/feeds/cells/" +
  spreadsheet_id +
  "/od6/public/values?alt=json-in-script&callback=?";

$.getJSON(url, cellEntries);

function cellEntries(json) {
  var table = document.createElement("table");
  table.setAttribute("id", "output");
  var tbody = document.createElement("tbody");

  var tr;
  var thead;
  var header_col = [];
  var number_of_header_cellz = 8;

  for (var i = 0; i < json.feed.entry.length; i++) {
    if (i < number_of_header_cellz) {
      header_col[i] = json.feed.entry[i].content.$t;
      continue;
    }

    var entry = json.feed.entry[i];

    if (entry.gs$cell.col == "1") {
      if (tr != null) {
        tbody.appendChild(tr);
      }
      tr = document.createElement("tr");
    }

    var td = document.createElement("td");
    td.setAttribute("class", header_col[i % number_of_header_cellz]);
    td.appendChild(document.createTextNode(entry.content.$t));
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
  table.appendChild(tbody);
  document.getElementById("results").appendChild(table);
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/ao5tfes2/6/)
