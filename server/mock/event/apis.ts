/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * BaseUrl - /api/user
 */

import { Request, Response } from 'express'

/**
 * 실제 업무처리 로직이 명시된 router import
 */

import responseSend from '../common/format'

import MockResponse from './response'

const express = require('express')

const router = express.Router()

/* 로그인 */
router.get('/list', (req: Request, res: Response) => {
  const data = MockResponse.EventList()
  responseSend(data, res)
})

module.exports = router
