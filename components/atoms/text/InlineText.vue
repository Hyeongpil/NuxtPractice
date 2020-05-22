<template>
  <span>{{ text }}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BlockText extends Vue {
  @Prop({ required: true, default: '인라인_내용' })
  text!: string
}
</script>
