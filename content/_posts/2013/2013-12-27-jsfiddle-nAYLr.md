---
title: "VOL PITCH webkitAudioContext Oscillator"
date: "2013-12-27T00:07:03.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript","web audio","osc"]
permalink: "/post/jsfiddle-nAYLr/"
source_id: "nAYLr"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/nAYLr/9/"
source_revision: 9
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-12-27-jsfiddle-nAYLr-demo.html' | relative_url }}" title="VOL PITCH webkitAudioContext Oscillator" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

simple volume and pitch osc, n33t0!

## html

```html
<script src="//cwilso.github.io/webkitAudioContext-MonkeyPatch/webkitAudioContextMonkeyPatch.js"></script>
<input id="volume" type="range" min="0" max="1" step="0.1" value="0.1" />VOL
<br />
<input id="pitch" type="range" min="0" max="999" step="0.01" value="666" />PITCH
<br />
<input id="io" class="io" type="checkbox" />ON/OFF
```

## javascript

```javascript
var ctx = new webkitAudioContext(),
  osc = ctx.createOscillator(),
  vol = ctx.createGainNode();

// some defaultz
osc.frequency.value = 666;
vol.gain.value = 0.1;
var chk = false;
var last_vol = 0;

// route the signal
osc.connect(vol);
vol.connect(ctx.destination);

// UI
document.getElementById("volume").addEventListener("change", function () {
  if (chk) {
    vol.gain.value = this.value;
    document.getElementById("io").checked = true;
  }
});

document.getElementById("pitch").addEventListener("change", function () {
  osc.frequency.value = this.value;
});

document.getElementById("io").addEventListener("change", function () {
  if (this.checked) {
    if (chk && last_vol > 0) {
      //set the vol to whatever was prev set
      vol.gain.value = last_vol;
      document.getElementById("volume").value = last_vol;
    } else if (chk) {
      //if no prev set yet use the slider val
      vol.gain.value = document.getElementById("volume").value;
    } else {
      //or this is the first time, turn the osc on!
      osc.noteOn(0);
      chk = true;
    }
  } else {
    //be lazy and turn vol to 0 instead of noteOff cuz the ctx will need to be recreated!
    //grab the value so it can be set later...
    last_vol = vol.gain.value;
    vol.gain.value = 0;
    //sync the slider.
    document.getElementById("volume").value = 0;
    //osc.noteOff(0);
  }
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/nAYLr/9/)
