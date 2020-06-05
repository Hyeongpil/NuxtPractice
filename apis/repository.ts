import { NuxtAxiosInstance } from '@nuxtjs/axios'
import PostRepository from '~/apis/PostRepository'
import UserRepository from '~/apis/UserRepository'
import SignRepository from './SignRepository'

export default ($axios: NuxtAxiosInstance) => ({
  post: new PostRepository($axios),
  user: new UserRepository($axios),
  sign: new SignRepository($axios)
})

export interface IRepositorys {
  post: PostRepository
  user: UserRepository
  sign: SignRepository
}
