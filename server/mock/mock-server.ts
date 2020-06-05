import { Request, Response, NextFunction } from 'express'

const express = require('express')
const consola = require('consola')

const app = express()
const port = 4000

// Mock Routers
const cors = require('cors')
const userRouter = require('./user/apis')
const eventRouter = require('./event/apis')
const signRouter = require('./sign/apis')

function start() {
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, POST, PUT, GET, DELETE'
    )
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
  })
  app.use(
    cors({
      origin: true,
      credentials: true
    })
  )
  // 목 API 실행
  app.use('/user', userRouter)
  app.use('/event', eventRouter)
  app.use('/sign', signRouter)

  // Listen the server
  app.listen(port, () => {})
  consola.ready({
    message: `Server listening on http://localhost:${port}`,
    badge: true
  })
}
start()
