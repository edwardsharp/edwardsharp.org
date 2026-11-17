---
kind: "code"
title: "youtube looper tester"
date: "2014-01-06T17:42:52.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/rk8qb/4/"
tags: ["jsfiddle","code","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-youtube-looper-tester-demo.html' | relative_url }}" title="youtube looper tester" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

testing out the youtube js api

## html

```html
<div id="video1"></div>
<div id="clicker">CHANGE IT</div>
```

## css

```css
html,
body {
  width: 100%;
  height: 100%;
}

#video1 {
  margin: 0 auto;
  width: 600px;
  height: 283px;
  display: block;
}

#clicker {
  width: 100%;
  height: 100px;
  background: #ff6600;
  color: white;
  margin: 15px auto;
  padding-top: 50px;
  text-align: center;
}
```

## javascript

```javascript
// "mini library" starts here
var youTubeAPILoaded = false;

function loadYouTubeAPI(callBack) {
  if (!youTubeAPILoaded) {
    var tag = document.createElement("script");
    tag.src = "//www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubePlayerAPIReady = function () {
      youTubeAPILoaded = true;
      callBack();
    };
  } else {
    callBack();
  }
}

function showVideoByID(domElement, videoID) {
  loadYouTubeAPI(function () {
    if (!domElement.player) {
      domElement.player = new YT.Player(domElement, {
        height: "283",
        width: "600",
        videoId: videoID,
        playerVars: {
          rel: 0,
          autoplay: 1,
          loop: 1,
          playlist: videoID,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          wmode: "opaque",
        },
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    } else {
      //player.loadVideoById({videoId:String, startSeconds:Number, endSeconds:Number, suggestedQuality:String}):Void
      domElement.player.loadVideoById(videoID);
    }
    nowPlaying = player;
    currentPopup[0].previousLanguage = language;
  });
}
// end of "mini library"

var videoContainer = document.getElementById("video1");
showVideoByID(videoContainer, "NoDTqebi860");

var clicker = document.getElementById("clicker");
clicker.onclick = function () {
  showVideoByID(videoContainer, "fWZHAy8zOOA");
};

// when video ends
function onPlayerStateChange(event) {
  if (event.data === 0) {
    event.target.playVideo();
  }
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/rk8qb/4/)
