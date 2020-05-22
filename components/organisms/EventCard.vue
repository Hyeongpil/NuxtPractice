<template>
  <div>
    <div class="card rounded-t-lg">
      <!-- 카드 이미지 영역 -->
      <div class="card-image p-1">
        <figure class="image is-16by9 relative">
          <img
            class="rounded-t-lg"
            src="https://www.canva.com/learn/wp-content/uploads/2018/08/ComposeStunningImages7-tb-800x0.jpg"
          />
        </figure>

        <!-- 설정 아이콘 -->
        <b-icon
          class="absolute top-0 left-0 m-2 cursor-pointer"
          icon="account"
          size="is-small"
        >
        </b-icon>

        <!-- 입장하기 버튼 -->
        <round-button
          text="입장하기"
          size="small"
          color="primary"
          class="absolute top-0 right-0 m-3"
          @click.native="showClickedEventInConsole"
        />
      </div>
      <!-- / 카드 이미지 영역 -->

      <!-- 카드 컨텐츠 영역 -->
      <div class="card-content">
        <block-text :text="title" class="title is-6" />
        <!-- <strong class="">{{ book.volumeInfo.subtitle }}</strong> -->

        <div class="content">
          <p>
            {{ date }}
          </p>
          <br />
        </div>
      </div>
      <!-- / 카드 컨텐츠 영역 -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import RoundButton from '@/components/atoms/buttons/RoundButton.vue'
import BlockText from '@/components/atoms/text/BlockText.vue'

@Component({
  name: 'EventCard',
  components: { RoundButton, BlockText }
})
export default class EventCard extends Vue {
  //  이벤트 제목을 작성할 수 있습니다
  @Prop({ required: true, default: '제목' })
  title!: string

  // 이벤트 기간을 작성할 수 있습니다
  @Prop({ required: true, default: '1999-09-09' })
  date!: string

  public showClickedEventInConsole() {
    console.log('hi')
  }
}
</script>
