import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosResponse } from 'axios'
import { ISignUp } from '@/types/user.interface'
import {
  IAccessToken,
  IPasswordLinkVerification,
  ISignIn
} from '@/types/sign.interface'

export default class SignRepository {
  private url = '/sign'

  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public signIn(payload: ISignIn): Promise<AxiosResponse<IAccessToken>> {
    return this.$axios.post(`${this.url}/sign-in`, payload)
  }

  public signUp(payload: ISignUp): Promise<AxiosResponse<string>> {
    return this.$axios.post(`${this.url}/sign-up`, payload)
  }

  public sendReIssuePasswordLink(
    payload: string
  ): Promise<AxiosResponse<string>> {
    return this.$axios.post(`${this.url}/send-re-issue-password-link`, payload)
  }

  public reSendEmailVerificationLink(
    payload: string
  ): Promise<AxiosResponse<string>> {
    return this.$axios.post(
      `${this.url}/re-send-email-verification-link`,
      payload
    )
  }

  public passwordLinkVerification(
    payload: IPasswordLinkVerification
  ): Promise<AxiosResponse<string>> {
    return this.$axios.patch(`${this.url}/password-link-verification`, payload)
  }
}
