---
kind: "code"
title: "Angular Sortable Demo"
date: "2015-06-03T02:49:57.000Z"
date_precision: "second"
description: "an angular list keeps its array in step with drag-and-drop sorting and newly added items."
source: "https://jsfiddle.net/edwardsharp/k5eeL5qd/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-06-02-angular-sortable-demo-demo.html' | relative_url }}" title="Angular Sortable Demo" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//code.angularjs.org/1.0.0rc10/angular-1.0.0rc10.js"></script>
<div ng-controller="SortableCTRL">
  <ul id="sortable">
    <li ng-repeat="item in sortableArray" ng-bind="item"></li>
  </ul>

  <button ng-click="add()">Add</button>
  <hr />
  <pre ng-bind="sortableArray|json"></pre>
</div>
```

## css

```css
li {
  padding: 5px;
  border: 1px solid #999;
  background: #eee;
  margin: 5px;
  cursor: move;
}
```

## javascript

```javascript
function SortableCTRL($scope) {
  var sortableEle;

  $scope.sortableArray = ["Zero", "One", "Two"];

  $scope.add = function () {
    $scope.sortableArray.push("Item: " + $scope.sortableArray.length);

    sortableEle.refresh();
  };

  $scope.dragStart = function (e, ui) {
    ui.item.data("start", ui.item.index());
  };
  $scope.dragEnd = function (e, ui) {
    var start = ui.item.data("start"),
      end = ui.item.index();

    $scope.sortableArray.splice(
      end,
      0,
      $scope.sortableArray.splice(start, 1)[0],
    );

    $scope.$apply();
  };

  sortableEle = $("#sortable").sortable({
    start: $scope.dragStart,
    update: $scope.dragEnd,
  });
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/k5eeL5qd/)
