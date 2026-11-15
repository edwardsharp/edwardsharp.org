---
title: "canvas game"
date: "2016-11-04T06:05:41.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript","canvas"]
permalink: "/post/jsfiddle-f148cxjp/"
source_id: "f148cxjp"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/f148cxjp/1/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-11-04-jsfiddle-f148cxjp-demo.html' | relative_url }}" title="canvas game" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

i don't have up or down arrow keyz programm'd!

## html

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.8/fabric.min.js"></script>
<button id="toggleAnimation">toggle</button>
<canvas id="c" height="5000" width="5000"></canvas>
```

## css

```css
html,
body {
  margin: 0;
  padding: 0;
}
#c {
  height: 5000px;
  width: 5000px;
  background: hotpink;
  overflow: scroll;
}
#toggleAnimation {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
#room1 {
  position: absolute;
  top: 100px;
  left: 500px;
  height: 500px;
  width: 500px;
  background-color: black;
}

#rooom2 {
  position: absolute;
  top: 300px;
  left: 1000px;
  height: 250px;
  width: 250px;
  background-color: black;
}
```

## javascript

```javascript
(function () {
  var canvas = (this.__canvas = new fabric.StaticCanvas("c"));

  canvas.add(
    new fabric.Rect({
      top: 100,
      left: 100,
      width: 50,
      height: 50,
      fill: "#f55",
    }),
    new fabric.Circle({ top: 140, left: 230, radius: 75, fill: "green" }),
    new fabric.Triangle({
      top: 300,
      left: 210,
      width: 100,
      height: 100,
      fill: "blue",
    }),
  );

  var isAnimating = false;

  $("#toggleAnimation").click(function () {
    if (isAnimating) {
      isAnimating = false;
    } else {
      isAnimating = true;
      animate();
    }
  });

  $(document).keyup(function (event) {
    var _offset = 50,
      _duration = 50;

    if (event.key === "ArrowRight") {
      canvas.item(1).animate("left", canvas.item(1).getLeft() + _offset, {
        duration: _duration,
        onChange: canvas.renderAll.bind(canvas),
      });
    } else if (event.key === "ArrowLeft") {
      canvas.item(1).animate("left", canvas.item(1).getLeft() - _offset, {
        duration: _duration,
        onChange: canvas.renderAll.bind(canvas),
      });
    }
  });

  function animate() {
    if (isAnimating) {
      canvas
        .item(0)
        .animate("top", canvas.item(0).getTop() === 500 ? "100" : "500", {
          duration: 1000,
          onChange: canvas.renderAll.bind(canvas),
          onComplete: animate,
        });
    }
  }
})();
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/f148cxjp/1/)
