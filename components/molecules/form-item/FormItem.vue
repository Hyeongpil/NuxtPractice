<template>
  <div class="flex w-full flex-col">
    <div class="pt-3">
      <p class="text-s font-bold">{{ label }}</p>
    </div>
    <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
      <slot></slot>
      <span class="text-xs text-warning">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'
@Component({
  name: 'FormItem',
  components: {
    ValidationProvider
  }
})
export default class FormItem extends Vue {
  @Prop()
  //
  readonly label!: string

  @Prop({ required: true })
  readonly name!: string

  @Prop()
  readonly rules!: string
}
</script>

<style lang="scss" scoped></style>
