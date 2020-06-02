import { Middleware, Context } from '@nuxt/types'

// nuxt.config.js 에서 전역으로 사용
const setUserInfo: Middleware = (context: Context) => {
  // if 토큰이 있으면
  // 유저정보를 가져와서 store에 세팅
}

export default setUserInfo
