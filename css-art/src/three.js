import * as THREE from 'three';
import './three.scss';

const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Creates a cube?
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x8B0000 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    renderer.render(scene, camera);
}
animate();

document.body.appendChild(renderer.domElement);