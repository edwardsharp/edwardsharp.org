---
kind: "code"
title: "JSONP Google Spreadsheets"
date: "2013-10-13T00:42:13.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/S4mqA/5/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-10-12-jsonp-google-spreadsheets-demo.html' | relative_url }}" title="JSONP Google Spreadsheets" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

Uses JSONP and Google Spreadsheets to retrieve a spreadsheet of GLLL scores.

## html

```html
<script src="//www.google.com/jsapi?fake=.js"></script>
<script src="//www.gcmingati.net/wordpress/wp-content/lab/jquery/svwt/js/jquery.slideViewerPro.1.5.js"></script>
<script src="//www.gcmingati.net/wordpress/wp-content/lab/jquery/svwt/js/jquery.timers.js"></script>
<div id="basic" class="svwp">
  <ul>
    <div id="results"></div>
  </ul>
</div>
```

## css

```css
.svwp {
  width: 50px;
  height: 20px;
  background: #fff;
} /*preloader stuff. do not modify!*/
.svwp ul {
  position: relative;
  left: -999em;
} /*preloader stuff. do not modify!*/
.slideViewer {
  /*this is the gallery container*/
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: #fff;
}
.slideViewer ul {
  /*this is your list of images*/
  position: relative;
  left: 0;
  top: 0;
  width: 1%;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.slideViewer ul li {
  /*each LI item is floated; the whole list is now displayed as if its in one row*/
  float: left;
}

/*typographic info*/
.slideViewer span.typo {
  padding: 6px; /* do not modify padding (yet)*/
  background: #fff;
  color: #000;
  font: normal 10px Verdana;
}

.thumbSlider {
  /*the thumbnails slider contanier*/
  overflow: hidden;
  width: 1%;
  background: #fff;
}
.thumbSlider ul {
  /*the thumbnails list of images*/
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.thumbSlider ul li {
  float: left;
  margin: 0;
}
.thumbSlider a {
  /*the link wrapped around each thumbnail. dynamically.*/
  color: #fff;
  text-decoration: none;
}
.thumbSlider a img {
  border: 0;
  display: block;
  padding: 0;
}
.thumbSlider p.tmbrdr {
  /* the border above -not around- each thumb */
  /* width, height and top values are dynamically added by the script. Do not modify. */
  position: relative;
  left: 0;
  font-size: 0.01em;
  left: 0;
  margin: 0;
  padding: 0;
}

a.left,
a.right {
  /*the left and right buttons (links)*/
  background: transparent; /* could be any color  */
  color: #ff0000;
  font: bold 16px Arial;
  overflow: hidden;
}
a.left span,
a.right span {
}
a.left img,
a.right img {
  border: 0;
}
a.l_dis,
a.r_dis {
  background: transparent; /* ALWAYS leave transparent. this is the 'disabled' state of the link !  */
  cursor: default;
}
a.l_dis span,
a.r_dis span {
  display: none;
}
a:focus {
  outline: none;
}
```

## javascript

```javascript
$(window).bind("load", function () {
  $("div#basic").slideViewerPro({
    thumbs: 3,
    thumbsPercentReduction: 20,
    galBorderWidth: 0,
    galBorderColor: "aqua",
    thumbsTopMargin: 10,
    thumbsRightMargin: 10,
    thumbsBorderWidth: 5,
    thumbsActiveBorderColor: "gold",
    thumbsActiveBorderOpacity: 0.8,
    thumbsBorderOpacity: 0,
    buttonsTextColor: "#707070",

    autoslide: true,
    typo: true,
  });
});

var url =
  "//spreadsheets.google.com/feeds/cells/0Avk2-n_RO4LKdHFvWnpfRG1nMEhKRXpPenR6OF9reXc/1/public/values?alt=json-in-script&callback=?";

$.getJSON(url, cellEntries);

function cellEntries(json) {
  var html = "";
  var entries = json.feed.entry;
  for (var i = 0, len = entries.length; i < len; ++i) {
    //html += entries[i].content.$t + ' ';
    //if ((i + 1) % 3 == 0) {
    if (entries[i].gs$cell.col == "2") {
      html += "<li>";
      html += '<img src="' + entries[i].content.$t + '" />';
      html += "</li>";
    }
  }

  $("#results").html(html);
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/S4mqA/5/)
