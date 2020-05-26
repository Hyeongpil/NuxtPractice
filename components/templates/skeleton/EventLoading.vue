<template>
  <div class="container flex flex-col md:flex-row">
    <!-- 이미지 영역 -->
    <section id="imageArea" ref="imageArea" class="w-full md:w-1/2 p-2">
      <b-skeleton width="100%" :height="imageHeight" :animated="animated" />
    </section>

    <!-- 기본 정보 영역 -->
    <section class="w-full md:w-1/2 p-4 mt-3">
      <b-skeleton width="100%" height="34px" :animated="animated" />
      <div class="mt-4">
        <b-skeleton width="100%" height="24px" :animated="animated" />
      </div>
      <div class="mt-2">
        <b-skeleton width="100%" height="24px" :animated="animated" />
      </div>
      <div class="mt-2">
        <b-skeleton width="100%" height="24px" :animated="animated" />
      </div>
      <div class="mt-2">
        <b-skeleton width="100%" height="24px" :animated="animated" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Login extends Vue {
  private animated: boolean = true

  private imageHeight: number = 200

  mounted() {
    // B. DOM 삽입 단계 - 렌더링된 돔에 접근가능한 상태로 - 컴포넌트,템플릿,렌더링된 돔에 접근 가능
    window.addEventListener('resize', this.handleThumbnailResize)
    this.handleThumbnailResize()
  }

  destroyed() {
    // C. 해체 단계 - 뷰 인스턴스가 제거된 후에 호출 된다
    window.removeEventListener('resize', this.handleThumbnailResize)
  }

  public handleThumbnailResize() {
    // https://stackoverflow.com/questions/52109471/typescript-in-vue-property-validate-does-not-exist-on-type-vue-element
    const width = (this.$refs.imageArea as Vue & { clientWidth: number })
      .clientWidth

    const height = (width * 9) / 16
    this.imageHeight = height
  }
}
</script>
