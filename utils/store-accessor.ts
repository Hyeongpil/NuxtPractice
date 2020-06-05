/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import postModule from '~/store/postModule'
import settingModule from '~/store/settingModule'
import userModule from '../store/userModule'

let postStore: postModule
let settingStore: settingModule
let userStore: userModule

function initialiseStores(store: Store<any>): void {
  postStore = getModule(postModule, store)
  settingStore = getModule(settingModule, store)
  userStore = getModule(userModule, store)
}

export { initialiseStores, postStore, settingStore, userStore }
