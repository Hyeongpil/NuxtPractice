/* eslint-disable @typescript-eslint/no-unused-vars */
/** **********************
 * BaseUrl - /api/user
 ************************ */

import express, { Request, Response } from 'express'

/**
 * 실제 업무처리 로직이 명시된 router import
 */

import responseSend from '../common/format'

import MockResponse from './response'

const router = express.Router()

router.get('/login', (req: Request, res: Response) => {
  const data = MockResponse.LoginFormData()
  responseSend(data, res)
})

module.exports = router
