---
kind: "code"
title: "nurbs surface controls"
date: "2018-11-06T17:22:19.000Z"
date_precision: "second"
description: "an orbitable three.js surface with sliders for moving its control points."
source: "https://jsfiddle.net/mg3ab5nk/36/"
tags: ["jsfiddle","code","html","javascript"]
---

<iframe class="code-demo" src="{{ '/content/media/2018/2018-11-06-nurbs-surface-controls-demo.html' | relative_url }}" title="jsfiddle / mg3ab5nk" width="100%" height="480" loading="lazy" sandbox="allow-scripts" referrerpolicy="no-referrer"></iframe>

## html

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/three.js/93/three.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js"></script>
<script src="//threejs.org/examples/js/controls/OrbitControls.js"></script>
<script src="//threejs.org/examples/js/curves/NURBSSurface.js"></script>
<script src="//threejs.org/examples/js/curves/NURBSUtils.js"></script>
<script src="//threejs.org/examples/js/libs/dat.gui.min.js"></script>
```

## javascript

```javascript
var gui = new dat.GUI();
var params = {
  v0_1_0: -200,
  v0_1_1: -200,
  v0_1_2: 100,
  v0_2_0: -200,
  v0_2_1: -100,
  v0_2_2: -200,
  v0_3_0: -200,
  v0_3_1: 100,
  v0_3_2: 250,
  v0_4_0: -200,
  v0_4_1: 200,
  v0_4_2: 250,

  v1_1_0: 0,
  v1_1_1: -200,
  v1_1_2: 0,
  v1_2_0: 0,
  v1_2_1: -100,
  v1_2_2: -100,
  v1_3_0: 0,
  v1_3_1: 100,
  v1_3_2: 150,
  v1_4_0: 0,
  v1_4_1: 200,
  v1_4_2: 0,

  v2_1_0: 200,
  v2_1_1: -200,
  v2_1_2: -100,
  v2_2_0: 200,
  v2_2_1: -100,
  v2_2_2: 200,
  v2_3_0: 200,
  v2_3_1: 100,
  v2_3_2: -250,
  v2_4_0: 200,
  v2_4_1: 200,
  v2_4_2: 100,
};
gui.add(params, "v0_1_0").min(-250).max(250).step(10);
gui.add(params, "v0_1_1").min(-250).max(250).step(10);
gui.add(params, "v0_1_2").min(-250).max(250).step(10);
gui.add(params, "v0_2_0").min(-250).max(250).step(10);
gui.add(params, "v0_2_1").min(-250).max(250).step(10);
gui.add(params, "v0_2_2").min(-250).max(250).step(10);
gui.add(params, "v0_3_0").min(-250).max(250).step(10);
gui.add(params, "v0_3_1").min(-250).max(250).step(10);
gui.add(params, "v0_3_2").min(-250).max(250).step(10);
gui.add(params, "v0_4_0").min(-250).max(250).step(10);
gui.add(params, "v0_4_1").min(-250).max(250).step(10);
gui.add(params, "v0_4_2").min(-250).max(250).step(10);

gui.add(params, "v1_1_0").min(-250).max(250).step(10);
gui.add(params, "v1_1_1").min(-250).max(250).step(10);
gui.add(params, "v1_1_2").min(-250).max(250).step(10);
gui.add(params, "v1_2_0").min(-250).max(250).step(10);
gui.add(params, "v1_2_1").min(-250).max(250).step(10);
gui.add(params, "v1_2_2").min(-250).max(250).step(10);
gui.add(params, "v1_3_0").min(-250).max(250).step(10);
gui.add(params, "v1_3_1").min(-250).max(250).step(10);
gui.add(params, "v1_3_2").min(-250).max(250).step(10);
gui.add(params, "v1_4_0").min(-250).max(250).step(10);
gui.add(params, "v1_4_1").min(-250).max(250).step(10);
gui.add(params, "v1_4_2").min(-250).max(250).step(10);

gui.add(params, "v2_1_0").min(-250).max(250).step(10);
gui.add(params, "v2_1_1").min(-250).max(250).step(10);
gui.add(params, "v2_1_2").min(-250).max(250).step(10);
gui.add(params, "v2_2_0").min(-250).max(250).step(10);
gui.add(params, "v2_2_1").min(-250).max(250).step(10);
gui.add(params, "v2_2_2").min(-250).max(250).step(10);
gui.add(params, "v2_3_0").min(-250).max(250).step(10);
gui.add(params, "v2_3_1").min(-250).max(250).step(10);
gui.add(params, "v2_3_2").min(-250).max(250).step(10);
gui.add(params, "v2_4_0").min(-250).max(250).step(10);
gui.add(params, "v2_4_1").min(-250).max(250).step(10);
gui.add(params, "v2_4_2").min(-250).max(250).step(10);

var container, stats;
var v1Inc = true;
var v1 = 0;
var v2Inc = true;
var v2 = 18;
var c1Inc = true;
var c1;
var object, camera, scene, renderer;

