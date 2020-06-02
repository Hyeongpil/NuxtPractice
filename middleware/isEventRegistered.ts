import { Middleware, Context } from '@nuxt/types'

// 행사에 가입되어있는지 여부 확인 이벤트 신청 페이지에서 사용
const isEventRegistered: Middleware = (context: Context) => {
  // 로그인 되어있거나 이벤트 토큰이 있는지 확인
  // // 있으면 이미 가입되어있습니다. 알림 띄운 후 기존 페이지로 이동
  // 없으면 신청 페이지로 이동
}

export default isEventRegistered
