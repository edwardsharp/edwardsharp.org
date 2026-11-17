---
kind: "code"
title: "fullcalendar thing"
date: "2016-08-19T12:58:22.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/ycqa0nt7/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-08-19-fullcalendar-thing-demo.html' | relative_url }}" title="fullcalendar thing" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

just a day view

## html

```html
<script src="//fullcalendar.io/js/fullcalendar-2.9.1/lib/moment.min.js"></script>
<script src="//fullcalendar.io/js/fullcalendar-2.9.1/fullcalendar.min.js"></script>
<link
  rel="stylesheet"
  href="//fullcalendar.io/js/fullcalendar-2.9.1/fullcalendar.css"
/>
<div id="calendar"></div>
```

## css

```css
body {
  margin: 0;
  padding: 0;
  font-family: "Lucida Grande", Helvetica, Arial, Verdana, sans-serif;
  font-size: 14px;
}

.fc-toolbar {
  display: none;
}
```

## javascript

```javascript
$(document).ready(function () {
  $("#calendar").fullCalendar({
    header: {
      left: "",
      center: "",
      right: "",
    },
    defaultView: "agendaDay",
    defaultDate: "2016-06-12",
    titleFormat: " ",
    columnFormat: " ",
    editable: false,
    height: "auto",
    slotEventOverlap: false,
    eventLimit: true, // allow "more" link when too many events
    displayEventEnd: true,
    minTime: "10:30:00",
    maxTime: "22:00:00",
    eventBackgroundColor: "#ff6600",
    eventBorderColor: "#ff6600",
    allDaySlot: false,
    events: [
      {
        title: "All Day Event",
        start: "2016-06-01",
      },
      {
        title: "Long Event",
        start: "2016-06-07",
        end: "2016-06-10",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2016-06-09T16:00:00",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2016-06-16T16:00:00",
      },
      {
        title: "Meeting",
        start: "2016-06-12T10:30:00",
        end: "2016-06-12T12:30:00",
      },
      {
        title: "Lunch",
        start: "2016-06-12T12:00:00",
      },
      {
        title: "Meeting",
        start: "2016-06-12T14:30:00",
      },
      {
        title: "Happy Hour",
        start: "2016-06-12T17:30:00",
      },
      {
        title: "Dinner",
        start: "2016-06-12T20:00:00",
      },
      {
        title: "Birthday Party",
        start: "2016-06-13T07:00:00",
      },
      {
        title: "Click for Google",
        url: "//google.com/",
        start: "2016-06-28",
      },
    ],
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/ycqa0nt7/)
