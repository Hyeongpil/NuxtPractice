/* eslint-disable @typescript-eslint/no-unused-vars */
/** **********************
 * BaseUrl - /sign
 ************************ */

import express, { Request, Response } from 'express'

/**
 * 실제 업무처리 로직이 명시된 router import
 */

import responseSend from '../common/format'

import MockResponse from './response'

const router = express.Router()

router.post('/sign-up', (req: Request, res: Response) => {
  const data = { test: 'created' }
  responseSend(data, res)
})

// router.get('/me', (req: Request, res: Response) => {
//   const data = MockResponse.UserInfoData()
//   responseSend(data, res)
// })

module.exports = router
