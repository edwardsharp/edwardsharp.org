---
kind: "code"
title: "schleifer (Google Spreadsheets backend)"
date: "2014-07-18T23:41:02.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/eZx8q/"
tags: ["jsfiddle","code","jquery","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2014/2014-07-18-schleifer-google-spreadsheets-backend-demo.html' | relative_url }}" title="schleifer (Google Spreadsheets backend)" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

JSONP & Google Spreadsheetz to retrieve dataz

## html

```html
<div id="results"></div>
```

## javascript

```javascript
var spreadsheet_id = "1NMXiuYIwO8oIGFV1bneO4bIQA-VqvZz8h1CEyk5YL0s";
var url =
  "//spreadsheets.google.com/feeds/cells/" +
  spreadsheet_id +
  "/od6/public/values?alt=json-in-script&callback=?";

var onSuccess = function (data) {
  var html = "";
  var entries = data.feed.entry;

  for (var i = 0, len = entries.length; i < len; ++i) {
    html += entries[i].content.$t + " ";
    if ((i + 1) % 3 == 0) {
      html += "<br/>";
    }
  }

  $("#results").html(html);
};

$.getJSON(url, cellEntries);

function cellEntries(json) {
  var table = document.createElement("table");
  table.setAttribute("id", "output");
  var tbody = document.createElement("tbody");

  var tr;
  var thead;

  for (var i = 0; i < json.feed.entry.length; i++) {
    var entry = json.feed.entry[i];

    if (entry.gs$cell.col == "1") {
      if (tr != null) {
        tbody.appendChild(tr);
      }
      tr = document.createElement("tr");
    }

    var td = document.createElement("td");
    td.appendChild(document.createTextNode(entry.content.$t));
    tr.appendChild(td);
  }

  tbody.appendChild(tr);
  table.appendChild(tbody);
  document.getElementById("results").appendChild(table);
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/eZx8q/)
