<template>
  <p>{{ text }}</p>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BlockText extends Vue {
  @Prop({ required: true, default: '문단_내용' })
  text!: string
}
</script>
