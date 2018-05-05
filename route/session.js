/**
 * Creates an express router for the creation and destruction of sessions.
 */
 const express = require('express')
 const router = express.Router()

 router.route('/')
 // POST creates a new session
 .post(function(req, res) {
   console.log('creating session')
   res.end()
 })
 // DELETE deletes the current session
 .delete(function(req, res) {
   console.log('deleting session')
   res.end()
 })

module.exports = router;
