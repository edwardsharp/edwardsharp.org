---
kind: "code"
title: "an a-player embed"
date: "2018-07-06T20:35:01.000Z"
date_precision: "second"
description: "a custom video-player element supplied with a stream, a poster image, and a caption file."
source: "https://jsfiddle.net/edwardsharp/d4bf12cj/8/"
tags: ["jsfiddle","code","html","css"]
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-06-an-a-player-embed-demo.html' | relative_url }}" title="jsfiddle / d4bf12cj" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
<script src="//unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
<script src="//unpkg.com/@edwardsharp/a-player@0.0.5/dist/main.bundle.js"></script>
<a-player
  height="225"
  width="400"
  file="https://player.vimeo.com/external/274956993.m3u8?s=b1d06838d9eb645d303020011d447c8fe69acf72"
  image="https://i.vimeocdn.com/video/707121198.webp"
  captions-file="https://edwardsharp.github.io/a-player/How_do_I_answer_and_end_calls.vtt"
></a-player>
```

## css

```css
  background: #0095D6;
      color: white;
    }
    .transcript span:not(.current):hover {
      color: #0095D6;
    }
    .searchbox input {
      border: thin solid gray;
    }
    /* search results */
    .transcript span em.current {
      background: red;
      color: white;
    }
```

<p data-import-note="">css snippet could not be formatted; original code is shown</p>
<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/d4bf12cj/8/)
