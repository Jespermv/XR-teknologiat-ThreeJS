import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';
import {XRControllerModelFactory} from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import {XRButton} from 'three/examples/jsm/webxr/XRButton.js';

let controller1, controller2;
let controllerGrip1, controllerGrip2;
let raycaster = new THREE.Raycaster();
const intersected = [];
const tempMatrix = new THREE.Matrix4();
let group;
const excludeObjects = ['Landscape', 'Plane', 'Terrain'];

let rayLine1, rayLine2;

const mouse = new THREE.Vector2();
let selectedObject = null;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.set(10, 10, 10);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

window.addEventListener('mousemove', (event) => {
  if (!renderer.xr.isPresenting) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }
});

window.addEventListener('mousedown', (event) => {
  if (!renderer.xr.isPresenting && event.button === 0) {
    raycaster.setFromCamera(mouse, camera);
    const intersections = raycaster.intersectObjects(group.children, true);
    if (intersections.length > 0) {
      const object = intersections[0].object;
      if (!excludeObjects.includes(object.name)) {
        selectedObject = object;
        if (object.material && !object.material.emissive) {
          object.material.emissive = new THREE.Color(0x000000);
        }
        if (object.material && object.material.emissive) {
          object.material.emissive.b = 1;
        }
      }
    }
  }
});

window.addEventListener('mouseup', (event) => {
  if (selectedObject) {
    if (selectedObject.material && selectedObject.material.emissive) {
      selectedObject.material.emissive.b = 0;
      selectedObject.material.emissive.r = 1;
    }
    selectedObject = null;
  }
});

// group the snowman so it can be grabbed as a single object
const snowman = new THREE.Group();
snowman.userData.grabbable = true;

const material = new THREE.MeshStandardMaterial({color: 0xffffff});

const bottom = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);
bottom.position.y = 1;
snowman.add(bottom);

const middle = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), material);
middle.position.y = 2.3;
snowman.add(middle);

const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material);
head.position.y = 3.3;
snowman.add(head);

const eyeMaterial = new THREE.MeshStandardMaterial({color: 0x000000});
const eyeGeom = new THREE.SphereGeometry(0.07, 16, 16);

const leftEye = new THREE.Mesh(eyeGeom, eyeMaterial);
leftEye.position.set(-0.17, 3.38, 0.45);
snowman.add(leftEye);

const rightEye = new THREE.Mesh(eyeGeom, eyeMaterial);
rightEye.position.set(0.17, 3.38, 0.45);
snowman.add(rightEye);

const noseMaterial = new THREE.MeshStandardMaterial({color: 0xffa500});
const nose = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.6, 16), noseMaterial);
nose.position.set(0, 3.25, 0.55);
nose.rotation.x = Math.PI / 2;
snowman.add(nose);

const hatMaterial = new THREE.MeshStandardMaterial({color: 0x000000});

const hatBrim = new THREE.Mesh(
  new THREE.CylinderGeometry(0.7, 0.7, 0.1, 32),
  hatMaterial,
);
hatBrim.position.y = 3.7;
snowman.add(hatBrim);

const hatTop = new THREE.Mesh(
  new THREE.CylinderGeometry(0.4, 0.4, 0.8, 32),
  hatMaterial,
);
hatTop.position.y = 4.15;
snowman.add(hatTop);

group = new THREE.Group();
scene.add(group);

scene.add(new THREE.AmbientLight(0xffffff, 0.4));

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(5, 10, 5);
scene.add(dirLight);

let terrainMesh = null;

