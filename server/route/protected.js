/**
 * Creates a router that prevents access unless the request contains a
 * session with the specified property.
 */

 // The property required to be true in the sesion.
 const ROLE = 'granted'

 const express = require('express')
 const router = express.Router()

// This module defines only a single request handling method that checks for a
// valid session. If present the request is forwarded to the subsequent handler.
// If not present a 401 response is returned.
 router.all('*', function(req, res, next) {
   if (req.session.granted != true) {
     res.sendStatus(401)
   }
   else {
     next()
   }
 })

module.exports = router
