<template>
  <div class="ln-divider bg-grey-100" :style="{ height: height }" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BlockText extends Vue {
  @Prop({ required: false, default: '1' })
  height!: string

  @Prop({ required: false, default: '4' })
  color!: string
}
</script>

<style lang="scss" scoped>
.ln-divider {
  @apply w-full;
  height: 1px;
}
</style>
