import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {RGBELoader} from 'three/examples/jsm/loaders/RGBELoader.js';

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
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
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
sun.castShadow = true;
scene.add(sun);

const point = new THREE.PointLight(0xffffff, 0.5, 20);
point.position.set(-4, 3, -4);
point.castShadow = true;
scene.add(point);

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
  const scale = 0.03; // noise frequency
  const amplitude = 8; // height scale

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
  grassTexture.encoding = THREE.sRGBEncoding;

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
  getTerrainHeightAt(bottom.position.x, bottom.position.z) || 0;
const heightDelta = baseHeight; // bottom originally at y=1; new bottom should be 1 + baseHeight
bottom.position.y = 1 + baseHeight;
middle.position.y += heightDelta;
head.position.y += heightDelta;
leftEye.position.y += heightDelta;
rightEye.position.y += heightDelta;
nose.position.y += heightDelta;
hatBrim.position.y += heightDelta;
hatTop.position.y += heightDelta;

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const hdrUrl =
  'https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/equirectangular/royal_esplanade_1k.hdr';
new RGBELoader()
  .setDataType(THREE.UnsignedByteType)
  .load(hdrUrl, (hdrTexture) => {
    const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
    scene.environment = envMap;
    scene.background = envMap;
    hdrTexture.dispose();
    pmremGenerator.dispose();
  });

const gltfLoader = new GLTFLoader();
gltfLoader.load(
  '/models/scene.gltf',
  (gltf) => {
    const model = gltf.scene;

    model.scale.set(1, 1, 1);
    model.position.set(14, 0, -7);
    model.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) child.material.envMapIntensity = 1.0;
      }
    });

    const bbox = new THREE.Box3().setFromObject(model);
    const minY = bbox.min.y;
    const center = new THREE.Vector3();
    bbox.getCenter(center);
    const terrainHeight = getTerrainHeightAt(
      model.position.x + center.x,
      model.position.z + center.z,
    );
    const deltaY = terrainHeight - minY;
    model.position.y += deltaY || 0;
    scene.add(model);
  },
  undefined,
  (err) => console.error('GLTF load error:', err),
);

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
