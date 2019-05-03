const THREE = require('three')

let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
const SEPARATION = 200
const AMOUNTX = 10
const AMOUNTY = 10
let camera
let scene
let renderer

init()
animate()

function init () {
let container
const separation = 100
const amountX = 50
const amountY = 50
let particle

container = document.createElement('div')
document.body.appendChild(container)

scene = new THREE.Scene()

renderer = new THREE.CanvasRenderer({ alpha: true }) // gradient this can be swapped for WebGLRenderer
renderer.setSize(window.innerWidth, window.innerHeight )
container.appendChild(renderer.domElement )

camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
)
camera.position.z = 100

// particles
let PI2 = Math.PI * 2
const material = new THREE.SpriteCanvasMaterial({
	   color: 0xffffff,
	    program: function (context) {
		  context.beginPath()
      context.arc( 0, 0, 0.5, 0, PI2, true )
      context.fill()
    }
})

const geometry = new THREE.Geometry()

for (let i = 0; i < 100; i++) {
    particle = new THREE.Sprite(material)
    particle.position.x = Math.random() * 2 - 1
    particle.position.y = Math.random() * 2 - 1
    particle.position.z = Math.random() * 2 - 1
    particle.position.normalize()
    particle.position.multiplyScalar(Math.random() * 10 + 450)
    particle.scale.x = particle.scale.y = 10
    scene.add(particle)
    geometry.vertices.push(particle.position )
}

// lines
const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({color: 0xffffff, opacity: 0.5}))
scene.add(line)

// mousey
document.addEventListener('mousemove', onDocumentMouseMove, false)
document.addEventListener('touchstart', onDocumentTouchStart, false)
document.addEventListener('touchmove', onDocumentTouchMove, false)

window.addEventListener('resize', onWindowResize, false )
} // end init()

function onWindowResize () {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onDocumentMouseMove (event) {

mouseX = event.clientX - windowHalfX
mouseY = event.clientY - windowHalfY

}

function onDocumentTouchStart( event ) {

if ( event.touches.length > 1 ) {

	event.preventDefault()

  mouseX = event.touches[ 0 ].pageX - windowHalfX
  mouseY = event.touches[ 0 ].pageY - windowHalfY

}
}

function onDocumentTouchMove( event ) {

if ( event.touches.length == 1 ) {

	event.preventDefault()

  mouseX = event.touches[ 0 ].pageX - windowHalfX
  mouseY = event.touches[ 0 ].pageY - windowHalfY

}
}

function animate() {

requestAnimationFrame( animate )
render()

}

function render() {

camera.position.x += ( mouseX - camera.position.x ) * .05
camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05
camera.lookAt( scene.position )

renderer.render( scene, camera )

}

const addHandlers = function () {
  render()
}

module.exports = {
  addHandlers

}
