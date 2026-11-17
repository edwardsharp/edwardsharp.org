---
kind: "code"
title: "useInterval"
date: "2020-04-28T17:13:56.000Z"
date_precision: "second"
description: "a react interval hook that keeps its callback current and cleans up the timer between runs."
source: "https://jsfiddle.net/edwardsharp/e0y3rq29/"
tags: ["jsfiddle","code","html","css","javascript","react"]
---

<iframe class="code-demo" src="{{ '/content/media/2020/2020-04-28-useinterval-demo.html' | relative_url }}" title="useInterval" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div id="app"></div>
```

## css

```css
body {
  background: #666;
  padding: 20px;
  font-family: sans-serrif;
  font-size: 2em;
  color: white;
}

button {
  margin-left: 1em;
  background-color: #000;
  border-color: #000;
  color: white;
  font-size: 1em;
}
button:hover {
  color: #eeddee;
  border: inset 1px #eeddee;
}
```

## javascript

```javascript
function useInterval(callback, delay) {
  const cbRef = React.useRef(callback);
  React.useEffect(() => {
    cbRef.current = callback;
  }, [callback]);
  React.useEffect(() => {
    function tick() {
      cbRef.current();
    }
    const id = window.setInterval(tick, delay);
    return () => window.clearInterval(id);
  }, [delay]);
}

function HelloWorld() {
  useInterval(() => console.log("yo"), 100);
  useInterval(() => console.log("yo dawg"), 100);

  return <div>see console.log</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("#app"));
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/e0y3rq29/)
