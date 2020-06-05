<template>
  <div>
    <h3>비밀번호 재발급</h3>
    <lerni-form @onSubmit="onSubmit">
      <form-item label="테스트 이메일" name="이메일" rules="required|email">
        <lerni-input v-model="email" type="email"></lerni-input>
      </form-item>
      <form-item name="submit">
        <button type="submit">비밀번호 재발급</button>
      </form-item>
    </lerni-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationContext } from 'vee-validate/dist/types/components/common'

@Component({
  name: 'ReissuePasswordEmailUI',
  layout: 'full'
})
export default class ReissuePasswordEmailUI extends Vue {
  private email: string = ''

  mounted() {
    this.email = this.$route.query.email
  }

  private async onSubmit(v: ValidationContext) {
    if (v.valid === false) {
      this.$buefy.notification.open({
        message: '필수값을 입력해 주세요',
        type: 'is-info'
      })
    }
    const response = this.$repositories.sign.sendReIssuePasswordLink(this.email)
    console.log('response :', response)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
