const express = require('express')
const consola = require('consola')

const app = express()
const port = 4000

// Mock Routers
const userRouter = require('./user/apis')
const eventRouter = require('./event/apis')

function start() {
  // 목 API 실행
  app.use('/user', userRouter)
  app.use('/event', eventRouter)

  // Listen the server
  app.listen(port, () => {})
  consola.ready({
    message: `Server listening on http://localhost:${port}`,
    badge: true
  })
}
start()
