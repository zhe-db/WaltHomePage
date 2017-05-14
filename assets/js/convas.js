// window.onload=function(){
// var camera = undefined,
//     scene = undefined,
//     renderer = undefined;
// var planeMesh = undefined;
// var stars = [];
// var colors = ["#0952BD", "#A5BFF0", "#118CD6", "#1AAEE8", "#ffffff"];

// function init() {
// 	scene = new THREE.Scene();
// 	scene.fog = new THREE.Fog(0x000000, 0.015, 72);

// 	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// 	renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true, alpha: true });
// 	renderer.sortObjects = false;
// 	renderer.autoClearColor = false;

// 	// Scene initialization
// 	camera.position.z = 55;

// 	renderer.setClearColor("#000", 1);
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	renderer.setPixelRatio(window.devicePixelRatio);

// 	document.body.appendChild(renderer.domElement);

// 	for (var i = 0; i < 3000; i++) {
// 		var geometry = new THREE.SphereBufferGeometry(0.12 * Math.random(), 10, 10);
// 		var material = new THREE.MeshBasicMaterial({
// 			color: colors[Math.floor(Math.random() * colors.length)],
// 			shading: THREE.FlatShading
// 		});

// 		var star = new THREE.Mesh(geometry, material);

// 		star.position.x = Math.random() * 100 - 50;
// 		star.position.y = Math.random() * 100 - 50;
// 		star.position.z = Math.random() * 50 - 25;

// 		scene.add(star);
// 		stars.push(star);
// 	}

// 	var planeGeometry = new THREE.PlaneGeometry(1000, 500, 1, 1);
// 	var planeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 1 });

// 	planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

// 	scene.add(planeMesh);
// }

// function render() {

// 	requestAnimationFrame(render);
// 	renderer.render(scene, camera);

// 	for (var i = 0; i < stars.length; i++) {
// 		stars[i].position.z += 0.09;

// 		if (stars[i].position.z >= 60) {
// 			stars[i].position.x = Math.random() * 100 - 50;
// 			stars[i].position.y = Math.random() * 100 - 50;
// 			stars[i].position.z = 5;
// 		}
// 	}

// 	if (activated == true) {
// 		planeMesh.material.opacity = 0.01;
// 	} else {
// 		if (planeMesh.material.opacity < 1) {
// 			planeMesh.material.opacity += 0.01;
// 		}
// 	}
// }

// init();
// render();

// var activated = false;

// window.addEventListener("mousedown", function (event) {
// 	activated = true;
// });

// window.addEventListener("onclick", function (event) {
// 	activated = true;
// });
    
// window.addEventListener("mouseup", function (event) {
// 	activated = false;
// });

// window.addEventListener("resize", function () {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// });

// window.addEventListener("touchstart", function () {
// 	activated = true;
// });

// window.addEventListener("touchend", function () {
// 	activated = false;
// });

// var h2 = document.querySelector('h2');
// TweenLite.fromTo(h2, 1.5, { opacity: 0 }, { opacity: 1 });
// TweenLite.to(h2, 1.75, { opacity: 0, delay: 3 });
// }
//based on an Example by @curran
window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 1900;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame(){
  
  if(animate)
    requestAnimFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  
  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;
    
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  var pixelX, pixelY, pixelRadius;
  
  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }
  if(warp==0)
  {c.fillStyle = "rgba(0,10,20,1)";
  c.fillRect(0,0, canvas.width, canvas.height);}
  c.fillStyle = "rgba(209, 255, 255, "+radius+")";
  for(i = 0; i < numStars; i++){
    star = stars[i];
    
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);
    
    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
    c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
    //c.fill();
  }
}


executeFrame();
var width1 = $(".project-item").width();
var height1 = width1 * 1.775;
$(".project-item").css({"height":height1});
console.log(height1);
console.log(width1);
// $("#space").click(function(){
//     executeFrame();
// })