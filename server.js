const express = require('express')
const app = express()
const defaultRouter = require('./route/default')
const indexRouter = require('./route/index')

// Enable static routing.
app.use('/css', express.static("static/css"))

// Set the router for the main page.
app.use('/', indexRouter)

// Set the default router.
app.use(defaultRouter)

// Start the server.
app.listen(3000)
