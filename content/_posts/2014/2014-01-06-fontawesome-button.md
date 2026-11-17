---
kind: "code"
title: "fontawesome button"
date: "2014-01-06T17:53:50.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/bnMEc/3/"
tags: ["jsfiddle","code","html","css"]
---

<iframe class="code-demo" src="{{ '/content/media/2014/2014-01-06-fontawesome-button-demo.html' | relative_url }}" title="fontawesome button" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

testing out buttons with glyphs

## html

```html
<link
  rel="stylesheet"
  href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css"
/>
<button type="submit" class="btn btn-large btn-danger">
  <i class="icon-key icon-3x pull-left way_left"></i> click to<br /><span
    class="button_txt_login"
    >login</span
  >
</button>
```

## css

```css
.btn {
  display: inline-block;
  padding: 5px 15px;

  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 22px;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;

  color: #333333;

  background-color: #f5f5f5;
  background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#ffffff),
    to(#e6e6e6)
  );
  background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
  background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);
  background-repeat: repeat-x;
  /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe6e6e6', GradientType=0); */
  border-color: #e6e6e6 #e6e6e6 #bfbfbf;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  /* filter: progid:DXImageTransform.Microsoft.gradient(enabled=false); */
  border: 1px solid #bbbbbb;
  border-bottom-color: #a2a2a2;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -webkit-box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
}
.btn:hover {
  background-color: #818181;
  background-image: -o-linear-gradient(top, #ffffff, #818181);
  background-image: linear-gradient(to bottom, #ffffff, #818181);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ff818181', GradientType=0);
}
.way_left {
  padding-right: 7px;
}
.button_txt_login {
  font-weight: bold;
  font-size: 1.3em;
}
a {
  color: #c83025;
  text-decoration: none;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/bnMEc/3/)
