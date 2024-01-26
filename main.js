import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff)
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );

const lights = new THREE.AmbientLight(0x404040,100)
scene.add(lights)

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.z = 100;

let loader = new GLTFLoader();

loader.load('/models/Mig/scene.gltf', 
		function(gltf){
          scene.add(gltf.scene);
		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset;
        });
		
		function animate() {
			requestAnimationFrame( animate );
			
			// cube.rotation.x += 0.01;
			// cube.rotation.y += 0.01;
			camera.position.x += 0.05
			camera.position.y += 0.05
			camera.position.z += 0.05

			controls.update();
			
			renderer.render( scene, camera );
		}
	animate();
		
		
