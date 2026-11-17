---
kind: "code"
title: "clipped text"
date: "2018-11-28T20:51:09.000Z"
date_precision: "second"
description: "a little overflow test, squeezing a long paragraph into a very small box."
source: "https://jsfiddle.net/edwardsharp/mcgjpqzw/2/"
tags: ["jsfiddle","code","html","css"]
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-11-28-clipped-text-demo.html' | relative_url }}" title="jsfiddle / mcgjpqzw" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<p>
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has
  roots in a piece of classical Latin literature from 45 BC, making it over 2000
  years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
  Virginia, looked up one of the more obscure Latin words, consectetur, from a
  Lorem Ipsum passage, and going through the cites of the word in classical
  literature, discovered the undoubtable source. Lorem Ipsum comes from sections
  1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
  and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
  of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
  "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
</p>
```

## css

```css
p {
  height: 50px;
  width: 110px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/mcgjpqzw/2/)
