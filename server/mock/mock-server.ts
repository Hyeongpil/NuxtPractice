const express = require('express')
const consola = require('consola')

const app = express()

const port = 4000

// Mock Routers
const userRouter = require('./user/apis.ts')
const eventRouter = require('./event/apis.ts')

function start() {
  // 목 API 실행
  app.use('/user', userRouter)
  app.use('/event', eventRouter)

  // Listen the server
  // app.set('port', port)
  app.listen(port, () => {})
  consola.ready({
    message: `Server listening on http://localhost:${port}`,
    badge: true
  })
}
start()
