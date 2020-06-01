<template>
  <b-checkbox v-model="checkbox">
    {{ label }}
  </b-checkbox>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Checkbox extends Vue {
  @Prop({ required: true, default: '라벨' })
  label!: string
}
</script>
