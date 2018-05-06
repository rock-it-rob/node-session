/**
 * Creates the route to the main index file.
 */

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname + "/../view"})
})

module.exports = router
