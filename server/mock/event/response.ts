// https://www.npmjs.com/package/faker
import { IPost } from '../../../types/post.interface'

const faker = require('faker')

const MockResponse = {
  // export interface RootState {
  //   personnel: Personnel
  //   user: User
  // }

  EventList: (): object => {
    const eventList: Array<IPost> = []

    for (let nowIndex = 0; nowIndex < 10; nowIndex += 1) {
      eventList.push({
        userId: faker.random.number(),
        id: faker.random.uuid(),
        title: faker.random.word(),
        body: faker.random.word()
      })
    }

    return eventList
  }
}

export default MockResponse
