import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default class PostRepository {
  private resource = '/posts'

  private $axios: NuxtAxiosInstance

  constructor($axios: NuxtAxiosInstance) {
    this.$axios = $axios
  }

  public all(): Promise<any> {
    return this.$axios.get(this.resource)
  }
}
// export default ($axios: NuxtAxiosInstance) => ({
//   all(): Promise<any> {
//     return $axios.get(`${resource}`)
//   },

//   show(id: any): Promise<any> {
//     return $axios.get(`${resource}/${id}`)
//   },

//   create(payload: any): Promise<IUser> {
//     return $axios.post(`${resource}`, payload)
//   },

//   update(id: any, payload: any) {
//     return $axios.post(`${resource}/${id}`, payload)
//   },

//   delete(id: any) {
//     return $axios.delete(`${resource}/${id}`)
//   }
// })
