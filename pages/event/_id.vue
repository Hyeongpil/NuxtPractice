<template>
  <div>
    <lerni-form @onSubmit="onSubmit">
      <form-item label="테스트 이메일" name="이메일" rules="required|email">
        <lerni-input v-model="email" type="email"></lerni-input>
      </form-item>
      <form-item label="테스트 이름" name="이름" rules="required|min:2|max:4">
        <lerni-input v-model="firstName" type="text"></lerni-input>
      </form-item>
      <form-item name="submit">
        <button type="submit">서밋</button>
      </form-item>
    </lerni-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LerniForm from '@/components/molecules/form/LerniForm.vue'
import FormItem from '@/components/molecules/form-item/FormItem.vue'
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
  private email: string = ''

  private firstName: string = ''

  private onSubmit(e: any) {
    console.log('invalid :', e)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
