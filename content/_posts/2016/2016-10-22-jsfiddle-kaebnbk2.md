---
title: "rebelcricket"
date: "2016-10-22T08:20:47.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css"]
permalink: "/post/jsfiddle-kaebnbk2/"
source_id: "kaebnbk2"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/kaebnbk2/2/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-10-22-jsfiddle-kaebnbk2-demo.html' | relative_url }}" title="rebelcricket" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

screen prints

## html

```html
<div class="rebelcricket-logo-container">
  <div class="rebelcricket-logo">
    REBEL
    <br />
    CRICKET <br />
    SCREEN <br />
    PRINTS
  </div>
  <div class="cross"></div>
</div>
```

## css

```css
.cross {
  position: absolute;
  top: -35px;
  width: 55vw;
  height: 55vw;
  max-height: 500px;
  max-width: 500px;
  background: white;
  z-index: 1;
  -webkit-clip-path: polygon(
    0 48%,
    48% 48%,
    48% 0,
    52% 0,
    52% 48%,
    100% 48%,
    100% 52%,
    52% 52%,
    52% 100%,
    48% 100%,
    48% 52%,
    0 52%
  );
  clip-path: polygon(
    0 48%,
    48% 48%,
    48% 0,
    52% 0,
    52% 48%,
    100% 48%,
    100% 52%,
    52% 52%,
    52% 100%,
    48% 100%,
    48% 52%,
    0 52%
  );
}

.rebelcricket-logo-container {
  position: absolute;
  top: 50px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  box-shadow: 0 0 2px 10px white;
  border-radius: 9999px;
  -moz-border-radius: 9999px;
  -webkit-border-radius: 9999px;
  width: 40vw;
  height: 40vw;
  max-height: 400px;
  max-width: 400px;
  z-index: 2;
}

.rebelcricket-logo {
  position: absolute;
  top: -15px;
  line-height: 1em;
  z-index: 3;
  color: white;
  font-size: 3.8em;
  font-family: avenir;
  font-weight: bold;
  -webkit-text-fill-color: black;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
  transform: rotateZ(-3deg);
  margin-left: 10px;
}

/* center shit */

html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/kaebnbk2/2/)
