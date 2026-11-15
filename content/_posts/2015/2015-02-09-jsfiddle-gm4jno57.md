---
title: "an angular jsonp callback"
description: "a small angular experiment requesting wordpress posts through a jsonp callback."
date: "2015-02-09T03:39:38.000Z"
date_precision: "second"
tags: ["jsfiddle","code","angularjs","html","javascript"]
permalink: "/post/jsfiddle-gm4jno57/"
source_id: "gm4jno57"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/gm4jno57/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-02-09-jsfiddle-gm4jno57-demo.html' | relative_url }}" title="jsfiddle / gm4jno57" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<div ng-app ng-controller="jsonp_thingy">
  <button ng-click="doRequest()">Make JSONP request</button>
</div>
```

## javascript

```javascript
// pop open yr console

function jsonp_callback(data) {
  // returning from async callbacks is (generally) meaningless
  console.log(data.found);
}

function jsonp_thingy($scope, $http) {
  $scope.doRequest = function () {
    var url =
      "//public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback";

    $http.jsonp(url);
  };

  var url =
    "//public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback";

  $http.jsonp(url);
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/gm4jno57/)
