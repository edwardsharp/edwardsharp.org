---
title: "chat window thing"
description: "a compact chat-window mockup, pinned to the corner with a header, message area, and text box."
date: "2017-06-21T05:59:06.000Z"
date_precision: "second"
tags: ["jsfiddle","code","jquery","html","css"]
permalink: "/post/jsfiddle-jmwfLs4g/"
source_id: "jmwfLs4g"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/jmwfLs4g/2/"
source_revision: 2
---

<iframe class="code-demo" src="{{ '/content/media/2017/2017-06-21-jsfiddle-jmwfLs4g-demo.html' | relative_url }}" title="chat window thing" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div class="messenger">
  <div class="messenger_headerWrap">
    <span class="messenger-header">eeddee</span>
    <span class="messenger-actions">
      <span class="uiCloseSmall">&times</span>
    </span>
  </div>
  <div class="tbox">
    <div class="msgWrap_n"></div>
  </div>
  <div class="textareaWrap">
    <textarea class="nobr" name="chat"></textarea>
  </div>
</div>
```

## css

```css
body {
  font-family: "Segoe UI", "Lucida Grande", "Helvetica Neue", sans-serif;
}
.messenger {
  height: 350px;
  width: 270px;
  background: #fff;
  position: fixed;
  bottom: 50px;
  right: 20px;
  border-radius: 0 0 4px 4px;
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
}
.messenger:before {
  content: "";
  position: absolute;
  top: 100.1%;
  left: 214px;
  border-style: solid;
  border-width: 15px 13px 0;
  border-color: #a3a3a3 transparent;
  display: block;
  width: 0;
  z-index: 0;
}
.messenger:after {
  content: "";
  position: absolute;
  bottom: -14.4px;
  left: 215px;
  border-style: solid;
  border-width: 15px 12px 0;
  border-color: #f0f0f0 transparent;
  display: block;
  width: 0;
  z-index: 1;
}
.messenger_headerWrap {
  height: 35px;
  width: 100%;
  color: #fff;
  font-size: 15px;
  background: #333;
  vertical-align: middle;
}
.messenger-header {
  position: absolute;
  top: 7px;
  left: 7px;
  max-width: 200px;
}
.messenger-actions {
  position: absolute;
  right: 7px;
}
.tbox {
  height: 78.2%;
  width: 268px;
  border: 1px solid #a3a3a3;
  background: #fff;
  border-bottom: 0;
  font-size: 14px;
  overflow: auto;
}
.msgWrap_n {
  width: 238px;
  max-height: 245px;
  padding: 10px;
  position: relative;
  top: 5px;
}
.picWrap_u {
  height: 35px;
  width: 35px;
  background: #444;
  position: absolute;
  bottom: 15px;
  right: 20px;
  display: inline-block;
}
.msgWrap_u {
  width: 180px;
  min-height: 20px;
  color: #fff;
  position: relative;
  word-wrap: break-word;
}
.UIgBubble {
  padding: 5px;
  background: #0099cc;
  border: #1874cd solid 1px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  display: inline-block;
}
.UIgBubble:before {
  content: "";
  position: absolute;
  bottom: 5px;
  left: 100%;
  border-style: solid;
  border-width: 7px 0 7px 10px;
  border-color: transparent #1874cd;
  display: block;
  width: 0;
  z-index: 0;
}
.UIgBubble:after {
  content: "";
  position: absolute;
  bottom: 5px;
  right: -7px;
  border-style: solid;
  border-width: 7px 0 7px 10px;
  border-color: transparent #0099cc;
  display: block;
  width: 0;
  z-index: 1;
}
.textareaWrap {
  height: 35px;
  width: 268px;
  background: transparent;
}
.messenger-header,
.uiCloseSmall:hover {
  cursor: pointer;
}
textarea[name="chat"] {
  resize: none;
  height: 24px;
  width: 254px;
  padding: 7px;
  display: block;
  font-size: 14px;
  background: #f0f0f0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top: 1px solid #d3d3d3;
  border-left: 1px solid #a3a3a3;
  border-bottom: 1px solid #a3a3a3;
  border-right: 1px solid #a3a3a3;
}
textarea:hover {
  outline: none;
  border-color: #668cff;
  box-shadow: 0 0 1px #668cff;
}
textarea:focus {
  outline: none;
  border-color: #4d79ff;
  box-shadow: 0 0 2px #4d79ff;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/jmwfLs4g/2/)
