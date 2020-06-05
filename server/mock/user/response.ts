import { IUser } from '../../../types/user.interface'

const faker = require('faker')

const MockResponse = {
  LoginFormData: (): object => {
    return {
      duplicatedLogin: faker.random.arrayElement([
        false,

        {
          logined: [
            {
              ip: '124.243.13.157',
              loginedAt: '2020-04-06 11:12:44'
            }
          ],
          count: 2
        }
      ])
    }
  },

  UserInfoData: (): IUser => {
    return {
      authorities: [
        {
          authority: 'authtest'
        }
      ],
      businessGroup: {
        businessGroupName: '테스트',
        createdDateTime: new Date(),
        displayName: '디스플레이네임',
        id: '디스플레이아이디'
      },
      email: faker.internet.email(),
      lastAccessIp: faker.internet.ip(),
      lastAccessTime: faker.date.past(),
      lastPwUpdateTime: faker.date.past(),
      messageGroup: {
        apiKey: faker.random.word(),
        callerPhoneNumbers: [faker.phone.phoneNumber()],
        createdDateTime: new Date(),
        displayName: faker.random.word(),
        id: faker.random.number(),
        messageGroupName: faker.random.word(),
        senderKey: faker.random.word(),
        templateCode: faker.random.word()
      },
      name: faker.random.word(),
      paymentType: 'FREE',
      phone: faker.phone.phoneNumber(),
      state: '계정_정지',
      termOfUses: [
        {
          accept: faker.random.boolean(),
          acceptedDateTime: faker.date.past(),
          type: 'LERNI_이용_약관_동의'
        }
      ]
    }
  }
}

export default MockResponse
