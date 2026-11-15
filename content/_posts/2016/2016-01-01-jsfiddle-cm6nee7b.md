---
title: "Angular Sortable Demo"
description: "an angular sortable list logs its item order during dragging and again when sorting stops."
date: "2016-01-01T05:39:28.000Z"
date_precision: "second"
tags: ["jsfiddle","code","angularjs","html","css","javascript","jquery"]
permalink: "/post/jsfiddle-cm6nee7b/"
source_id: "cm6nee7b"
kind: "code"
source_platform: "jsfiddle"
source_url: "https://jsfiddle.net/edwardsharp/cm6nee7b/1/"
source_revision: 1
---

<iframe class="code-demo" src="{{ '/content/media/2016/2016-01-01-jsfiddle-cm6nee7b-demo.html' | relative_url }}" title="Angular Sortable Demo" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

{% raw %}

```html
<script src="//rawgithub.com/angular-ui/ui-sortable/master/src/sortable.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<div ng-app="sortableApp" ng-controller="sortableController" class="container">
  <h2>ui.sortable demo</h2>

  <div class="floatleft">
    <ul ui-sortable="sortableOptions" ng-model="list" class="list">
      <li ng-repeat="item in list" class="item">{{item.text}}</li>
    </ul>
  </div>

  <div class="floatleft" style="margin-left: 20px">
    <ul class="list logList">
      <li ng-repeat="entry in sortingLog track by $index" class="logItem">
        {{entry}}
      </li>
    </ul>
  </div>

  <div class="clear"></div>
</div>
```

{% endraw %}

## css

```css
.list {
  list-style: none outside none;
  margin: 10px 0 30px;
}

.item {
  width: 200px;
  padding: 5px 10px;
  margin: 5px 0;
  border: 2px solid #444;
  border-radius: 5px;
  background-color: #ea8a8a;

  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  cursor: move;
}

/***  Extra ***/

body {
  font-family: Verdana, "Trebuchet ms", Tahoma;
}

.logList {
  margin-top: 20px;
  width: 250px;
  min-height: 200px;
  padding: 5px 15px;
  border: 5px solid #000;
  border-radius: 15px;
}

.logList:before {
  content: "log";
  padding: 0 5px;
  position: relative;
  top: -1.1em;
  background-color: #fff;
}

.container {
  width: 600px;
  margin: auto;
}

h2 {
  text-align: center;
}

.floatleft {
  float: left;
}

.clear {
  clear: both;
}
```

## javascript

```javascript
var myapp = angular.module("sortableApp", ["ui.sortable"]);

myapp.controller("sortableController", function ($scope) {
  var tmpList = [];

  for (var i = 1; i <= 6; i++) {
    tmpList.push({
      text: "Item " + i,
      value: i,
    });
  }

  $scope.list = tmpList;

  $scope.sortingLog = [];

  $scope.sortableOptions = {
    update: function (e, ui) {
      var logEntry = tmpList
        .map(function (i) {
          return i.value;
        })
        .join(", ");
      $scope.sortingLog.push("Update: " + logEntry);
    },
    stop: function (e, ui) {
      // this callback has the changed model
      var logEntry = tmpList
        .map(function (i) {
          return i.value;
        })
        .join(", ");
      $scope.sortingLog.push("Stop: " + logEntry);
    },
  };
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/cm6nee7b/1/)
