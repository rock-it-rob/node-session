// Create main application.
const express = require('express')
const app = express()

// Enable static routing.
app.use('/css', express.static("static/css"))

// Set the router for the main page.
const indexRouter = require('./route/index')
app.use('/', indexRouter)

// Initialize sessions.
/**
 * NOTE: According to the connect-redis project page we may need to anticipate
 * lost connections to Redis. I won't make any changes for this until I see it
 * in action myself.
 */
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
app.use(session({
  //genid
  cookie: {
    httpOnly: false // Only for testing
  },
  name: 'viewSession',
  resave: false,
  saveUninitialized: false,
  secret: 'superSecretSigningString', // This should be defined outside of code
  store: new RedisStore({
    logErrors: true,
    host: 'localhost', // config file needed
    port: 6379 // config file needed
  }),
  unset: 'destroy'
}))

// Set the router for handling session requests.
const sessionRouter = require('./route/session.js')
app.use('/session', sessionRouter)

// Set the default router.
const defaultRouter = require('./route/default')
app.use(defaultRouter)

// Start the server.
app.listen(3000)
