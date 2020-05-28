<template>
  <ValidationObserver v-slot="{ handleSubmit, reset }">
    <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset">
      <slot />

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver
  },
  data: () => ({
    firstName: '',
    lastName: '',
    email: ''
  }),
  methods: {
    onSubmit() {
      alert('Form has been submitted!')
    }
  }
}
</script>

<style scoped>
span {
  display: block;
}
</style>
