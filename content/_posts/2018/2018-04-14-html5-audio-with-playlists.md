---
kind: "code"
title: "HTML5 Audio with playlists"
date: "2018-04-14T07:39:14.000Z"
date_precision: "second"
description: "an html audio player with a clickable playlist and a little track-advancing logic."
source: "https://jsfiddle.net/edwardsharp/dt3b627f/3/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-04-14-html5-audio-with-playlists-demo.html' | relative_url }}" title="HTML5 Audio with playlists" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<audio id="audio" preload="auto" tabindex="0" controls="" type="audio/mpeg">
  <source
    type="audio/mp3"
    src="//www.archive.org/download/bolero_69/Bolero.mp3"
  />
  Sorry, your browser does not support HTML5 audio.
</audio>
<ul id="playlist">
  <li class="active">
    <a href="//www.archive.org/download/bolero_69/Bolero.mp3"
      >Ravel Bolero</a
    >
  </li>
  <li>
    <a
      href="//www.archive.org/download/MoonlightSonata_755/Beethoven-MoonlightSonata.mp3"
      >Moonlight Sonata - Beethoven</a
    >
  </li>
  <li>
    <a href="//www.archive.org/download/CanonInD_261/CanoninD.mp3"
      >Canon in D Pachabel</a
    >
  </li>
  <li>
    <a
      href="//www.archive.org/download/PatrikbkarlChamberSymph/PatrikbkarlChamberSymph_vbr_mp3.zip"
      >patrikbkarl chamber symph</a
    >
  </li>
</ul>
```

## css

```css
#playlist,
audio {
  background: #666;
  width: 400px;
  padding: 20px;
}
.active a {
  color: #5db0e6;
  text-decoration: none;
}
li a {
  color: #eeeedd;
  background: #333;
  padding: 5px;
  display: block;
}
li a:hover {
  text-decoration: none;
}
```

## javascript

```javascript
var audio;
var playlist;
var tracks;
var current;

init();
function init() {
  current = 0;
  audio = $("audio");
  playlist = $("#playlist");
  tracks = playlist.find("li a");
  len = tracks.length - 1;
  audio[0].volume = 0.1;
  audio[0].play();
  playlist.find("a").click(function (e) {
    e.preventDefault();
    link = $(this);
    current = link.parent().index();
    run(link, audio[0]);
  });
  audio[0].addEventListener("ended", function (e) {
    current++;
    if (current == len) {
      current = 0;
      link = playlist.find("a")[0];
    } else {
      link = playlist.find("a")[current];
    }
    run($(link), audio[0]);
  });
}
function run(link, player) {
  player.src = link.attr("href");
  par = link.parent();
  par.addClass("active").siblings().removeClass("active");
  audio[0].load();
  audio[0].play();
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/dt3b627f/3/)
