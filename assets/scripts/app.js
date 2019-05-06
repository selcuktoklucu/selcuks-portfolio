'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// const threejs = require('background.js')
const threejs = require('backgroundCube.js')
// const THREE = require('three')
// let THREE = require('three')


$(() => {
  // your JS code goes here
  threejs.addHandlers()
})
