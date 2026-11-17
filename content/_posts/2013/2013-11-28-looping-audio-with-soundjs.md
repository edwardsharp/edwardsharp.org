---
kind: "code"
title: "looping audio with soundjs"
date: "2013-11-29T01:20:37.000Z"
date_precision: "second"
description: "a preloaded audio loop gets a simple pair of play and stop buttons."
source: "https://jsfiddle.net/edwardsharp/gPPNc/"
tags: ["jsfiddle","code","jquery","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-11-28-looping-audio-with-soundjs-demo.html' | relative_url }}" title="jsfiddle / gPPNc" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//code.createjs.com/soundjs-0.5.0.min.js"></script>
<script src="//code.createjs.com/preloadjs-0.3.0.min.js"></script>
<button id="play">Play</button>
<button id="stop">Stop</button>
```

## javascript

```javascript
var manifest = [
  { id: "waiting", src: "//futuredeathtoll.com/upload/filez/djhrn.mp3" },
];
var preload = new createjs.LoadQueue();
preload.installPlugin(createjs.Sound);
preload.loadManifest(manifest);

$("#play").on("click", function () {
  createjs.Sound.play("waiting", createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1);
});
$("#stop").on("click", function () {
  createjs.Sound.stop();
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/gPPNc/)
