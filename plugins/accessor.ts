/* eslint-disable import/no-mutable-exports */
import { Plugin, Context } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { BuefyNamespace } from 'buefy/types'
import createRepository, { IRepositorys } from '~/apis/repository'

let repositories: any

declare module 'vue/types/vue' {
  interface Vue {
    $buefy: BuefyNamespace
    $repositories: IRepositorys
    $axios: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $repositories: IRepositorys
    $axios: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $repositories: IRepositorys
    $axios: NuxtAxiosInstance
  }
}

const repositoryPlugin: Plugin = (context: Context, inject) => {
  inject('repositories', createRepository(context.$axios))
  repositories = createRepository(context.$axios)
}

export default repositoryPlugin

export { repositories }
