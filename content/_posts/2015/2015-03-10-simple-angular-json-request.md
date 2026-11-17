---
kind: "code"
title: "simple angular json request"
date: "2015-03-10T19:12:49.000Z"
date_precision: "second"
description: "an angular request tester with selectable methods, sample endpoints, and a view of the response."
source: "https://jsfiddle.net/edwardsharp/uep1d3j4/"
tags: ["jsfiddle","code","angularjs","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2015/2015-03-10-simple-angular-json-request-demo.html' | relative_url }}" title="simple angular json request" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>
<p data-import-note="">an API key was removed from this archived example; some features need a replacement key.</p>

## html

{% raw %}

```html
<script src="//momentjs.com/downloads/moment.js"></script>
<div ng-app="">
  <div ng-controller="FetchCtrl">
    <button ng-click="updateModel('GET', 'http-hello.html')">Sample GET</button>
    <button ng-click="updateModel('GET', googleCalUrl())">GoogleCal</button>
    <button
      ng-click="updateModel('JSONP', '//angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')"
    >
      Sample JSONP
    </button>
    <button
      ng-click="updateModel('JSONP', '//angularjs.org/doesntexist&callback=JSON_CALLBACK')"
    >
      Invalid JSONP
    </button>
    <br />
    <select ng-model="method">
      <option>GET</option>
      <option>JSON</option>
      <option>JSONP</option>
    </select>
    <br />
    <input type="text" ng-model="url" size="80" />
    <button ng-click="fetch()">fetch</button><br />

    <pre>http status code: {{status}}</pre>
    <pre>http response data: {{data}}</pre>
  </div>

  <!-- http-hello.html -->
  <script type="text/ng-template" id="http-hello.html">
    Hello, $http! (in-line templates r kool!)
  </script>
</div>
```

{% endraw %}

## javascript

```javascript
function FetchCtrl($scope, $http, $templateCache) {
  $scope.method = "JSONP";
  $scope.url = "//ec2-54-225-22-193.compute-1.amazonaws.com/api/search";

  $scope.fetch = function () {
    $scope.code = null;
    $scope.response = null;

    $http({ method: $scope.method, url: $scope.url, cache: $templateCache })
      .success(function (data, status) {
        $scope.status = status;
        $scope.data = data;
      })
      .error(function (data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
      });
  };

  $scope.updateModel = function (method, url) {
    $scope.method = method;
    $scope.url = url;
  };

  $scope.googleCalUrl = function () {
    var start_date = new Date();
    var end_date = moment(new Date(start_date)).add(1, "days");
    var cal_id = "edward%40edwardsharp.net";
    var cal_api_key = "REDACTED_API_KEY";
    console.log("hey");
    return (
      "https://www.googleapis.com/calendar/v3/calendars/" +
      cal_id +
      "/events?singleEvents=true&orderBy=startTime&timeMin=" +
      start_date.toISOString() +
      "&timeMax=" +
      end_date.toISOString() +
      "&key=" +
      cal_api_key
    );
  };
}
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/uep1d3j4/)
