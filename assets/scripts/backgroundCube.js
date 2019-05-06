
let THREE = require('three')

let loader = new THREE.FontLoader();

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({alpha: true})
// renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(window.innerWidth / 4, window.innerHeight / 4)
renderer.setClearColor( 0x000000, 0.8);
document.body.appendChild(renderer.domElement)

// What if window resizes??
window.addEventListener('resize', function () {
  const width = window.innerWidth
  const height = window.innerHeight
  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
})

// create the shape
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)

// create material colour or image texture
const material = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: true})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// var geometry = new THREE.CircleGeometry( 0.05, 3.2 );
// var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// var circle = new THREE.Mesh( geometry, material );
// scene.add( circle );

camera.position.z = 3
// game logic
const update = function () {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  // circle.rotation.x += 0.01
  // circle.rotation.y += 0.01
}

const render = function () {
  renderer.render(scene, camera)
}
// run game loop update render repeat
const GameLoop = function () {
  requestAnimationFrame(GameLoop)
  update()
  render()
}

GameLoop()

const addHandlers = function () {
  render()
}

module.exports = {
  addHandlers

}
