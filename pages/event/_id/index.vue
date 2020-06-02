<template>
  <!-- 데이터 불러오는 중.. -->
  <div v-if="$fetchState.pending">
    <event-loading />
  </div>

  <!-- 데이터 로딩 완료 -->
  <div v-else class="container flex flex-col">
    <div class="flex flex-col md:flex-row py-16">
      <img
        src="https://imagescdn.gettyimagesbank.com/500/17/965/539/0/854999762.jpg"
        class="w-full md:w-1/2 md:mr-3 is-16by9"
      />
      <!-- <figure class="w-full md:w-1/2 md:mr-3 image is-16by9 relative">
        <img
          src="https://imagescdn.gettyimagesbank.com/500/17/965/539/0/854999762.jpg"
        />
      </figure> -->
      <div class="w-full md:w-1/2 md:ml-3 md:border border-grey-200 px-8 py-6">
        <block-text
          text="2020 롯데그룹 신입채용 Job-Cafe"
          class="text-2xl font-bold text-black"
        />
        <event-info-field type="접수기간" content="4.09(목)" class="mt-2" />

        <event-info-field
          type="장소"
          content="롯데월드타워 SKY31 컨벤션 A,B Hall"
          class="mt-2"
        />

        <event-info-field type="행사일시" content="4.09(목)" class="mt-2" />
      </div>
    </div>

    <b-tabs :expanded="isMobileSize">
      <b-tab-item label="상세정보" class="p-8 m-8">a</b-tab-item>
      <b-tab-item label="행사장소">b</b-tab-item>
      <b-tab-item label="문의하기">c</b-tab-item>
    </b-tabs>

    <div class=" flex w-full fixed left-0 justify-center bottom-0 mb-5">
      <round-button text="신청하기" color="primary" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import EventLoading from '~/components/templates/skeleton/EventLoading.vue'
import EventInfoField from '@/components/molecules/event-info-field/EventInfoField.vue'

import { postStore } from '@/store'

@Component({
  components: {
    EventLoading,
    EventInfoField
  },
  async fetch() {
    await postStore.fetch_posts()
  },
  middleware: 'enterEvent'
})
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
    // const width = (this.$refs.imageArea as Vue & { clientWidth: number })
    //   .clientWidth
    // const height = (width * 9) / 16
    // this.imageHeight = height
  }
}
</script>

<style lang="scss" scoped>
/deep/ .b-tabs span {
  font-size: 16px;
}

/deep/ .tabs li a {
  border: 0px;
}

/deep/ .tabs li {
  padding-left: 1rem;
  padding-right: 1rem;
}

/deep/ .tabs li.is-active {
  border-bottom: 5px solid #4c56ff;
}
</style>
