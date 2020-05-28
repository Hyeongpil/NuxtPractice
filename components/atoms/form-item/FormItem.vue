<template>
  <div class="flex w-full flex-col">
    <div class="label-area pt-3">
      <p class="text-s font-bold">{{ label }}</p>
    </div>
    <ValidationProvider v-slot="{ errors }" name="E-mail" :rules="rules">
      <!-- <input :placeholder="placeholder" class="user-information-input-style" /> -->
      <slot></slot>
      <span>{{ errors[0] }}</span>
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
  @Prop({ required: true, default: '라벨' })
  readonly label!: string

  @Prop({ required: true })
  readonly rules!: string
}
</script>

<style lang="scss" scoped>
.label-area {
  border-bottom: 1px solid #4c56ff;
}
</style>
