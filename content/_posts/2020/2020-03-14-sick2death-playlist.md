---
kind: "code"
title: "sick2death playlist"
date: "2020-03-15T01:03:31.000Z"
date_precision: "second"
description: "an apple music playlist tucked into a responsive iframe."
source: "https://jsfiddle.net/edwardsharp/qzkvscho/"
tags: ["jsfiddle","code","html"]
---

<iframe class="code-demo" src="{{ '/content/media/2020/2020-03-14-sick2death-playlist-demo.html' | relative_url }}" title="jsfiddle / qzkvscho" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<iframe
  allow="autoplay *; encrypted-media *"
  frameborder="0"
  height="450"
  style="
    width: 100%;
    max-width: 660px;
    overflow: hidden;
    background: transparent;
  "
  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
  src="//embed.music.apple.com/us/playlist/sick2death/pl.u-RRbVYr5t38Wbqv"
></iframe>
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/qzkvscho/)
