const express = require('express')
const app = express()
const defaultRouter = require('route/default')

// Set the default router.
app.use(defaultRouter)

// Start the server.
app.listen(3000)
