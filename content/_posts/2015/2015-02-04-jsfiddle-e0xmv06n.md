---
title: "pushboard template (Google Calendar data source)"
date: "2015-02-04T04:30:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-e0xmv06n/"
source_id: "e0xmv06n"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/e0xmv06n/"
source_revision: 13
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-02-04-jsfiddle-e0xmv06n-demo.html' | relative_url }}" title="pushboard template (Google Calendar data source)" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p data-import-note="">an API key was removed from this archived example; some features need a replacement key.</p>

JSONP & Google cal to retrieve dataz

## html

```html
<script src="//momentjs.com/downloads/moment.js"></script>
<img border="0" src="//i.imgur.com/EhMz9EM.jpg" />
<div id="header">
  <p class="red">
    + CLICK <a href="//www.pushboardportland.com/">HERE</a> TO ADD AN EVENT
    TO AN UPCOMING WEEK. THIS WORKS BEST IF YOU SUBMIT YOUR EVENTS TO US EARLY.
  </p>
  <p>
    + VIEW GOOGLE CALENDAR OF ALL UPCOMING EVENTS
    <a
      href="//www.google.com/calendar/embed?src=pushboardportland%40gmail.com&ctz=America/Los_Angeles"
      >HERE</a
    >. YOU CAN SYNC THIS CALENDAR WITH YOUR OWN.
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
  display: block;
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
function nextMonday() {
  var d = new Date();

  switch (d.getDay()) {
    case 0:
      d.setDate(d.getDate() + 1);
      break;

    case 2:
      d.setDate(d.getDate() + 6);
      break;

    case 3:
      d.setDate(d.getDate() + 5);
      break;

    case 4:
      d.setDate(d.getDate() + 4);
      break;

    case 5:
      d.setDate(d.getDate() + 3);
      break;

    case 6:
      d.setDate(d.getDate() + 2);
      break;
  }

  return d;
}

//pwnwn ngttpigcg45hjul9g0g1v4dadc%40group.calendar.google.com
//e# edward%40edwardsharp.net
//pb pushboardportland%40gmail.com
var cal_id = "pushboardportland%40gmail.com";
var cal_api_key = "REDACTED_API_KEY";

var weekAfterNextMonday = moment(new Date(nextMonday()));

weekAfterNextMonday.add(7, "days");

console.log(nextMonday().toISOString());
console.log(weekAfterNextMonday.toISOString());
var url =
  "//www.googleapis.com/calendar/v3/calendars/" +
  cal_id +
  "/events?singleEvents=true&orderBy=startTime&timeMin=" +
  nextMonday().toISOString() +
  "&timeMax=" +
  weekAfterNextMonday.toISOString() +
  "&key=" +
  cal_api_key;

console.log(url);

$.getJSON(url, cellEntries);

function cellEntries(json) {
  //console.log(json);
  var out = document.createElement("div");
  var p;
  var dateHeading = nextMonday();
  var dateHeadingDay = 0;

  for (var i = 0; i < json.items.length; i++) {
    var entry = json.items[i];

    if (p != null) {
      out.appendChild(p);
    }
    p = document.createElement("p");

    var text = "";

    var start;
    if (entry.start.date) {
      start = entry.start.date;
    } else if (entry.start.dateTime) {
      start = entry.start.dateTime;
    }

    var startDateDay = new Date(start).getDay();
    //console.log("startDateDay: "+startDateDay+" dateHeadingDay:"+dateHeadingDay);

    if (startDateDay != dateHeadingDay) {
      var span = document.createElement("span");
      span.setAttribute("class", "header_date");

      text += moment(start).format("dddd, MMMM Do YYYY");

      span.appendChild(document.createTextNode(text));
      p.appendChild(span);
      dateHeadingDay = startDateDay;
    }

    var text = "";
    var span = document.createElement("span");
    span.setAttribute("class", "time");
    text += moment(start).format("h:mma");

    span.appendChild(document.createTextNode(text));
    p.appendChild(span);

    var span = document.createElement("span");
    span.setAttribute("class", "description");
    text = "";
    if (entry.summary) {
      text += entry.summary;
      text += " ";
    }
    if (entry.description) {
      text += entry.description;
    }

    span.appendChild(document.createTextNode(text));
    p.appendChild(span);

    var span = document.createElement("span");
    span.setAttribute("class", "location");
    text = "";

    if (entry.location) {
      text += "@";
      text += entry.location;
    }

    span.appendChild(document.createTextNode(text));
    p.appendChild(span);
  }

  if (p != null) {
    out.appendChild(p);
  } else {
    out.appendChild(document.createTextNode("there's nothing!"));
  }

  document.getElementById("output").appendChild(out);
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/e0xmv06n/)
