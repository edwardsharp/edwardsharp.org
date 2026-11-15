---
title: "youtube shit"
date: "2016-07-28T20:25:07.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","javascript"]
permalink: "/post/jsfiddle-snwzaexm/"
source_id: "snwzaexm"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/snwzaexm/7/"
source_revision: 7
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-07-28-jsfiddle-snwzaexm-demo.html' | relative_url }}" title="youtube shit" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

for alex

## html

```html
<!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
<body>
  <div>hey just writing a thing</div>
  <div id="player"></div>
</body>
```

## javascript

```javascript
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "8_dXp0eF8s0",
    playerVars: {
      //  'autoplay': 1,
      controls: 0,
      autohide: 1,
      wmode: "opaque",
      showinfo: 0,
      loop: 1,
      mute: 1,
      playlist: "8_dXp0eF8s0",
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
}

function stopVideo() {
  player.stopVideo();
}

//could consider using an event handler function to re-play (loop) the video.

document.getElementsByTagName("body")[0].addEventListener(
  "touchstart",
  function () {
    player.playVideo();
    console.log("HEY");
  },
  false,
);
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/snwzaexm/7/)
