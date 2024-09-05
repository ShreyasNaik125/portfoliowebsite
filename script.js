// Basic setup
const scene = new THREE.Scene();
scene.background = new THREE.Color('#1c212c');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// Load the 3D laptop model
const loader = new THREE.GLTFLoader();
let laptop;

loader.load('laptop.glb', function(gltf) {
    laptop = gltf.scene;
    laptop.scale.set(0.5,0.5, 0.5); // Adjust the scale as needed 
    laptop.position.set(7, -14, 0);
    scene.add(laptop);
}, undefined, function(error) {
    console.error(error);
});

// Camera positioning
camera.position.set(0, -4, 15);
camera.rotation.x = -Math.PI / 6;

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
function animate() {
    requestAnimationFrame(animate);

    if (laptop) {
        laptop.rotation.y += 0.01; // Optional: Add rotation for effect
    }

    renderer.render(scene, camera);
}

animate();

var typed3 = new Typed('.auto-text', {
    strings: ['Web Developer', 'Programmer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true, // this is a default
    loop: true
  });