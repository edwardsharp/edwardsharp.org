---
title: "isometric zoom"
description: "an isometric css layout experiments with clickable panels and animated zooming."
date: "2012-11-25T00:48:56.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-NWgCN/"
source_id: "NWgCN"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/NWgCN/2/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2012/2012-11-25-jsfiddle-NWgCN-demo.html' | relative_url }}" title="jsfiddle / NWgCN" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <title>Isometric test</title>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" />

    <script
      type="text/javascript"
      src="//janne.aukia.com/zoomooz/jquery.zoomooz.min.js"
    ></script>

    <script type="text/javascript">
      $(document).ready(function () {
        $.zoomooz.setup({ nativeanimation: true, debug: false });

        $(".cover").click(function (evt) {
          evt.stopPropagation();
          $(this).zoomTo();
          $(".cover").not(this).show();
          $(this).hide();
        });

        $(".box").click(function (evt) {
          evt.stopPropagation();
          $(this).zoomTo({ targetsize: 0.7 });
        });

        $(".face").click(function (evt) {
          evt.stopPropagation();
          $(this).zoomTo();
        });

        $(window).click(function (evt) {
          evt.stopPropagation();
          $("body").zoomTo({ targetsize: 1.0 });
          $(".cover").show();
        });
      });
    </script>
  </head>
  <body>
    <div id="container">
      <div id="cube">
        <div class="face" id="f1">
          <div class="cover"></div>
          <div class="facecontent">
            <div class="box">
              Fusce luctus vestibulum tincidunt. Sed sed enim arcu, et placerat
              odio. Aenean sodales, diam a viverra volutpat, odio ipsum molestie
              ipsum, quis tristique lacus orci accumsan elit. Suspendisse
              potenti.
            </div>
            <div class="box">
              Ut viverra porttitor orci eget mattis. Ut posuere lectus sed sem
              viverra id pulvinar leo varius. Vivamus lectus nisl, facilisis id
              elementum at, vestibulum eu ante. Cras sem erat, suscipit a
              ultrices in.
            </div>
            <div class="box">
              Aenean posuere facilisis ligula et interdum. Nulla facilisi.
              Quisque faucibus semper mauris, vitae bibendum sapien adipiscing
              et. Morbi ornare gravida metus in ullamcorper. Nullam vel nibh
              lacus. Donec ut.
            </div>
            <div class="box">
              Nulla non dolor iaculis ante semper tempus ac ac leo. Praesent
              interdum, velit in mollis aliquam, leo leo condimentum nisl, at
              ultrices magna velit eget tellus. Vestibulum nec risus ut orci
              lacinia tempor.
            </div>
          </div>
        </div>
        <div class="face" id="f2">
          <div class="cover"></div>
          <div class="facecontent">
            <div class="box">
              Fusce luctus vestibulum tincidunt. Sed sed enim arcu, et placerat
              odio. Aenean sodales, diam a viverra volutpat, odio ipsum molestie
              ipsum, quis tristique lacus orci accumsan elit. Suspendisse
              potenti.
            </div>
            <div class="box">
              Ut viverra porttitor orci eget mattis. Ut posuere lectus sed sem
              viverra id pulvinar leo varius. Vivamus lectus nisl, facilisis id
              elementum at, vestibulum eu ante. Cras sem erat, suscipit a
              ultrices in.
            </div>
            <div class="box">
              Aenean posuere facilisis ligula et interdum. Nulla facilisi.
              Quisque faucibus semper mauris, vitae bibendum sapien adipiscing
              et. Morbi ornare gravida metus in ullamcorper. Nullam vel nibh
              lacus. Donec ut.
            </div>
            <div class="box">
              Nulla non dolor iaculis ante semper tempus ac ac leo. Praesent
              interdum, velit in mollis aliquam, leo leo condimentum nisl, at
              ultrices magna velit eget tellus. Vestibulum nec risus ut orci
              lacinia tempor.
            </div>
          </div>
        </div>
        <div class="face" id="f3">
          <div class="cover"></div>
          <div class="facecontent">
            <div class="box">
              Fusce luctus vestibulum tincidunt. Sed sed enim arcu, et placerat
              odio. Aenean sodales, diam a viverra volutpat, odio ipsum molestie
              ipsum, quis tristique lacus orci accumsan elit. Suspendisse
              potenti.
            </div>
            <div class="box">
              Ut viverra porttitor orci eget mattis. Ut posuere lectus sed sem
              viverra id pulvinar leo varius. Vivamus lectus nisl, facilisis id
              elementum at, vestibulum eu ante. Cras sem erat, suscipit a
              ultrices in.
            </div>
            <div class="box">
              Aenean posuere facilisis ligula et interdum. Nulla facilisi.
              Quisque faucibus semper mauris, vitae bibendum sapien adipiscing
              et. Morbi ornare gravida metus in ullamcorper. Nullam vel nibh
              lacus. Donec ut.
            </div>
            <div class="box">
              Nulla non dolor iaculis ante semper tempus ac ac leo. Praesent
              interdum, velit in mollis aliquam, leo leo condimentum nisl, at
              ultrices magna velit eget tellus. Vestibulum nec risus ut orci
              lacinia tempor.
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

## css

```css
/* these are not necessary */

html {
  background-color: black;
  font-family: Helvetica, Arial;
  font-size: 16px;
  overflow: hidden;
}

/* i thought this wasn't needed anymore? */
body {
  margin: 0;
}

#container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.face {
  position: absolute;
  width: 200px;
  height: 200px;
  padding: 40px;
  border: 1px solid black;
}

.box {
  float: left;
  width: 90px;
  height: 90px;
  padding: 2px;
  overflow: hidden;
  font-size: 8px;
  margin: 3px;
}

.box:first-letter {
  font-size: 292%;
  float: left;
  margin-right: 3px;
  color: yellow;
}

.cover:hover,
.box:hover {
  cursor: pointer;
}

#f1 .box {
  background-color: #ff6600;
}

#f2 .box {
  background-color: #ff6600;
}

#f3 .box {
  background-color: #ff6600;
}

#cube {
  position: relative;
  left: 50%;
  top: 50%;
  -webkit-transform: rotate(-30deg);
  -moz-transform: rotate(-30deg);
}

#f1 {
  -webkit-transform: skew(-30deg, 0deg) scale(1, 0.864);
  -moz-transform: skew(-30deg, 0deg) scale(1, 0.864);
  background-color: #999;
}

#f2 {
  -webkit-transform: rotate(120deg) skew(-30deg, 0deg) scale(1, 0.864);
  -moz-transform: rotate(120deg) skew(-30deg, 0deg) scale(1, 0.864);
  background-color: #ccc;
}

#f3 {
  -webkit-transform: rotate(240deg) skew(-30deg, 0deg) scale(1, 0.864);
  -moz-transform: rotate(240deg) skew(-30deg, 0deg) scale(1, 0.864);
  background-color: #eee;
}

.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: +1;
}

.facecontent {
  position: absolute;
  width: 200px;
  height: 200px;
  padding: 40px;
  left: 0;
  top: 0;
  z-index: -1;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/NWgCN/2/)
