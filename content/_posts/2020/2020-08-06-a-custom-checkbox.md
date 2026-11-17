---
kind: "code"
title: "a custom checkbox"
date: "2020-08-07T03:35:41.000Z"
date_precision: "second"
description: "a simple checkbox dressed up with a drawn box, a cross, and a neatly aligned label."
source: "https://jsfiddle.net/edwardsharp/kx2r1yf6/12/"
tags: ["jsfiddle","code","html","css"]
---

<iframe class="code-demo" src="{{ '/content/media/2020/2020-08-06-a-custom-checkbox-demo.html' | relative_url }}" title="jsfiddle / kx2r1yf6" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<label id="exactMatchLabel">
  <input type="checkbox" />
  <span class="check"></span>
  <span class="label">Checkbox label text</span>
</label>
```

## css

```css
#exactMatchLabel {
  display: flex;
  align-items: center;
}

#exactMatchLabel input {
  display: none;
}

#exactMatchLabel span.check {
  height: 30px;
  width: 30px;
  border: 1px solid grey;
  display: inline-block;
  position: relative;
}

#exactMatchLabel [type="checkbox"]:checked + span.check:before {
  content: "\00d7";
  position: absolute;
  top: -14px;
  left: 2px;
  font-size: 45px;
}

#exactMatchLabel span.label {
  margin-left: 0.5em;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/kx2r1yf6/12/)
