---
kind: "code"
title: "interview puzzle"
date: "2019-08-16T22:45:25.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/ozxhtdkn/68/"
tags: ["jsfiddle","code","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2019/2019-08-16-interview-puzzle-demo.html' | relative_url }}" title="interview puzzle" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

sum the number of connected segments of this matrix.

## css

```css
body {
  font-family: san-serrif;
}
```

## javascript

```javascript
/* so i failed this interview question; but i'm stubborn, tho.
 * :/
 * given the matrix below
 * find the 1 values that are clustered together:
 * either next to (left or right) or above or below.
 * then replace those 1 values with how many are clustered.
 */

const matrix = [
  [0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
];
let clusters = [];
let vertz = {};

function yyC(k, i) {
  k = parseInt(k);
  i = parseInt(i);
  //forward
  for (let z = i; z < 10; z++) {
    if (matrix[k][z]) {
      vertz[`${k}:${z}`] = 1;
    } else {
      break;
    }
  }
  //backward
  for (let z = i; z > -1; z--) {
    if (matrix[k][z]) {
      vertz[`${k}:${z}`] = 1;
    } else {
      break;
    }
  }
}

function zC(x, i) {
  //go up
  for (let k = x; k > -1; k--) {
    if (matrix[k][i]) {
      vertz[`${k}:${i}`] = 1;
      yyC(k, i);
    } else {
      break;
    }
  }
  //go down
  for (let k = x; k < 6; k++) {
    if (matrix[k][i]) {
      vertz[`${k}:${i}`] = 1;
      yyC(k, i);
    } else {
      break;
    }
  }
}

function yC(k, i) {
  k = parseInt(k);
  i = parseInt(i);
  //forward
  for (let z = i; z < 10; z++) {
    if (matrix[k][z]) {
      vertz[`${k}:${z}`] = 1;
      zC(k, z);
    } else {
      break;
    }
  }
  //backward
  for (let z = i; z > -1; z--) {
    if (matrix[k][z]) {
      vertz[`${k}:${z}`] = 1;
      zC(k, z);
    } else {
      break;
    }
  }
}

function xC(x, i) {
  //go up
  for (let k = x; k > -1; k--) {
    if (matrix[k][i]) {
      vertz[`${k}:${i}`] = 1;
      //also go forward/backward.
      yC(k, i);
    } else {
      break;
    }
  }
  //go down
  for (let k = x; k < 6; k++) {
    if (matrix[k][i]) {
      vertz[`${k}:${i}`] = 1;
      //also go forward/backward.
      yC(k, i);
    } else {
      break;
    }
  }
}

function nC(x, y) {
  x = parseInt(x);
  y = parseInt(y);
  vertz = {};

  //check here & go forward.
  for (let i = y; i < 10; i++) {
    if (matrix[x][i]) {
      vertz[`${x}:${i}`] = 1;
      xC(x, i);
    } else {
      break;
    }
  }
  //go backward.
  for (let i = y; i > -1; i--) {
    if (matrix[x][i]) {
      vertz[`${x}:${i}`] = 1;
      xC(x, i);
    } else {
      break;
    }
  }

  console.log(`${x}:${y} ${Object.keys(vertz).length} vertz:`, vertz);
  return Object.keys(vertz).length;
}

for (const x in matrix) {
  clusters[x] = [];
  for (const y in matrix[x]) {
    clusters[x][y] = matrix[x][y] === 1 ? nC(x, y) : 0;
  }
}
console.log(clusters);
for (let item of matrix) {
  document.body.innerHTML += `<div>${JSON.stringify(item)}</div>`;
}
document.body.innerHTML += "<hr>";
for (let fuck of clusters) {
  document.body.innerHTML += `<div>${JSON.stringify(fuck)}</div>`;
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/ozxhtdkn/68/)
