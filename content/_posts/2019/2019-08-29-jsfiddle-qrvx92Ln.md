---
title: "these chainz of promise"
date: "2019-08-29T15:26:08.000Z"
date_precision: "second"
tags: ["jsfiddle","code","css","javascript"]
permalink: "/post/jsfiddle-qrvx92Ln/"
source_id: "qrvx92Ln"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/qrvx92Ln/10/"
source_revision: 10
---

<iframe class="code-demo" src="{{ '/content/media/2019/2019-08-29-jsfiddle-qrvx92Ln-demo.html' | relative_url }}" title="these chainz of promise" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

come to me, cover me, hold me together we'll break these chains of promise don't give up, don't give up together with me and my baby break the chains of promise

## css

```css
body {
  color: white;
  background: black;
}
```

## javascript

```javascript
log = (msg) => {
  document.body.innerHTML += `<pre>${msg}</pre>`;
  return msg;
};

aPromise = (timeout, fail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject();
      } else {
        resolve();
      }
    }, timeout);
  });
};

fetchStuff = () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      aPromise(1, false).then(() => log(1)),
      aPromise(50, false).then(() => log(2)),
      false,
      aPromise(100, true)
        .then(() => log(3))
        .catch(() => log("WARN! 3 caught")),
      aPromise(150, false).then(() => log(4)),
    ]).then((stuff) => resolve(stuff));
  });
};

fetchStuff()
  .then((stuff) => log("fetchd stuff: " + stuff))
  .catch(() => log("WARN! fetchStuff caught!"));
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/qrvx92Ln/10/)
