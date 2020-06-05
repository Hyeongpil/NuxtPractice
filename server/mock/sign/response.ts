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
  }
}

export default MockResponse