const ImprovedNoise = function () {
  const p = new Uint8Array(512);
  const permutation = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
    234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
    134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
    230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
    1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
    116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
    124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
    154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
    108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
    239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
    50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
    141, 128, 195, 78, 66, 215, 61, 156, 180,
  ];
  for (let i = 0; i < 256; i++) p[256 + i] = p[i] = permutation[i];

  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  function lerp(t, a, b) {
    return a + t * (b - a);
  }

  function grad(hash, x, y, z) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  return {
    noise(x, y, z) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;

      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);

      const u = fade(x);
      const v = fade(y);
      const w = fade(z);

      const A = p[X] + Y;
      const AA = p[A] + Z;
      const AB = p[A + 1] + Z;
      const B = p[X + 1] + Y;
      const BA = p[B] + Z;
      const BB = p[B + 1] + Z;

      return lerp(
        w,
        lerp(
          v,
          lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
          lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z)),
        ),
        lerp(
          v,
          lerp(
            u,
            grad(p[AA + 1], x, y, z - 1),
            grad(p[BA + 1], x - 1, y, z - 1),
          ),
          lerp(
            u,
            grad(p[AB + 1], x, y - 1, z - 1),
            grad(p[BB + 1], x - 1, y - 1, z - 1),
          ),
        ),
      );
    },
  };
};

function createProceduralTerrain() {
  const width = 200;
  const depth = 200;
  const segments = 256;
  const geometry = new THREE.PlaneGeometry(width, depth, segments, segments);

  const noise = ImprovedNoise();
  const position = geometry.attributes.position;
  const scale = 0.03;
  const amplitude = 8;

  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);

    let e = 1.0 * noise.noise(x * scale, y * scale, 0);
    e += 0.5 * noise.noise(x * scale * 2, y * scale * 2, 0);
    e += 0.25 * noise.noise(x * scale * 4, y * scale * 4, 0);
    e = e / (1 + 0.5 + 0.25);
    position.setZ(i, e * amplitude);
  }
  geometry.computeVertexNormals();

  const loader = new THREE.TextureLoader();
  const grassUrl =
    'https://threejs.org/examples/textures/terrain/grasslight-big.jpg';
  const grassTexture = loader.load(grassUrl);
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(40, 40);

  const terrainMat = new THREE.MeshStandardMaterial({
    map: grassTexture,
    roughness: 1.0,
  });

  terrainMesh = new THREE.Mesh(geometry, terrainMat);
  terrainMesh.rotation.x = -Math.PI / 2;
  terrainMesh.receiveShadow = true;
  terrainMesh.castShadow = false;
  terrainMesh.userData.width = width;
  terrainMesh.userData.depth = depth;
  terrainMesh.userData.segments = segments;
  scene.add(terrainMesh);
}

createProceduralTerrain();

function getTerrainHeightAt(x, z) {
  if (!terrainMesh) return 0;
  const geom = terrainMesh.geometry;
  const pos = geom.attributes.position;
  const width = terrainMesh.userData.width;
  const depth = terrainMesh.userData.depth;
  const segments = terrainMesh.userData.segments;

  const local = new THREE.Vector3(x, 0, z);
  terrainMesh.worldToLocal(local);
  const localX = local.x;
  const localY = local.y;

  const u = (localX + width / 2) / width;
  const v = (localY + depth / 2) / depth;
  if (u < 0 || u > 1 || v < 0 || v > 1) return 0;

  const fx = u * segments;
  const fy = v * segments;
  let ix = Math.floor(fx);
  let iy = Math.floor(fy);
  const rx = fx - ix;
  const ry = fy - iy;
  ix = Math.max(0, Math.min(segments - 1, ix));
  iy = Math.max(0, Math.min(segments - 1, iy));

  const cols = segments + 1;
  const i00 = iy * cols + ix;
  const i10 = iy * cols + (ix + 1);
  const i01 = (iy + 1) * cols + ix;
  const i11 = (iy + 1) * cols + (ix + 1);

  function getZ(i) {
    return pos.getZ(i);
  }

  const z00 = getZ(i00);
  const z10 = getZ(i10);
  const z01 = getZ(i01);
  const z11 = getZ(i11);

  const zx0 = z00 * (1 - rx) + z10 * rx;
  const zx1 = z01 * (1 - rx) + z11 * rx;
  const zInterp = zx0 * (1 - ry) + zx1 * ry;
  return zInterp;
}

const baseHeight =
  getTerrainHeightAt(snowman.position.x, snowman.position.z) || 0;
snowman.position.y = baseHeight;
group.add(snowman);
console.log('Snowman added to group at position:', snowman.position);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const hdrUrl =
  'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/equirectangular/royal_esplanade_1k.hdr';
