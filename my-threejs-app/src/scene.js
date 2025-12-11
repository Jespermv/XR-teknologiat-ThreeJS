//
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // light blue sky

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.set(5, 4, 6);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

const material = new THREE.MeshStandardMaterial({color: 0xffffff});

const bottom = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);
bottom.position.y = 1;
scene.add(bottom);

const middle = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
middle.position.y = 2.3;
scene.add(middle);

const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
head.position.y = 3.3;
scene.add(head);

const eyeMaterial = new THREE.MeshStandardMaterial({color: 0x000000});
const eyeGeom = new THREE.SphereGeometry(0.07, 16, 16);

const leftEye = new THREE.Mesh(eyeGeom, eyeMaterial);
leftEye.position.set(-0.17, 3.38, 0.45);
scene.add(leftEye);

const rightEye = new THREE.Mesh(eyeGeom, eyeMaterial);
rightEye.position.set(0.17, 3.38, 0.45);
scene.add(rightEye);

const noseMaterial = new THREE.MeshStandardMaterial({color: 0xffa500});
const nose = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.6, 16), noseMaterial);
nose.position.set(0, 3.25, 0.55);
nose.rotation.x = Math.PI / 2;
scene.add(nose);

const hatMaterial = new THREE.MeshStandardMaterial({color: 0x000000});

const hatBrim = new THREE.Mesh(
  new THREE.CylinderGeometry(0.7, 0.7, 0.1, 32),
  hatMaterial,
);
hatBrim.position.y = 3.7;
scene.add(hatBrim);

const hatTop = new THREE.Mesh(
  new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32),
  hatMaterial,
);
hatTop.position.y = 4.15;
scene.add(hatTop);

const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffffff, 1);
sun.position.set(5, 10, 7);
scene.add(sun);

const point = new THREE.PointLight(0xffffff, 0.5, 20);
point.position.set(-4, 3, -4);
scene.add(point);

const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const ground = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
