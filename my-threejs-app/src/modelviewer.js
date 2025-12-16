import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1a);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(5, 5, 5);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;

scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

let model = null;
const hotspots = [];
let variantIndex = 0;

const loader = new GLTFLoader();

loader.load('./models/scene.gltf', (gltf) => {
  model = gltf.scene;
  scene.add(model);

  const bbox = new THREE.Box3().setFromObject(model);
  camera.position.z = bbox.getSize(new THREE.Vector3()).length();

  model.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  console.log('Model loaded');
});

function addHotspot(position, label) {
  const hotspot = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 16, 16),
    new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.7,
    }),
  );
  hotspot.position.copy(position);
  hotspot.userData.label = label;
  scene.add(hotspot);
  hotspots.push(hotspot);
}

function createUI() {
  const container = document.createElement('div');
  container.id = 'ui-container';
  container.style.cssText = `
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 40px;
    border-radius: 8px;
    font-family: Arial;
    z-index: 100;
    min-width: 350px;
  `;

  const title = document.createElement('h2');
  title.textContent = 'Model Viewer';
  title.style.margin = '0 0 15px 0';
  title.style.fontSize = '20px';
  container.appendChild(title);

  const variantBtn = document.createElement('button');
  variantBtn.textContent = 'Variant: Standard';
  variantBtn.style.cssText = `
    display: block;
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  `;
  variantBtn.onclick = toggleVariant;
  container.appendChild(variantBtn);

  const infoBox = document.createElement('div');
  infoBox.id = 'info-box';
  infoBox.style.cssText = `
    margin-top: 10px;
    padding: 10px;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
    min-height: 20px;
    font-size: 14px;
  `;
  infoBox.textContent = 'Click hotspots to learn more';
  container.appendChild(infoBox);

  document.body.appendChild(container);
}

function createModal(label) {
  const modal = document.createElement('div');
  modal.id = 'hotspot-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const box = document.createElement('div');
  box.style.cssText = `
    background: rgba(0,0,0,0.9);
    color: white;
    padding: 30px;
    border-radius: 10px;
    max-width: 400px;
    text-align: center;
    font-family: Arial;
    border: 2px solid #0066cc;
  `;

  box.innerHTML = `
    <h2 style="margin: 0 0 15px 0;">${label}</h2>
    <p style="margin: 0; font-size: 14px; opacity: 0.8;">Click outside to close</p>
  `;

  modal.appendChild(box);
  document.body.appendChild(modal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

function toggleVariant() {
  if (!model) return;
  variantIndex = (variantIndex + 1) % 2;

  model.traverse((node) => {
    if (node.isMesh && node.material) {
      if (variantIndex === 0) {
        node.material.color.set(0xcccccc);
      } else {
        node.material.color.set(0xff8800);
      }
    }
  });

  const btn = document.querySelector('button');
  btn.textContent =
    variantIndex === 0 ? 'Variant: Standard' : 'Variant: Orange';
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') return;
  if (document.getElementById('hotspot-modal')) return;

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(hotspots);

  if (intersects.length > 0) {
    const clicked = intersects[0].object;
    createModal(clicked.userData.label);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function addSampleHotspots() {
  addHotspot(new THREE.Vector3(1, 1, 1), 'ℹ️ Hotspot 1');
  addHotspot(new THREE.Vector3(-1, 0.5, 1), 'ℹ️ Hotspot 2');
  addHotspot(new THREE.Vector3(0, 2, 0.5), 'ℹ️ Hotspot 3');
}

createUI();
addSampleHotspots();

renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);
});
