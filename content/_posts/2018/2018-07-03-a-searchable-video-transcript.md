---
kind: "code"
title: "a searchable video transcript"
date: "2018-07-03T16:52:31.000Z"
date_precision: "second"
description: "a video player paired with a searchable caption transcript and controls for stepping through matches."
source: "https://jsfiddle.net/edwardsharp/58xwq4ty/11/"
tags: ["jsfiddle","code","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-03-a-searchable-video-transcript-demo.html' | relative_url }}" title="jsfiddle / 58xwq4ty" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
<div class="player-container">
  <div id="player"></div>
  <div class="sidebar">
    <div id="searchbox" class="searchbox">
      <label for="search">Search</label>
      <span id="match" class="match">0 of 0</span>
      <input id="search" type="search" class="search" />
    </div>
    <div id="transcript" class="transcript"></div>
  </div>
</div>
```

## css

```css
body {
  background-color: black;
  color: white;
}

.player-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.sidebar {
  width: 360px;
  height: 360px;
  background-color: #000;
  color: white;
  font-family: Arial, sans-serif;
}

@media screen and (max-width: 1080px) {
  .sidebar {
    width: 640px;
    margin-bottom: 20px;
  }
}

.sidebar h3 {
  padding: 20px;
  margin: 0;
  font-size: 14px;
  color: #fff;
  text-align: left;
}

.searchbox {
  margin: 10px 20px;
  display: block;
  position: relative;
}

.searchbox input {
  line-height: 20px;
  font-size: 16px;
  color: #000;
  width: 100%;
  padding: 5px 20px 5px 30px;
  background: #fff
    url("//s3.amazonaws.com/demo.jwplayer.com/interactive-transcript/search.png")
    no-repeat top left;
  border-radius: 3px;
  border: none;
}

.searchbox .match {
  position: absolute;
  right: 10px;
  /* top: 20px; */
  line-height: 20px;
  font-size: 14px;
}

.transcript {
  padding: 20px;
  max-height: 80%;
  overflow: auto;
}

.transcript p {
  font-size: 15px;
  overflow: hidden;
  text-align: left;
  color: #fff;
  line-height: 20px;
}

.transcript span {
  display: inline;
  padding: 4px 2px;
  line-height: 24px;
  cursor: pointer;
  color: #fff;
}

.transcript span.current {
  background: #ff6600;
  color: #000;
}

.transcript span:not(.current):hover {
  color: #ff6600;
}

.transcript span em {
  font-style: normal;
  background: #666;
  color: #fff;
}

.transcript span em.current {
  background: #ff0046;
}

.transcript h4 {
  margin: 25px 0 15px 0;
  text-align: left;
  color: #fff;
  font-weight: bold;
}
```

## javascript

```javascript
var chapters = [];
var captions = [];
var caption = -1;
var matches = [];
var query = "";
var cycle = -1;

var transcript = document.getElementById("transcript");
var search = document.getElementById("search");
var match = document.getElementById("match");

// Setup JW Player
jwplayer("player").setup({
  file: "//content.jwplatform.com/manifests/3p683El7.m3u8",
  image: "//content.jwplatform.com/thumbs/3p683El7-640.jpg",
  tracks: [
    {
      file: "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt",
      kind: "chapters",
    },
    {
      file: "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt",
      kind: "captions",
    },
    {
      file: "//content.jwplatform.com/strips/3p683El7-120.vtt",
      kind: "thumbnails",
    },
  ],
  displaytitle: false,
  width: 640,
  height: 360,
});
jwplayer().addButton(
  "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/download.png",
  "Download Slides",
  function () {
    window.location.href =
      "//raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/state-html5-video.pdf";
  },
  "download",
);

// Load chapters / captions
jwplayer().on("ready", function () {
  var r = new XMLHttpRequest();
  r.onreadystatechange = function () {
    if (r.readyState == 4 && r.status == 200) {
      var t = r.responseText.split("\n\n");
      t.shift();
      for (var i = 0; i < t.length; i++) {
        var c = parse(t[i]);
        chapters.push(c);
      }
      loadCaptions();
    }
  };
  r.open(
    "GET",
    "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt",
    true,
  );
  r.send();
});
function loadCaptions() {
  var r = new XMLHttpRequest();
  r.onreadystatechange = function () {
    if (r.readyState == 4 && r.status == 200) {
      var t = r.responseText.split("\n\n");
      t.shift();
      var h = "<p>";
      var s = 0;
      for (var i = 0; i < t.length; i++) {
        var c = parse(t[i]);
        if (s < chapters.length && c.begin > chapters[s].begin) {
          h += "</p><h4>" + chapters[s].text + "</h4><p>";
          s++;
        }
        h += "<span id='caption" + i + "'>" + c.text + "</span>";
        captions.push(c);
      }
      transcript.innerHTML = h + "</p>";
    }
  };
  r.open(
    "GET",
    "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt",
    true,
  );
  r.send();
}
function parse(d) {
  var a = d.split("\n");
  var i = a[1].indexOf(" --> ");
  var t = a[2];
  if (a[3]) {
    t += " " + a[3];
  }
  t = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return {
    begin: seconds(a[1].substr(0, i)),
    btext: a[1].substr(3, i - 7),
    end: seconds(a[1].substr(i + 5)),
    text: t,
  };
}
function seconds(s) {
  var a = s.split(":");
  var r = Number(a[a.length - 1]) + Number(a[a.length - 2]) * 60;
  if (a.length > 2) {
    r += Number(a[a.length - 3]) * 3600;
  }
  return r;
}

// Highlight current caption and chapter
jwplayer().on("time", function (e) {
  var p = e.position;
  for (var j = 0; j < captions.length; j++) {
    if (captions[j].begin < p && captions[j].end > p) {
      if (j != caption) {
        var c = document.getElementById("caption" + j);
        if (caption > -1) {
          document.getElementById("caption" + caption).className = "";
        }
        c.className = "current";
        if (query == "") {
          transcript.scrollTop = c.offsetTop - transcript.offsetTop - 40;
        }
        caption = j;
      }
      break;
    }
  }
});

// Hook up interactivity
transcript.addEventListener("click", function (e) {
  if (e.target.id.indexOf("caption") == 0) {
    var i = Number(e.target.id.replace("caption", ""));
    jwplayer().seek(captions[i].begin);
  }
});
search.addEventListener("focus", function (e) {
  setTimeout(function () {
    search.select();
  }, 100);
});
search.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    resetSearch();
  } else if (e.keyCode == 13) {
    var q = this.value.toLowerCase();
    if (q.length > 0) {
      if (q == query) {
        if (cycle >= matches.length - 1) {
          cycleSearch(0);
        } else {
          cycleSearch(cycle + 1);
        }
      } else {
        resetSearch();
        searchTranscript(q);
      }
    } else {
      resetSearch();
    }
  }
});

