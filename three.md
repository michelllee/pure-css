# Three.JS

Website: https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
For testing: http://localhost:8080/three.html


## Creating a scene

```javascript
var scene = new THREE.Scene();

// (fieldOfView, aspectRatio, near, far)
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```

To display anthing we need 3 things:

- the scene
- our camera
- the renderer

### Code to create a cube?

```javascript
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
```

## Rendering a scene

Need a **render an animate loop** which looks like a function typically named `animate`:

```javascript
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
```

## Animating the cube

```javascript
function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();
```

https://webpack.js.org/guides/public-path/
https://webpack.js.org/guides/asset-management/#global-assets