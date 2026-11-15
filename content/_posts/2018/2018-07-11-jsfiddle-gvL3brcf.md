---
title: "a tic-tac-toe winner check"
description: "an experiment in checking rows and columns for a winner on a tic-tac-toe board."
date: "2018-07-11T19:28:15.000Z"
date_precision: "second"
tags: ["jsfiddle","code","javascript"]
permalink: "/post/jsfiddle-gvL3brcf/"
source_id: "gvL3brcf"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/gvL3brcf/62/"
source_revision: 62
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-07-11-jsfiddle-gvL3brcf-demo.html' | relative_url }}" title="jsfiddle / gvL3brcf" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## javascript

```javascript
//pass a representation of tic tac board
//does this board have a winner? respond yes/no.

//does not to be valid state.
var board = [
  ["O", "-", "-"],
  ["X", "-", "X"],
  ["-", "X", "O"],
];

function checkSpace(x, y, z) {
  return board[x][y] == z;
}

function checkWin() {
  var wins = {
    horz: { x: [], o: [] },
    vert: { x: [], o: [] },
    diag: { x: [], o: [] },
  };
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      //check horz
      if (checkSpace(i, j, "X")) {
        wins.horz.x.push("win!");
      }
      if (checkSpace(i, j, "O")) {
        wins.horz.o.push("win!");
      }

      // check vertz
      if (checkSpace(j, i, "X")) {
        wins.vert.x.push("win!");
      }
      if (checkSpace(j, i, "O")) {
        wins.vert.o.push("win!");
      }

      /*     if(checkSpace(i,i,'X')){
        wins.diag.x.push('win!');
      }
      if(checkSpace(i,i,'O')){
        wins.diag.o.push('win!');
      } */

      /* if(checkSpace(j,j,'X')){
        wins.diag.x.push('win!');
      }
      if(checkSpace(j,j,'O')){
        wins.diag.o.push('win!');
      } */
    }
  }

  console.log("wins:", wins);
  if (wins.horz.x.length >= 3) {
    return "win horz X!";
  }
  if (wins.horz.o.length >= 3) {
    return "win horz O!";
  }
  if (wins.vert.x.length >= 3) {
    return "win vert X!";
  }
  if (wins.vert.o.length >= 3) {
    return "win vert O!";
  }
  if (wins.diag.x.length >= 3) {
    return "win diag X!";
  }
  if (wins.diag.o.length >= 3) {
    return "win diag O!";
  }

  // check diag
  /*  if( checkSpace(0,0,'X') 
    && checkSpace(1,1,'X')
    && checkSpace(2,2,'X')
  ){
    return 'win X! 6';
  }
  
  if( checkSpace(0,0,'O') 
    && checkSpace(1,1,'O')
    && checkSpace(2,2,'O')
  ){
    return 'win O! 6';
  }
  
  if( checkSpace(0,2,'X') 
    && checkSpace(1,1,'X')
    && checkSpace(2,0,'X')
  ){
    return 'win X! 7';
  }
  
  if( checkSpace(0,2,'O') 
    && checkSpace(1,1,'O')
    && checkSpace(2,0,'O')
  ){
    return 'win O! 7';
  }
   */
  return "no";
}

console.log(checkWin());
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/gvL3brcf/62/)
