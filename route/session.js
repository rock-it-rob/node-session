/**
 * Creates an express router for the creation and destruction of sessions.
 */
 const express = require('express')
 const router = express.Router()

 router.route('/')
 // POST creates a new session. Response contains a json object with a key of
 // 'sessionId'.
 .post(function(req, res) {
   req.session.granted = true
   console.log('creating session ' + req.session.id)
   var data = { sessionId: req.session.id }
   res.send(data)
 })
 // DELETE deletes the current session
 .delete(function(req, res) {
   console.log('deleting session ' + req.session.id)
   req.session.destroy()
   res.end()
 })

module.exports = router;
