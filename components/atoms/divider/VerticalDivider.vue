<template>
  <div
    class="ln-divider"
    :class="getColor"
    :style="{ height: height + 'px' }"
  />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BlockText extends Vue {
  @Prop({ required: false, default: '20' })
  height!: string

  @Prop({ required: false })
  color!: string

  get getColor() {
    return this.color ? this.color : 'bg-grey-100'
  }
}
</script>

<style lang="scss" scoped>
.ln-divider {
  width: 1px;
}
</style>
