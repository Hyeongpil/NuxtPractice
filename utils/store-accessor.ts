/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import postModule from '~/store/postModule'
import settingModule from '~/store/settingModule'

let postStore: postModule
let settingStore: settingModule

function initialiseStores(store: Store<any>): void {
  postStore = getModule(postModule, store)
  settingStore = getModule(settingModule, store)
}

export { initialiseStores, postStore, settingStore }