var nsControlPoints, nurbsSurface;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function getSurfacePoint(u, v, target) {
  return nurbsSurface.getPoint(u, v, target);
}
function init() {
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    5000,
  );
  camera.position.set(0, 150, 750);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  scene.add(new THREE.AmbientLight(0x808080));

  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  // NURBS surface

  // nsControlPoints = ;

  nurbsSurface = new THREE.NURBSSurface(
    2, //degree1
    3, //degree2
    [0, 0, 0, 1, 1, 1], //knots1
    [0, 0, 0, 0, 1, 1, 1, 1], //knots2
    [
      [
        new THREE.Vector4(-200, -200, 100, 1),
        new THREE.Vector4(-200, -100, -200, 1),
        new THREE.Vector4(-200, 100, 250, 1),
        new THREE.Vector4(-200, 200, -100, 1),
      ],
      [
        new THREE.Vector4(0, -200, 0, 1),
        new THREE.Vector4(0, -100, -100, 5),
        new THREE.Vector4(0, 100, 150, 5),
        new THREE.Vector4(0, 200, 0, 1),
      ],
      [
        new THREE.Vector4(200, -200, -100, 1),
        new THREE.Vector4(200, -100, 200, 1),
        new THREE.Vector4(200, 100, -250, 1),
        new THREE.Vector4(200, 200, 100, 1),
      ],
    ],
  );

  var geometry = new THREE.ParametricGeometry(getSurfacePoint, 150, 150); //ParametricBufferGeometry
  var material = new THREE.MeshLambertMaterial({
    side: THREE.DoubleSide,
    wireframe: true,
    color: "#2ed2d8",
  });

  object = new THREE.Mesh(geometry, material);
  object.position.set(-200, 100, 0);
  object.scale.multiplyScalar(5);
  scene.add(object);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  stats = new Stats();
  document.body.appendChild(stats.domElement);

  window.addEventListener("resize", onWindowResize, false);

  // controls
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = 100;
  controls.maxDistance = 5000;
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

console.log(nsControlPoints);
function animate() {
  requestAnimationFrame(animate);

  if (v1Inc) {
    v1 += 1;
    if (v1 > 20) {
      v1Inc = false;
    }
  } else {
    v1 -= 0.2;
    if (v1 <= 0) {
      v1Inc = true;
      v1 = 0;
    }
  }
  if (v2Inc) {
    v2 += 0.5;
    if (v2 > 20) {
      v2Inc = false;
    }
  } else {
    v2 -= 1;
    if (v2 <= 0) {
      v2Inc = true;
      v2 = 0;
    }
  }
  nurbsSurface = new THREE.NURBSSurface(
    2, //degree1
    3, //degree2
    [0, 0, 0, 1, 1, 1], //knots1
    [0, 0, 0, 0, 1, 1, 1, 1], //knots2
    [
      [
        new THREE.Vector4(params.v0_1_0, params.v0_1_1, params.v0_1_2, 1),
        new THREE.Vector4(params.v0_2_0, params.v0_2_1, params.v0_2_2, 1),
        new THREE.Vector4(params.v0_3_0, params.v0_3_1, params.v0_3_2, 1),
        new THREE.Vector4(params.v0_4_0, params.v0_4_1, params.v0_4_2, 1),
      ],
      [
        new THREE.Vector4(params.v1_1_0, params.v1_1_1, params.v1_1_2, 1),
        new THREE.Vector4(params.v1_2_0, params.v1_2_1, params.v1_2_2, v1),
        new THREE.Vector4(params.v1_3_0, params.v1_3_1, params.v1_3_2, v2),
        new THREE.Vector4(params.v1_4_0, params.v1_4_1, params.v1_4_2, 1),
      ],
      [
        new THREE.Vector4(params.v2_1_0, params.v2_1_1, params.v2_1_2, 1),
        new THREE.Vector4(params.v2_2_0, params.v2_2_1, params.v2_2_2, 1),
        new THREE.Vector4(params.v2_3_0, params.v2_3_1, params.v2_3_2, 1),
        new THREE.Vector4(params.v2_4_0, params.v2_4_1, params.v2_4_2, 1),
      ],
    ],
  );

  object.geometry.dispose();
  object.geometry = new THREE.ParametricGeometry(getSurfacePoint, 150, 150);
  // console.log(nsControlPoints[1][2]);
  // nsControlPoints[1][2] = Math.floor(Math.random()*6+1);
  // nsControlPoints[1][3] = Math.floor(Math.random()*6+1);
  // nurbsSurface = new THREE.NURBSSurface(degree1, degree2, knots1, knots2, nsControlPoints);

  // nsControlPoints = undefined;
  // console.log(nsControlPoints[0][1].w);
  object.geometry.verticesNeedUpdate = true;
  object.geometry.elementsNeedUpdate = true;
  object.geometry.morphTargetsNeedUpdate = true;
  object.geometry.uvsNeedUpdate = true;
  object.geometry.normalsNeedUpdate = true;
  object.geometry.colorsNeedUpdate = true;
  object.geometry.tangentsNeedUpdate = true;
  render();
  stats.update();
}

function render() {
  // group.rotation.y += ( targetRotation - group.rotation.y ) * 0.05;
  // object.rotation.y += 0.001;
  renderer.render(scene, camera);
}

console.log(object.geometry);
```

<p data-import-note="">this demo preserves the compiled output and may depend on external libraries or services that are no longer available.</p>

[original jsfiddle post](https://jsfiddle.net/mg3ab5nk/36/)
