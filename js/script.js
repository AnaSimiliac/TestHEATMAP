// window.addEventListener('scroll', function() {
//     var body = document.body;
//     var scrollPosition = window.scrollY;
//     var threshold = 100;

//     if (scrollPosition > threshold) {
//         body.classList.add('scrolled');
//     } else {
//         body.classList.remove('scrolled');
//     }
// });


// //-------------------

// // Add this to your script.js or create a new script file
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById('3d-container').appendChild(renderer.domElement);


// // Load the GLB model
// var loader = new THREE.GLTFLoader();
// loader.load('C:\Users\anasi\OneDrive\Desktop\Chronoscape\\3D\tiles.glb', function (gltf) {
//     // Adjust the position to place the model on the right side
//     gltf.scene.position.set(5, 0, 0); // Adjust the X value to move it right
//     camera.position.z = 5; // Move the camera back along the Z-axis

//     // Add the model to the scene
//     scene.add(gltf.scene);
// });


// function animate() {
//     requestAnimationFrame(animate);

//     // Add any animations or updates here

//     renderer.render(scene, camera);
// }

// // Call the animate function to start the animation loop
// animate();


// window.addEventListener('resize', function () {
//     var newWidth = window.innerWidth;
//     var newHeight = window.innerHeight;

//     camera.aspect = newWidth / newHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize(newWidth, newHeight);
// });



// //-----------------

// Add this to your existing JavaScript file



