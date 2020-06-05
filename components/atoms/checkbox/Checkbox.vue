<template>
  <b-checkbox v-model="inputVal">
    {{ label }}
  </b-checkbox>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Checkbox extends Vue {
  @Prop({ required: true, default: '라벨' })
  label!: string

  @Prop()
  private value!: boolean

  get inputVal() {
    return this.value
  }

  set inputVal(val: boolean) {
    this.$emit('input', val)
  }
}
</script>
