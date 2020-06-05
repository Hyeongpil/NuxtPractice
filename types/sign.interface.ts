import { ITermOfUse } from './user.interface'

export interface ISignIn {
  email: string
  isAutoLogin: boolean
  password: string
}

export interface ISignUp {
  email: string
  name: string
  password: string
  termOfUses: ITermOfUse[]
}

export interface IPasswordLinkVerification {
  code: string
  email: string
  newPassword: string
}

export interface IAccessToken {
  accessToken: string
}
