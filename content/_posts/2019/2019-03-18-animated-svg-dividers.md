---
kind: "code"
title: "animated svg dividers"
date: "2019-03-19T02:47:58.000Z"
date_precision: "second"
description: "thin svg lines slide into place at different speeds, making a shifting banner divider."
source: "https://jsfiddle.net/edwardsharp/v8k4wbjn/30/"
tags: ["jsfiddle","code","html","css","svg","animation"]
---

<iframe class="code-demo" src="{{ '/content/media/2019/2019-03-18-animated-svg-dividers-demo.html' | relative_url }}" title="jsfiddle / v8k4wbjn" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<svg class="project-banner-separator" viewBox="0 0 440 35">
  <line x1="0" y1="-10" x2="440" y2="-10" stroke="white" stroke-width="0.5">
    <animate attributeName="y1" dur="100ms" to="30" fill="freeze" />
    <animate attributeName="y2" dur="200ms" to="5" fill="freeze" />
  </line>
  <line x1="0" y1="-10" x2="440" y2="-10" stroke="white" stroke-width="0.5">
    <animate attributeName="y1" dur="300ms" to="25" fill="freeze" />
    <animate attributeName="y2" dur="400ms" to="20" fill="freeze" />
  </line>
  <line x1="0" y1="-10" x2="440" y2="-10" stroke="white" stroke-width="0.5">
    <animate attributeName="y1" dur="500ms" to="5" fill="freeze" />
    <animate attributeName="y2" dur="600ms" to="35" fill="freeze" />
  </line>
</svg>
```

## css

```css
body {
  margin-top: 50px;
  background: black;
}
/* .project-banner-separator line{
  animation: slidein 2s ease-in;
}
.project-banner-separator:nth-child(2){
  animation-delay: 0.3s;
}
.project-banner-separator:nth-child(3){
  animation-delay: 0.5s;
}
@keyframes slidein {
  from {
    transform: translateY(-200px);
  }
  
  to {
    transform: translateY(0);
  }
} */
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/v8k4wbjn/30/)
