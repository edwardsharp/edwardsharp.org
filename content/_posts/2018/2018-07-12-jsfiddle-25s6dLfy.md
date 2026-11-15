---
title: "clickable traffic lights"
description: "two little traffic lights cycle through red, green, and yellow when their lamps are clicked."
date: "2018-07-12T19:07:31.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","javascript"]
permalink: "/post/jsfiddle-25s6dLfy/"
source_id: "25s6dLfy"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/25s6dLfy/36/"
source_revision: 36
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-12-jsfiddle-25s6dLfy-demo.html' | relative_url }}" title="jsfiddle / 25s6dLfy" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div class="light">
  <div class="red"></div>
  <div class="yellow"></div>
  <div class="green"></div>
</div>
<div class="light">
  <div class="red"></div>
  <div class="yellow"></div>
  <div class="green"></div>
</div>
```

## css

```css
.light {
  height: 135px;
  width: 54px;
  border: thin solid black;
  padding: 5px;
  box-sizing: border-box;
}

.red,
.yellow,
.green {
  height: 33px;
  width: 33px;
  border-radius: 33px;
  margin: 5px;
  border: thin solid black;
}
```

## javascript

```javascript
//es6
//make a stoplight
//box around three lights red, yellow, green
//click light will go to next one red -> green -> yellow -> red

let light = document.getElementsByClassName("light");
let lights = {};

let changeLight = function (l, red, yellow, green) {
  console.log("l:", l);
  if (lights[l] === "red") {
    red.style.backgroundColor = "white";
    green.style.backgroundColor = "green";
    lights[l] = "green";
  } else if (lights[l] === "green") {
    green.style.backgroundColor = "white";
    yellow.style.backgroundColor = "yellow";
    lights[l] = "yellow";
  } else if (lights[l] === "yellow") {
    yellow.style.backgroundColor = "white";
    red.style.backgroundColor = "red";
    lights[l] = "red";
  }
};

for (const l in light) {
  let red = light[l].querySelector(".red");
  let yellow = light[l].querySelector(".yellow");
  let green = light[l].querySelector(".green");
  console.log("red:", red);
  red.style.backgroundColor = "red";
  lights[l] = "red";

  red.addEventListener("click", () => changeLight(l, red, yellow, green));
  green.addEventListener("click", () => changeLight(l, red, yellow, green));
  yellow.addEventListener("click", () => changeLight(l, red, yellow, green));
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/25s6dLfy/36/)
