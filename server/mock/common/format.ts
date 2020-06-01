import { Response } from 'express'

function responseSend(data: object, res: Response): void {
  res.send(data)
}

export default responseSend
