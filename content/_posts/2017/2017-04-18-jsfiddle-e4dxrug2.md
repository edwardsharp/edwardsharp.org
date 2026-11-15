---
title: "canvas stuff"
date: "2017-04-18T14:14:30.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript","canvas"]
permalink: "/post/jsfiddle-e4dxrug2/"
source_id: "e4dxrug2"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/e4dxrug2/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-18-jsfiddle-e4dxrug2-demo.html' | relative_url }}" title="canvas stuff" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

hmm

## html

```html
<script src="//rawgithub.com/kangax/fabric.js/master/dist/fabric.js"></script>
<canvas id="c" width="600" height="600"></canvas>
```

## css

```css
html,
body {
  margin: 0;
  padding: 0;
}

canvas {
  border: 1px solid #ccc;
}
```

## javascript

```javascript
var canvas = new fabric.Canvas("c", {
  selection: false,
});

var boardSize = 600;
if (window.innerWidth > 0 && window.innerWidth < window.innerHeight) {
  boardSize = window.innerWidth;
}

var grid = Math.floor(boardSize / 8);

// create board grid linez
for (var i = 0; i < 8; i++) {
  canvas.add(
    new fabric.Line([i * grid, 0, i * grid, boardSize], {
      stroke: "#ccc",
      selectable: false,
    }),
  );
  canvas.add(
    new fabric.Line([0, i * grid, boardSize, i * grid], {
      stroke: "#ccc",
      selectable: false,
    }),
  );
}

var createPiece = function (col, row, color) {
  var circle = new fabric.Circle({
    left: row * grid,
    top: col * grid,
    radius: grid / 2,
    fill: color, //'#faa'
    originX: "left",
    originY: "top",
    centeredRotation: true,
  });
  // disable resize/rotate controls
  circle.setControlsVisibility({
    mt: false,
    mb: false,
    ml: false,
    mr: false,
    bl: false,
    br: false,
    tl: false,
    tr: false,
    mtr: false,
  });
  canvas.add(circle);
};

var squareColor = function (col, row) {
  return (col + row) % 2 == 0 ? "red" : "black";
};

// add objectz
for (var c = 0; c < 8; c++) {
  for (var r = 0; r < 8; r++) {
    //this.board[c][r] = { color: squareColor(c,r) };
    if (squareColor(c, r) == "black") {
      if (c >= 0 && c < 3) {
        //this.board[c][r].piece = {color: 'red', king: false};
        createPiece(c, r, "red");
      }
      if (c > 4) {
        //this.board[c][r].piece = {color: 'white', king: false};
        createPiece(c, r, "black");
      }
    }
  }
} //end col for

// snap to grid
canvas.on("object:moving", function (options) {
  var _left = Math.round(options.target.left / grid) * grid;
  var _top = Math.round(options.target.top / grid) * grid;
  //try to keep shit from falling off the canvas/board.
  if (_left >= boardSize - grid) {
    _left = boardSize - grid;
  } else if (_left < 0) {
    _left = 0;
  }
  if (_top > boardSize - grid) {
    _top = boardSize - grid;
  } else if (_top < 0) {
    _top = 0;
  }
  options.target.set({
    left: _left,
    top: _top,
  });
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/e4dxrug2/)
