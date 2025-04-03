import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Cubos
const cube1 = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2),new THREE.MeshStandardMaterial({ color: 0xf589e3 }));
cube1.position.x = 0;
scene.add(cube1);

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1),new THREE.MeshStandardMaterial({ color: 0xff00a6 }));
cube2.position.x = -5;
scene.add(cube2);

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5),new THREE.MeshStandardMaterial({ color: 0xb946f2 }));
cube3.position.x = 5;
scene.add(cube3);

const directionalLight = new THREE.DirectionalLight(0xff00ff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {
    cube1.rotation.x += 0.01; // Rotación en eje X
    cube1.rotation.y += 0.01; // Rotación en eje Y
    
    cube2.rotation.x -= 0.05;
    cube2.rotation.y -= 0.05;

    cube3.rotation.x += 0.03;
    cube3.rotation.y -= 0.03;

    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);