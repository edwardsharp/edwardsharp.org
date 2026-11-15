---
title: "pushboard template (Google Spreadsheets backend)"
date: "2015-01-30T07:36:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-Lxctgnge/"
source_id: "Lxctgnge"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/Lxctgnge/13/"
source_revision: 13
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-01-30-jsfiddle-Lxctgnge-demo.html' | relative_url }}" title="pushboard template (Google Spreadsheets backend)" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

JSONP & Google Spreadsheetz to retrieve dataz

## html

```html
<img border="0" src="//i.imgur.com/EhMz9EM.jpg" />
<div id="header">
  <p class="red">
    + CLICK <a href="//wut?">HERE</a> TO ADD AN EVENT TO AN UPCOMING WEEK.
    THIS WORKS BEST IF YOU SUBMIT YOUR EVENTS TO US EARLY.
  </p>
  <p>
    + VIEW GOOGLE CALENDAR OF ALL UPCOMING EVENTS
    <a href="//wut?">HERE</a>. YOU CAN SYNC THIS CALENDAR WITH YOUR OWN.
  </p>
  <p>+ NEW INSTALLMENT EVERY MONDAY.</p>
</div>
<div id="output"></div>
```

## css

```css
img {
  width: 100%;
}
#header p {
  font:
    0.75em arial,
    sans-serif;
  margin-bottom: 1em;
}
p {
  margin-bottom: 0.5em;
}
span {
  margin-right: 1em;
  font:
    0.8em verdena,
    sans-serif;
  font-family: monospace;
}
.red {
  color: red;
}
.header_date {
  font: 1.5em monospace;
  font-weight: bold;
}
.name {
}
.time {
  background-color: #222;
  text-align: center;
  color: #fff;
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
  var out = document.createElement("div");
  var p;
  var header_col = [];
  var number_of_header_cellz = 9;

  //collect column namez
  for (var i = 0; i < number_of_header_cellz; i++) {
    header_col[i] = json.feed.entry[i].content.$t;
  }

  //loop through all the cellz, skip the header cellz.
  for (var i = number_of_header_cellz; i < json.feed.entry.length; i++) {
    var entry = json.feed.entry[i];

    //check if we have a cell from column 1 OR 2, meaning it will indicate a group (of events for a single day)
    if (entry.gs$cell.col == "1" || entry.gs$cell.col == "2") {
      if (p != null) {
        out.appendChild(p);
      }
      p = document.createElement("p");
    }

    var span = document.createElement("span");
    var this_header_col = header_col[entry.gs$cell.col - 1];
    span.setAttribute("class", this_header_col);

    if (this_header_col == "link_text" || this_header_col == "link_url") {
      if (this_header_col == "link_text") {
        //need to do this just once, so hence the second if...
        var a = document.createElement("a");
        var linkText = document.createTextNode(entry.content.$t);
        a.appendChild(linkText);
        //jump one ahead to grab the link (this is a little hacky)
        a.title = json.feed.entry[i + 1].gs$cell.$t;
        a.href = json.feed.entry[i + 1].gs$cell.$t;

        span.appendChild(a);
        p.appendChild(span);
      }
    } else {
      span.appendChild(document.createTextNode(entry.content.$t));
      p.appendChild(span);
    }
  }

  out.appendChild(p);
  document.getElementById("output").appendChild(out);
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/Lxctgnge/13/)