new RGBELoader().setDataType(THREE.UnsignedByteType).load(
  hdrUrl,
  (hdrTexture) => {
    const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
    scene.environment = envMap;
    hdrTexture.dispose();
    pmremGenerator.dispose();
  },
  undefined,
  (err) => {
    console.warn('HDR environment map failed to load:', err);
  },
);

const gltfLoader = new GLTFLoader();
gltfLoader.load(
  './models/scene.gltf',
  (gltf) => {
    const landscape = gltf.scene;
    landscape.scale.set(1, 1, 1);
    landscape.position.set(14, 0, -7);

    landscape.traverse(function (node) {
      if (node.material) {
        node.material.side = THREE.DoubleSide;
        node.castShadow = true;
        node.receiveShadow = true;
      }
    });

    const bbox = new THREE.Box3().setFromObject(landscape);
    const minY = bbox.min.y;
    const center = new THREE.Vector3();
    bbox.getCenter(center);
    const terrainHeight = getTerrainHeightAt(
      landscape.position.x + center.x,
      landscape.position.z + center.z,
    );
    const deltaY = terrainHeight - minY;
    landscape.position.y += deltaY || 0;
    group.add(landscape);
  },
  undefined,
  (err) => console.error('GLTF load error:', err),
);

gltfLoader.load(
  './models/rock.glb',
  (gltf) => {
    const rockTemplate = gltf.scene;

    const rockPositions = [
      {x: -10, z: -5},
      {x: 5, z: 10},
      {x: 15, z: 5},
      {x: -20, z: 15},
      {x: 20, z: -15},
    ];

    rockPositions.forEach((pos, index) => {
      const rock = rockTemplate.clone();
      rock.name = `Rock_${index}`;

      const terrainHeight = getTerrainHeightAt(pos.x, pos.z);
      rock.position.set(pos.x, terrainHeight + 3, pos.z);

      rock.traverse((node) => {
        if (node.material) {
          if (!node.material.emissive) {
            node.material.emissive = new THREE.Color(0x000000);
          }
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });

      group.add(rock);
      console.log(
        `Rock ${index} added at (${pos.x}, ${terrainHeight.toFixed(2)}, ${pos.z})`,
      );
    });
  },
  undefined,
  (err) => console.error('Rock load error:', err),
);

window.addEventListener('resize', () => {
  if (renderer.xr.isPresenting) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function initVR() {
  console.log('initVR called');

  renderer.xr.enabled = true;

  renderer.xr.addEventListener('sessionstart', () => {
    console.log('✓ XR Session STARTED - immersive mode active');
  });

  renderer.xr.addEventListener('sessionend', () => {
    console.log('XR Session ended');
    group.position.set(0, 0, 0);
  });

  // Create and add XR button
  const xrButton = XRButton.createButton(renderer, {
    requiredFeatures: [],
    optionalFeatures: [
      'hit-test',
      'dom-overlay',
      'dom-overlay-for-handheld-ar',
    ],
    domOverlay: {root: document.body},
  });

  xrButton.addEventListener('click', () => {
    console.log('XR Button clicked');
  });

  document.body.appendChild(xrButton);
  console.log('XRButton created and appended');

  const controllerModelFactory = new XRControllerModelFactory();

  controller1 = renderer.xr.getController(0);
  controller1.addEventListener('selectstart', onSelectStart);
  controller1.addEventListener('selectend', onSelectEnd);
  scene.add(controller1);
  console.log('controller1 added to scene');

  controllerGrip1 = renderer.xr.getControllerGrip(0);
  controllerGrip1.add(
    controllerModelFactory.createControllerModel(controllerGrip1),
  );
  scene.add(controllerGrip1);

  controller2 = renderer.xr.getController(1);
  controller2.addEventListener('selectstart', onSelectStart);
  controller2.addEventListener('selectend', onSelectEnd);
  scene.add(controller2);
  console.log('controller2 added to scene');

  controllerGrip2 = renderer.xr.getControllerGrip(1);
  controllerGrip2.add(
    controllerModelFactory.createControllerModel(controllerGrip2),
  );
  scene.add(controllerGrip2);

  const rayGeometry = new THREE.BufferGeometry();
  const rayPositions = new Float32Array([0, 0, 0, 0, 0, -10]); // 10 units forward
  rayGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(rayPositions, 3),
  );

  const rayMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff00,
    linewidth: 3,
  });

  rayLine1 = new THREE.Line(rayGeometry.clone(), rayMaterial.clone());
  controller1.add(rayLine1);

  rayLine2 = new THREE.Line(rayGeometry.clone(), rayMaterial.clone());
  controller2.add(rayLine2);

  console.log('Ray visualization added to controllers');
}

