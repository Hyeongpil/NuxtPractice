<template>
  <div class="flex w-full items-baseline">
    <inline-text :text="type" class="w-1/6 font-bold text-lg" />
    <inline-text :text="content" class="w-5/6" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class EventInfoField extends Vue {
  @Prop({ required: true, default: '분류' })
  type!: string

  @Prop({ required: true, default: '내용' })
  content!: string
}
</script>

<style lang="scss" scoped></style>
