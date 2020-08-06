import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// function main() {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
//     camera.position.set(-900, -200, -900);

//     var renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);


//     let controls = new OrbitControls(camera, renderer.domElement);
//     controls.addEventListener('change', (...props) => {
//         console.log({ props });
//     });
//     controls.minDistance = 500;
//     controls.maxDistance = 1500;
//     controls.update();


//     const sidesArray = ['ft', 'bk', 'up', 'dn', 'rt', 'lf'];
//     const textureArray = sidesArray.map(side => new THREE.TextureLoader().load(`/images/gloom_${side}.jpg`));
//     const materialArray = textureArray.map(texture => new THREE.MeshBasicMaterial({ map: texture }));

//     materialArray.forEach(material => { material.side = THREE.BackSide })

//     var skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
//     var skybox = new THREE.Mesh(skyboxGeo, materialArray);
//     scene.add(skybox);

//     document.body.appendChild(renderer.domElement);

// }

// document.addEventListener('DOMContentLoaded', () => {
//     main();
// })

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.autoClearColor = false;

    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();

    const scene = new THREE.Scene();

    {
        const color = '#ffffff';
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    function makeInstance(geometry, color, x) {
        const material = new THREE.MeshPhongMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;

        return cube;
    }

    const cubes = [
        makeInstance(geometry, 0xff0000, -2),
        makeInstance(geometry, 0x00ff00, 0),
        makeInstance(geometry, 0x0000ff, 2),
    ];

    const bgScene = new THREE.Scene();
    let bgMesh; {
        const loader = new THREE.TextureLoader();
        const texture = loader.load(
            '/images/tears_of_steel_bridge_2k.jpg',
        );
        texture.magFilter = THREE.LinearFilter;
        texture.minFilter = THREE.LinearFilter;

        const shader = THREE.ShaderLib.equirect;
        const material = new THREE.ShaderMaterial({
            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader,
            uniforms: shader.uniforms,
            depthWrite: false,
            side: THREE.BackSide,
        });
        material.uniforms.tEquirect.value = texture;
        const plane = new THREE.BoxBufferGeometry(2, 2, 2);
        bgMesh = new THREE.Mesh(plane, material);
        bgScene.add(bgMesh);
    }

    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render(time) {
        time *= 0.001;

        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        cubes.forEach((cube, ndx) => {
            const speed = 1 + ndx * .1;
            const rot = time * speed;
            cube.rotation.x = rot;
            cube.rotation.y = rot;
        });

        bgMesh.position.copy(camera.position);
        renderer.render(bgScene, camera);
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

main();