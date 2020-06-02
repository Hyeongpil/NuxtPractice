import { Middleware, Context } from '@nuxt/types'

// my 밑의 페이지에서 사용
const isLogin: Middleware = (context: Context) => {
  // 로그인 토큰이 있는지 없는지 확인
  // // 토큰이 있으면 통과
  // // 토큰이 없으면 로그인 페이지로
}

export default isLogin
