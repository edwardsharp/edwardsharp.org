---
kind: "code"
title: "a datepicker header"
date: "2016-07-09T19:35:24.000Z"
date_precision: "second"
description: "a jquery datepicker experiment that adds the selected day to its month heading."
source: "https://jsfiddle.net/edwardsharp/3b4g0s0v/9/"
tags: ["jsfiddle","code","jquery","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-07-09-a-datepicker-header-demo.html' | relative_url }}" title="jsfiddle / 3b4g0s0v" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//momentjs.com/downloads/moment.js"></script>
<div id="datepicker"></div>
```

## javascript

```javascript
$(function () {
  var maxDate = "2016-09-02";

  $("#datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    minDate: 0,
    maxDate: maxDate,
    showOtherMonths: true,
    selectOtherMonths: true,
    onSelect: function (date) {
      d = new Date(date);
      $("#datepicker").attr("data-date", d.getDate() + 1);
      var d = moment(date, "YY-MM-DD");
      setTimeout(function () {
        $(".ui-datepicker-month").html(d.format("MMMM D,"));
      }, 100);
    },
    onChangeMonthYear: function (date) {
      console.log("onChangeMonthYear", date);
    },
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/3b4g0s0v/9/)
