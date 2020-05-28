<template>
  <div>
    <lerni-form>
      <form-item label="테스트" rules="required|email">
        <lerni-input v-model="email" type="email"></lerni-input>
      </form-item>
    </lerni-form>
    <!-- -validation-observer>
      <form class="flex flex-col" @submit.prevent="onSubmit(invalid)">
        <ValidationProvider
          v-slot="{ errors }"
          name="E-mail"
          rules="required|email"
        >
          <input v-model="email" type="email" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="First Name"
          rules="required|alpha"
        >
          <input v-model="firstName" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="Last Name"
          rules="required|alpha"
        >
          <input v-model="lastName" type="text" />
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <button type="submit">Submit</button>
      </form>
    </ValidationObserver> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LerniForm from '@/components/molecules/form/LerniForm.vue'
import FormItem from '@/components/atoms/form-item/FormItem.vue'
import LerniInput from '@/components/atoms/input/LerniInput.vue'
@Component({
  name: 'EventUI',
  components: {
    LerniForm,
    FormItem,
    LerniInput
  },
  layout: 'activity'
})
export default class EventUI extends Vue {
  private activity = {
    title: '출석',
    type: 'attendance',
    date: new Date()
  }

  private email: string = ''

  private email2: string = ''

  private firstName: string = ''

  private lastName: string = ''

  private onSubmit(e: any) {
    console.log('invalid :', e)
    // console.log('submit e :', e)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
