---
kind: "code"
title: "file api thing"
date: "2017-04-13T12:28:50.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/o2ysoqLe/"
tags: ["jsfiddle","code","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-04-13-file-api-thing-demo.html' | relative_url }}" title="file api thing" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

js for drag & drop file upload with FileApi

## html

```html
<div id="holder">upload shit!</div>
<p id="status">File API &nbsp; FileReader API not supported, sorry! :(</p>
```

## css

```css
#holder {
  border: 10px dashed #ccc;
  min-width: 300px;
  max-width: 100%;
  height: 150px;
  margin: 20px auto;
  padding-top: 0.5em;
  text-align: center;
  font-size: 3em;
}

#holder.hover {
  border: 10px dashed #333;
  background-color: white;
}
```

## javascript

```javascript
var holder = document.getElementById("holder"),
  state = document.getElementById("status");

if (typeof window.FileReader === "undefined") {
  state.className = "fail";
} else {
  state.className = "success";
  state.innerHTML = "";
}

holder.ondragover = function () {
  this.className = "hover";
  this.innerHTML = "drop here!";
  return false;
};
holder.ondragend = function () {
  this.className = "";
  this.innerHTML = "upload shit!";
  return false;
};
holder.ondrop = function (e) {
  this.className = "";
  this.innerHTML = "";
  e.preventDefault();

  var file = e.dataTransfer.files[0],
    reader = new FileReader();
  reader.onload = function (event) {
    console.log(event.target);
    holder.style.background =
      "url(" + event.target.result + ") no-repeat center";
  };
  console.log(file);
  reader.readAsDataURL(file);

  return false;
};
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/o2ysoqLe/)
