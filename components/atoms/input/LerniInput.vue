<template>
  <div>
    <input
      ref="input"
      v-model="inputVal"
      :type="type"
      :class="[customClass]"
      :readonly="readonly"
      :disabled="getDisabled"
      class="lerni-input"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'nuxt-property-decorator'

@Component({
  name: 'LerniInput'
})
export default class LerniInput extends Vue {
  @Prop()
  private value!: [Number, String]

  @Prop({ default: false })
  private disabled!: boolean

  @Prop({ default: false })
  private readonly!: boolean

  @Prop({ default: 'text' })
  private type!: string

  @Prop()
  private customClass!: string

  @Ref()
  private readonly input!: HTMLInputElement

  get getDisabled(): boolean {
    return this.disabled
  }

  get inputVal() {
    return this.value
  }

  set inputVal(val: [Number, String]) {
    this.$emit('input', val)
  }

  private handleInput(event: any) {
    this.$emit('input', event.target.value)
  }

  private handleChange(event: any) {
    this.$emit('change', event.target.value)
  }

  private handleFocus(event: any) {
    this.$emit('focus', event)
  }

  private handleBlur(event: any) {
    this.$emit('blur', event)
  }

  private getInput(): HTMLInputElement {
    return this.input
  }

  public focus() {
    this.getInput().focus()
  }

  public blur() {
    this.getInput().blur()
  }

  public select() {
    this.getInput().select()
  }
}
</script>

<style ${2|scoped,|} lang="scss">
.lerni-input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 leading-tight;
}
</style>
