/**
 * Creates the route to the main index file.
 */

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname + "/../view"})
})

router.get('/test', function(req, res) {
  res.sendFile('test.html', { root: __dirname + "/../view" })
})

router.get('/ping', function(req, res) {
  res.end()
})

module.exports = router
