<template>
  <div>
    <ValidationObserver v-slot="validate">
      <form
        @submit.prevent="validate.handleSubmit(onSubmit(validate))"
        @reset.prevent="reset"
      >
        <slot />
      </form>
    </ValidationObserver>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
@Component({
  name: 'LerniForm',
  components: {
    ValidationObserver
  }
})
export default class LerniForm extends Vue {
  private onSubmit(validate: any) {
    console.log('onSubmit :', validate)
    this.$emit('onSubmit', validate)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