function onSelectStart(event) {
  const controller = event.target;
  const intersections = getIntersections(controller);
  console.log(
    '🎮 selectstart - controller aim intersects:',
    intersections.length,
    'objects',
  );

  if (intersections.length > 0) {
    const object = intersections[0].object;
    console.log('🎯 Hit object:', object.name);
    if (!excludeObjects.includes(object.name)) {
      if (object.material && !object.material.emissive) {
        object.material.emissive = new THREE.Color(0x000000);
      }
      if (object.material && object.material.emissive) {
        object.material.emissive.r = 0;
        object.material.emissive.g = 0;
        object.material.emissive.b = 1;
      }
      controller.attach(object);
      controller.userData.selected = object;
      console.log('✋ Object GRABBED');
    }
  } else {
    console.log('❌ No hit - aim at objects to grab them');
  }
}

function onSelectEnd(event) {
  const controller = event.target;

  if (controller.userData.selected !== undefined) {
    const object = controller.userData.selected;
    console.log('🔓 Object RELEASED');
    if (object.material && object.material.emissive) {
      object.material.emissive.r = 1;
      object.material.emissive.g = 0;
      object.material.emissive.b = 0;
    }
    group.attach(object);
    controller.userData.selected = undefined;
  }

  cleanIntersected();
}

function getIntersections(controller) {
  controller.updateMatrixWorld();
  raycaster.setFromXRController(controller);
  return raycaster.intersectObjects(group.children, true);
}

function intersectObjects(controller) {
  if (controller.userData.selected !== undefined) return;

  const intersections = getIntersections(controller);

  if (intersections.length > 0) {
    const object = intersections[0].object;
    if (!excludeObjects.includes(object.name)) {
      if (object.material && !object.material.emissive) {
        object.material.emissive = new THREE.Color(0x000000);
      }
      if (object.material && object.material.emissive) {
        object.material.emissive.r = 1;
        object.material.emissive.g = 0;
        object.material.emissive.b = 0;
      }
      intersected.push(object);
    }
  }
}

function cleanIntersected() {
  while (intersected.length > 0) {
    const object = intersected.pop();
    if (object.material && object.material.emissive) {
      object.material.emissive.r = 0;
      object.material.emissive.g = 0;
      object.material.emissive.b = 0;
    }
  }
}

initVR();

renderer.setAnimationLoop(function () {
  if (renderer.xr.isPresenting) {
    group.position.z = -5;
    group.position.y = 0;
  }

  cleanIntersected();

  if (!renderer.xr.isPresenting) {
    group.position.set(0, 0, 0);

    raycaster.setFromCamera(mouse, camera);
    const intersections = raycaster.intersectObjects(group.children, true);

    for (let i = 0; i < group.children.length; i++) {
      const obj = group.children[i];
      if (obj.material && obj.material.emissive && !selectedObject) {
        obj.material.emissive.r = 0;
        obj.material.emissive.g = 0;
        obj.material.emissive.b = 0;
      }
    }

    if (intersections.length > 0) {
      const object = intersections[0].object;
      if (!excludeObjects.includes(object.name) && !selectedObject) {
        if (object.material && !object.material.emissive) {
          object.material.emissive = new THREE.Color(0x000000);
        }
        if (object.material && object.material.emissive) {
          object.material.emissive.r = 1;
          object.material.emissive.g = 0;
          object.material.emissive.b = 0;
        }
      }
    }

    controls.update();
  } else {
    intersectObjects(controller1);
    intersectObjects(controller2);
  }

  renderer.render(scene, camera);
});
