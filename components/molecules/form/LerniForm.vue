<template>
  <div>
    <ValidationObserver v-slot="v">
      <form @submit.prevent="handleSubmit(v)" @reset.prevent="reset">
        <slot />

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
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
  private handleSubmit(v: any) {
    console.log('v :', v)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
