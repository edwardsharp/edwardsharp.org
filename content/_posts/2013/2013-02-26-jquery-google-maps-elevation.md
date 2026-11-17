---
kind: "code"
title: "jQuery + google maps + Elevation"
date: "2013-02-26T05:25:39.000Z"
date_precision: "second"
source: "https://jsfiddle.net/edwardsharp/w4E9D/"
tags: ["jsfiddle","code","jquery","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2013/2013-02-26-jquery-google-maps-elevation-demo.html' | relative_url }}" title="jQuery + google maps + Elevation" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

playing with google maps v3 events, jQuery, icons from [http://google-maps-icons.googlecode.com](http://google-maps-icons.googlecode.com)

## html

```html
<script src="//maps.google.com/maps/api/js?sensor=false&amp;.js"></script>
<div id="map"></div>
```

## css

```css
#map {
  width: 450px;
  height: 400px;
}
```

## javascript

```javascript
var map;
var elevator;
var myOptions = {
  zoom: 6,
  center: new google.maps.LatLng(46.87916, -3.3291),
  mapTypeId: "terrain",
};
map = new google.maps.Map($("#map")[0], myOptions);
var markers = [];

// Add a listener for idle event and call getElevation on a random set of marker in the bound
google.maps.event.addListener(map, "idle", function () {
  // Create an ElevationService
  elevator = new google.maps.ElevationService();
  $.each(markers, function (key, value) {
    value.setMap(null);
  });
  // getting bounds of current location
  var boundBox = map.getBounds();
  var southWest = boundBox.getSouthWest();
  var northEast = boundBox.getNorthEast();
  var lngSpan = northEast.lng() - southWest.lng();
  var latSpan = northEast.lat() - southWest.lat();
  // adding 20 markers to the map at random locations
  var locations = [];
  for (var j = 0; j < 10; j++) {
    var location = new google.maps.LatLng(
      southWest.lat() + latSpan * Math.random(),
      southWest.lng() + lngSpan * Math.random(),
    );
    locations.push(location);
  }

  // Create a LocationElevationRequest object using the array's one value
  var positionalRequest = {
    locations: locations,
  };

  elevator.getElevationForLocations(
    positionalRequest,
    function (results, status) {
      if (status === google.maps.ElevationStatus.OK) {
        $.each(results, function (key, value) {
          if (value.elevation < 0) {
            markers[key] = new google.maps.Marker({
              position: value.location,
              map: map,
              icon: "//google-maps-icons.googlecode.com/files/sailboat-tourism.png",
            });
          } else {
            markers[key] = new google.maps.Marker({
              position: value.location,
              map: map,
              icon:
                "//google-maps-icons.googlecode.com/files/red" +
                ("0" + key.toString()).slice(-2) +
                ".png",
            });
          }
        });
      }
    },
  );
});
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/w4E9D/)
