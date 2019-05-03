'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const threejs = require('background.js')
// const THREE = require('three')
// let THREE = require('three')

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

camera.position.z = 3
// game logic
const update = function () {
  cube.rotation.x += 0.001
  cube.rotation.y += 0.001
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

$(() => {
  // your JS code goes here
  // threejs.addHandlers()
})
