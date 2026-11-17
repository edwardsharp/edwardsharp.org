---
kind: "code"
title: "a sphere meets a wireframe"
date: "2018-06-17T22:06:00.000Z"
date_precision: "second"
description: "a moving sphere pushes vertices out of a wireframe plane in a three.js collision experiment."
source: "https://jsfiddle.net/edwardsharp/mdxejn65/68/"
tags: ["jsfiddle","code","html","css","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-06-17-a-sphere-meets-a-wireframe-demo.html' | relative_url }}" title="jsfiddle / mdxejn65" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/three.js/93/three.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"></script>
<script src="//threejs.org/examples/js/controls/OrbitControls.js"></script>
```

## css

```css
body {
  background-color: black;
}
```

## javascript

```javascript
var scene = new THREE.Scene();

var width = 600;
var height = 400;
var aspect = width / height;
var near = 1;
var far = 1500;
var angle = 45; //19

var camera = new THREE.PerspectiveCamera(angle, aspect, near, far);
//camera.position.y=-100;
camera.position.z = 900;

var light = new THREE.PointLight(0xffffff);
light.position.x = 0;
light.position.y = 0;
light.position.z = 100;
scene.add(light);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI * 0.5;
controls.minDistance = 100;
controls.maxDistance = 1000;

var stats = new Stats();
stats.domElement.style.position = "absolute";
stats.domElement.style.bottom = "0px";
document.body.appendChild(stats.domElement);

var terrain;
var rotX = 90;
var rotZ = 0;
var vertz = 175;
var geometry = new THREE.PlaneGeometry(600, 600, vertz, vertz);
//random z verticies:
/* for(var index=0;index<geometry.vertices.length;index++){
    geometry.vertices[index].z = Math.floor((Math.random()*10)+1);
} */

var material = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: "#2ed2d8",
});

terrain = new THREE.Mesh(geometry, material);
terrain.overdraw = true;
terrain.rotation.x = rotX;
terrain.rotation.z = rotZ;
scene.add(terrain);

var spehere;
var ballPosition = new THREE.Vector3(0, 45, 0);
var ballSize = 40;
var ballGeo = new THREE.SphereBufferGeometry(ballSize, 32, 16);
var ballMaterial = new THREE.MeshLambertMaterial();
sphere = new THREE.Mesh(ballGeo, ballMaterial);
scene.add(sphere);

var animate = function () {
  requestAnimationFrame(animate);

  var diff = new THREE.Vector3();
  ballPosition.z = -Math.sin(Date.now() / 600) * 90; //+ 40;
  ballPosition.x = Math.cos(Date.now() / 400) * 70;
  for (i = 0; i < terrain.geometry.vertices.length; i++) {
    //var vertClone = terrain.geometry.vertices[i].clone();
    var pos = terrain.geometry.vertices[i];
    diff.subVectors(pos, ballPosition);

    if (diff.length() < ballSize) {
      // collided
      diff.normalize().multiplyScalar(ballSize);
      pos.copy(ballPosition).add(diff);
    }
  }
  terrain.geometry.verticesNeedUpdate = true;
  //terrain.geometry.normalsNeedUpdate = true;
  sphere.position.copy(ballPosition);

  renderer.render(scene, camera);
  stats.update();
};

animate();
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/edwardsharp/mdxejn65/68/)
