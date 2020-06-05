export interface IUser {
  authorities: IAuthority[]
  businessGroup: IBusinessGroup
  email: string
  lastAccessIp: string
  lastAccessTime: string
  lastPwUpdateTime: string
  messageGroup: IMessageGroup
  name: string
  paymentType: string // todo  타입 enum
  phone: string
  state: string // todo 상태 enum
  termOfUses: ITermOfUse[]
}

export interface IAuthority {
  authority: string
}

export interface IBusinessGroup {
  businessGroupName: string
  createdDateTime: Date
  displayName: string
  id: string
}

export interface IMessageGroup {
  apiKey: string
  callerPhoneNumbers: string[]
  createdDateTime: Date
  displayName: string
  id: string
  messageGroupName: string
  senderKey: string
  templateCode: string
}
export interface ITermOfUse {
  accept: boolean
  acceptedDateTime: Date
  type: string // todo 약관 타입
}

export interface ISignUp {
  email: string
  name: string
  password: string
  termOfUses: ITermOfUse[]
}

export interface IPassword {
  newPassword: string
  password: string
}

export interface ITwoFactorVerification {
  code: string
}
