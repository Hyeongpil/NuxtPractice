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
router.get('/login', (req: Request, res: Response) => {
  // res.send('hello world!\n')
  const data = MockResponse.LoginFormData()
  responseSend(data, res)
})

module.exports = router
