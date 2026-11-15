---
title: "been said"
date: "2016-09-25T07:34:45.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-1kqux0cb/"
source_id: "1kqux0cb"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/1kqux0cb/"
source_revision: 19
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-25-jsfiddle-1kqux0cb-demo.html' | relative_url }}" title="been said" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

a youtube segment looper using the youtube iframe api & jquery ui slider

## html

```html
<link
  rel="stylesheet"
  href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css"
/>
<script src="//code.jquery.com/jquery-1.10.2.js"></script>
<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<pre class="jumb0">
 _                                _     _ 
| |                              (_)   | |
| |__   ___  ___ _ __   ___  __ _ _  __| |
| '_ \ / _ \/ _ \ '_ \ / __|/ _` | |/ _` |
| |_) |  __/  __/ | | |\__ \ (_| | | (_| |
|_.__/ \___|\___|_| |_||___/\__,_|_|\__,_|
</pre>

<div class="video_well">
  <div id="clicker" class="jumb0">
    <table>
      <thead>
        <tr>
          <td>phrase</td>
          <td>range</td>
          <td>video id</td>
          <td>loop</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" id="phrase" title="phrase" readonly />
          </td>
          <td>
            <input type="text" id="range" title="time range" readonly />
          </td>
          <td>
            <input type="text" id="video_id" title="youtube video id" />
          </td>
          <td>
            <input type="checkbox" id="loop" checked />
          </td>
        </tr>
      </tbody>
    </table>
    <div id="slider-range"></div>
  </div>
  <div id="player"></div>
</div>
```

## css

```css
html,
body {
  width: 100%;
  height: 100%;
  background: #000;
  color: white;
}

.video_well {
  margin: 10px auto;
  width: 335px;
  border: thin solid white;
  border-radius: 5px;
  padding: 5px;
}

.jumb0 {
  width: 320px;
  margin: 0 auto;
  text-align: center;
}

iframe {
  margin: 0 auto;
  display: block;
}

#video_id,
#range,
#phrase {
  border: thin solid white;
  border-radius: 2px;
  color: #fff;
  background-color: #000;
  font-weight: bold;
  padding: 2px;
}

#phrase {
  width: 100px;
}

#video_id {
  width: 80px;
}

#range {
  width: 85px;
}
```

## javascript

```javascript
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var vid = "6LFY0q484rc";
var startSeconds = 107.8;
var endSeconds = 110.8;
var duration;
var phrase = "lookin straight at me with sassy/saucy look on her face.";

// This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "195",
    width: "320",
    playerVars: {
      rel: 0,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      wmode: "opaque",
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  $("#video_id").val(vid);
  event.target.cueVideoById({
    videoId: vid,
    startSeconds: startSeconds,
    endSeconds: endSeconds,
  });
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  console.log("State change: " + event.data);
  if (event.target.getDuration()) {
    duration = event.target.getDuration();
    console.log("duration:" + duration);
    $("#slider-range").slider("option", "max", duration);
  }

  if (
    event.data === YT.PlayerState.ENDED &&
    player.getVideoLoadedFraction() > 0
  ) {
    if (document.getElementById("loop").checked) {
      event.target.seekTo(startSeconds);
    }
  }
}

$(function () {
  $("#loop").click(function () {
    if ($(this).is(":checked")) {
      player.seekTo(startSeconds);
      player.playVideo();
    }
  });

  $("#video_id").focusout(function () {
    if (vid != $(this).val() && $(this).val()) {
      vid = $(this).val();
      $("#phrase").val("");
      player.loadVideoById({
        videoId: vid,
      });
      player.playVideo();
    }
  });

  $("#phrase").val(phrase);
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: duration,
    step: 0.1,
    values: [startSeconds, endSeconds],
    slide: function (event, ui) {
      $("#range").val(ui.values[0] + " - " + ui.values[1]);
    },
    stop: function (event, ui) {
      startSeconds = ui.values[0];
      endSeconds = ui.values[1];
      player.loadVideoById({
        videoId: vid,
        startSeconds: startSeconds,
        endSeconds: endSeconds,
      });
      $("#range").val(startSeconds + " - " + endSeconds);
    },
  });
  $("#range").val(startSeconds + " - " + endSeconds);
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/1kqux0cb/)
