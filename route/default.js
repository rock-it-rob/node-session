const express = require('express')
const router = express.Router()

// Construct a default path that returns 404 for every request.
router.all('*', function(req, res) {
  res.sendStatus(404);
})

module.exports = router;
