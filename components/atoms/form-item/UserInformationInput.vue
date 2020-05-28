<template>
  <div class="flex w-full">
    <div class="label-area pt-3">
      <p class="text-primary text-xs font-bold">{{ label }}</p>
    </div>
    <ValidationProvider
      v-slot="{ errors }"
      name="E-mail"
      rules="required|email"
    >
      <input :placeholder="placeholder" class="user-information-input-style" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class BlockText extends Vue {
  @Prop({ required: true, default: '라벨' })
  readonly label!: string

  @Prop({ required: true, default: '' })
  readonly placeholder!: string
}
</script>

<style lang="scss" scoped>
.label-area {
  border-bottom: 1px solid #4c56ff;
}

.user-information-input-style {
  @apply text-right text-2xl;
  border-bottom: 1px solid #4c56ff;
}
</style>
