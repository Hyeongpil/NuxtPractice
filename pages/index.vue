<template>
  <div class="container">
    <div class="w-full flex flex-col items-center main-h-screen justify-center">
      <img
        src="~assets/images/logo/logo-default.png"
        alt="Buefy"
        width="108"
        height="46"
      />
      <round-button text="QR 촬영" class="w-3/5 md:w-1/6 my-2" />
      <access-box class="w-3/5 md:w-1/6 my-2" />
      <inline-text text="참가기록 보기" class="underline" />

      <!-- 관리자 로그인 슬라이드 패널 -->
      <slide-panel>
        <!-- 축소모드 -->
        <template slot="click-area">
          <inline-text text="관리자이신가요?" class="text-white text-sm" />
        </template>

        <!-- 확장모드 -->
        <div slot="expanded-area">
          <inline-text text="hello world" class="text-white" />
        </div>
      </slide-panel>
      <!-- / 관리자 로그인 슬라이드 패널 -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import AccessBox from '~/components/molecules/access-box/AccessBox.vue'
import SlidePanel from '~/components/templates/slide-panel/SlidePanel.vue'

@Component({
  components: {
    AccessBox,
    SlidePanel
  }
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.main-h-screen {
  // 네비게이션 높이만큼 빼준다
  height: calc(100vh - 55px);
}
</style>
