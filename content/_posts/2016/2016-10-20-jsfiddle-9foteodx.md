---
title: "polyfiddle"
date: "2016-10-20T11:15:55.000Z"
date_precision: "second"
tags: ["jsfiddle","code","html","css","canvas"]
permalink: "/post/jsfiddle-9foteodx/"
source_id: "9foteodx"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/9foteodx/"
source_revision: 8
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-10-20-jsfiddle-9foteodx-demo.html' | relative_url }}" title="polyfiddle" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

query selector troubles :/

## html

{% raw %}

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.8/fabric.min.js"></script>
<base href="//polygit.org/components/" />
<script src="webcomponentsjs/webcomponents-lite.min.js"></script>
<link href="polymer/polymer.html" rel="import" />

<dom-module id="x-example">
  <template>
    <h1>polyfiddle</h1>
    <div id="objectTools" hidden$="{{objectToolsHidden}}">
      <h1>object toolz!</h1>
    </div>
    <canvas id="c" width="400" height="400"></canvas>
  </template>
  <script>
    Polymer({
      is: "x-example",
      properties: {
        canvas: Object,
        objectToolsHidden: {
          type: Boolean,
          notify: true,
          value: true,
        },
      },
      _onObjectSelected: function (e) {
        //hmm, this is the canvas elem... (???)
        this.set("objectToolsHidden", false);
      },
      _onSelectionCleared: function (e) {
        this.set("objectToolsHidden", true);
      },
      ready: function () {
        this.canvas = new fabric.Canvas(this.$.c);
        var rect = new fabric.Rect({
          top: 100,
          left: 100,
          width: 60,
          height: 70,
          fill: "black",
        });

        this.canvas.add(rect);

        this.canvas.on({
          "object:selected": this._onObjectSelected.bind(this),
          "selection:cleared": this._onSelectionCleared.bind(this),
        });
      },
    });
  </script>
</dom-module>

<x-example></x-example>
```

{% endraw %}

## css

```css
body {
  font-family: sans-serif;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/9foteodx/)
