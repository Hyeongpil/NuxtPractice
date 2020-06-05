import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'
import {
  IUser,
  IPassword,
  ITwoFactorVerification
} from '../types/user.interface'

export default class UserRepository {
  private url = '/user'

  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public fetch(): Promise<AxiosResponse<IUser>> {
    return this.$axios.get(`${this.url}/me`)
  }

  public password(payload: IPassword): Promise<AxiosResponse<IUser>> {
    return this.$axios.patch(`${this.url}/me/password`, payload)
  }

  public twoFactorVerification(
    payload: ITwoFactorVerification
  ): Promise<AxiosResponse<any>> {
    return this.$axios.patch(`${this.url}/me/two-factor-verification`, payload)
  }
}
