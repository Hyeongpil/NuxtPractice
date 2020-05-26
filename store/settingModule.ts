/* eslint-disable camelcase */
import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'settingModule',
  stateFactory: true,
  namespaced: true
})
export default class SettingModule extends VuexModule {
  /**
   * 현재 브라우저의 window 너비값
   */
  windowWidth: number = 0

  @Mutation
  public UPDATE_WINDOW_WIDTH(width: number): void {
    this.windowWidth = width
  }

  @Action({ commit: 'UPDATE_WINDOW_WIDTH' })
  async updateWindowWidth(width: number) {
    return width
  }

  get fetchWindowWidth() {
    return this.windowWidth
  }
}
