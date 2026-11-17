---
kind: "code"
title: "youtube segment player"
date: "2015-12-29T12:26:27.000Z"
date_precision: "second"
description: "a youtube-player experiment built around very short segments from different points in one video."
source: "https://jsfiddle.net/edwardsharp/s9n2tpdf/"
tags: ["jsfiddle","code","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-12-29-youtube-segment-player-demo.html' | relative_url }}" title="youtube segment player" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div id="clicker"></div>
<div id="player"></div>
```

## css

```css
html,
body {
  width: 100%;
  height: 100%;
}

#clicker {
  width: 100%;
  height: 100px;
  background: #000;
  color: white;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
}
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
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

var videos = [
  {
    vid: "0Lu_WHn2tks",
    startSeconds: 10,
    endSeconds: 10.9,
  },
  {
    vid: "0Lu_WHn2tks",
    startSeconds: 150,
    endSeconds: 151,
  },
  {
    vid: "0Lu_WHn2tks",
    startSeconds: 666,
    endSeconds: 666.6,
  },
  {
    vid: "0Lu_WHn2tks",
    startSeconds: 671,
    endSeconds: 672,
  },
];
var index = 0;
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.cueVideoById({
    videoId: videos[index].vid,
    startSeconds: videos[index].startSeconds,
    endSeconds: videos[index].endSeconds,
  });
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  console.log("State change: " + event.data + " for index: " + index);

  if (
    event.data === YT.PlayerState.ENDED &&
    player.getVideoLoadedFraction() > 0
  ) {
    console.log(index);
    if (index < videos.length - 1) {
      index++;
      event.target.loadVideoById({
        videoId: videos[index].vid,
        startSeconds: videos[index].startSeconds,
        endSeconds: videos[index].endSeconds,
      });
    }
  }
}

var clicker = document.getElementById("clicker");
clicker.onclick = function () {
  console.log("hey hey");
};
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/s9n2tpdf/)
