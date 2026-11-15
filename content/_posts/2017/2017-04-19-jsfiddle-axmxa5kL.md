---
title: "JS: canvas Drag 'n Drop"
date: "2017-04-19T00:02:00.000Z"
date_precision: "second"
tags: ["jsfiddle","code","css","javascript","canvas"]
permalink: "/post/jsfiddle-axmxa5kL/"
source_id: "axmxa5kL"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/axmxa5kL/"
source_revision: 0
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-19-jsfiddle-axmxa5kL-demo.html' | relative_url }}" title="JS: canvas Drag 'n Drop" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

more at: http://codepen.io/jackrugile/pen/yfJBK

## css

```css
html,
body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
```

## javascript

```javascript
Number.prototype.clamp =
  Number.prototype.clamp ||
  function (min, max) {
    return this < min ? min : this > max ? max : this;
  };

var canvas = document.createElement("canvas"),
  ctx = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

document.body.appendChild(canvas);

var mouse = {
  x: 0,
  y: 0,
  down: false,
  hover: function (rect) {
    return (
      this.x > rect.x &&
      this.x < rect.x + rect.w &&
      this.y > rect.y &&
      this.y < rect.y + rect.h
    );
  },
};

var shape = {
  w: 100,
  h: 100,
  x: width / 2 - 50,
  y: height / 2 - 50,
  xOff: 0,
  yOff: 0,
  hover: false,
};

function clear() {
  ctx.clearRect(0, 0, width, height);
}

function update() {
  shape.hover = mouse.hover(shape);

  if (shape.hover && mouse.down) {
    shape.x = mouse.x - shape.xOff;
    shape.y = mouse.y - shape.yOff;
  }

  shape.x = shape.x.clamp(0, width - shape.w);
  shape.y = shape.y.clamp(0, height - shape.h);
}

function draw() {
  var hover = shape.hover ? "#222" : "#000";
  ctx.fillStyle = mouse.down ? "#444" : hover;
  ctx.fillRect(shape.x, shape.y, shape.w, shape.h);
}

function mousemove(e) {
  mouse.x = e.pageX - canvas.offsetLeft;
  mouse.y = e.pageY - canvas.offsetTop;
}

function mousedown(e) {
  mouse.down = e.type === "mousedown";
  shape.xOff = mouse.x - shape.x;
  shape.yOff = mouse.y - shape.y;
}

(function loop() {
  clear();
  update();
  draw();
  setTimeout(loop, 20);
})();

document.onmousemove = mousemove;
document.onmousedown = document.onmouseup = mousedown;
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/axmxa5kL/)
