---
title: "Material Floating Labels"
description: "form labels float above their fields on focus and stay there when the fields contain text."
date: "2016-09-20T20:45:25.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
permalink: "/post/jsfiddle-mx8td67n/"
source_id: "mx8td67n"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/mx8td67n/6/"
source_revision: 6
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-09-20-jsfiddle-mx8td67n-demo.html' | relative_url }}" title="Material Floating Labels" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<link rel="stylesheet" href="//bootswatch.com/paper/bootstrap.css" />
<div class="form-group">
  <label class="control-label" for="inputNormal">Normal input</label>
  <input
    type="text"
    class="form-control"
    id="inputNormal"
    placeholder="Placeholder text"
  />
</div>

<div class="form-group">
  <label class="control-label" for="textArea">Text area</label>
  <textarea class="form-control" id="textArea"></textarea>
</div>
```

## css

```css
body {
  padding: 20px;
}

/* --- material floating label --- */

.form-group {
  display: flex;
  min-height: 55px;
}
.form-group textarea {
  margin-top: 15px;
}

.control-label {
  font-size: 16px;
  font-weight: 400;
  opacity: 0.4;
  pointer-events: none;
  position: absolute;
  transform: translate3d(0, 22px, 0) scale(1);
  transform-origin: left top;
  transition: 240ms;
}

.form-group.focused .control-label {
  opacity: 1;
  transform: scale(0.75);
}

.form-control {
  align-self: flex-end;
}

.form-control::-webkit-input-placeholder {
  color: transparent;
  transition: 240ms;
}
.form-control::-mox-placeholder {
  color: transparent;
}

.form-control:focus::-webkit-input-placeholder {
  transition: none;
}
```

## javascript

```javascript
$(".form-control")
  .on("focus blur", function (e) {
    $(this)
      .parents(".form-group")
      .toggleClass("focused", e.type === "focus" || this.value.length > 0);
  })
  .trigger("blur");
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/mx8td67n/6/)
