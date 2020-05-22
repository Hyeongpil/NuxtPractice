<template>
  <b-button
    :type="realNameOfColorProperty"
    :size="realNameOfSizeProperty"
    class=" rounded-none"
  >
    {{ text }}
  </b-button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'RoundButton',
  components: {}
})
export default class RoundButton extends Vue {
  //  버튼 안내 텍스트를 지정할 수 있습니다
  @Prop({ required: true, default: '버튼' })
  text!: string

  //  버튼 색상을 지정할 수 있습니다
  @Prop({ required: false, default: 'default' })
  color!: string

  // 버튼 사이즈를 결정할 수 있습니다
  @Prop({ required: false, default: 'default' })
  size!: string

  // buefy 템플릿의 버튼 컴포넌트에 색상을 지정하기 위한 실제 이름으로 변환합니다
  get realNameOfColorProperty() {
    return `is-${this.color}`
  }

  // buefy 템플릿의 버튼 컴포넌트에 크기를 지정하기 위한 실제 이름으로 변환합니다
  get realNameOfSizeProperty() {
    return `is-${this.size}`
  }
}
</script>