// Execute search
function searchTranscript(q) {
  matches = [];
  query = q;
  for (var i = 0; i < captions.length; i++) {
    var m = captions[i].text.toLowerCase().indexOf(q);
    if (m > -1) {
      document.getElementById("caption" + i).innerHTML =
        captions[i].text.substr(0, m) +
        "<em>" +
        captions[i].text.substr(m, q.length) +
        "</em>" +
        captions[i].text.substr(m + q.length);
      matches.push(i);
    }
  }
  if (matches.length) {
    cycleSearch(0);
  } else {
    resetSearch();
  }
}
function cycleSearch(i) {
  if (cycle > -1) {
    var o = document.getElementById("caption" + matches[cycle]);
    o.getElementsByTagName("em")[0].className = "";
  }
  var c = document.getElementById("caption" + matches[i]);
  c.getElementsByTagName("em")[0].className = "current";
  match.innerHTML = i + 1 + " of " + matches.length;
  transcript.scrollTop = c.offsetTop - transcript.offsetTop - 40;
  cycle = i;
}
function resetSearch() {
  if (matches.length) {
    for (var i = 0; i < captions.length; i++) {
      document.getElementById("caption" + i).innerHTML = captions[i].text;
    }
  }
  query = "";
  matches = [];
  match.innerHTML = "0 of 0";
  cycle = -1;
  transcript.scrollTop = 0;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/58xwq4ty/11/)
