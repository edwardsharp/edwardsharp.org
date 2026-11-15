---
title: "Acceleration Ball Bounce"
date: "2017-04-21T06:37:25.000Z"
date_precision: "second"
tags: ["jsfiddle","code","processing.js","html","javascript","canvas"]
permalink: "/post/jsfiddle-kj6temtf/"
source_id: "kj6temtf"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/kj6temtf/"
source_revision: 0
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-21-jsfiddle-kj6temtf-demo.html' | relative_url }}" title="Acceleration Ball Bounce" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

https://p5js.org/examples/mobile-acceleration-ball-bounce.html

## html

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.min.js"></script>
```

## javascript

```javascript
// Position Variables
var x = 0;
var y = 0;

// Speed - Velocity
var vx = 0;
var vy = 0;

// Acceleration
var ax = 0;
var ay = 0;

var vMultiplier = 0.007;
var bMultiplier = 0.6;

function setup() {
  createCanvas(displayWidth, displayHeight);
  fill(0);
}

function draw() {
  background(255);
  ballMove();
  ellipse(x, y, 30, 30);
}

function ballMove() {
  ax = accelerationX;
  ay = accelerationY;

  vx = vx + ay;
  vy = vy + ax;
  y = y + vy * vMultiplier;
  x = x + vx * vMultiplier;

  // Bounce when touch the edge of the canvas
  if (x < 0) {
    x = 0;
    vx = -vx * bMultiplier;
  }
  if (y < 0) {
    y = 0;
    vy = -vy * bMultiplier;
  }
  if (x > width - 20) {
    x = width - 20;
    vx = -vx * bMultiplier;
  }
  if (y > height - 20) {
    y = height - 20;
    vy = -vy * bMultiplier;
  }
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/kj6temtf/)
