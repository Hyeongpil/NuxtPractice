<template>
  <div>
    <h3>비밀번호 변경</h3>
    <lerni-form @onSubmit="onSubmit">
      <form-item label="이메일" name="이메일" rules="required|email">
        <lerni-input v-model="email" type="email" disabled></lerni-input>
      </form-item>
      <form-item
        label="비밀번호"
        name="비밀번호"
        rules="required|isPasswordCondition|isContinueSameValue|isContinueNumber"
      >
        <lerni-input v-model="password" type="password"></lerni-input>
      </form-item>
      <form-item
        label="비밀번호 확인"
        name="비밀번호 확인"
        rules="required|confirmed:비밀번호"
      >
        <lerni-input v-model="comfirmPassword" type="password"></lerni-input>
      </form-item>
      <form-item name="submit">
        <button type="submit">서밋</button>
      </form-item>
    </lerni-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationContext } from 'vee-validate/dist/types/components/common'
import { IPasswordLinkVerification } from '../../types/sign.interface'

@Component({
  name: 'ReissuePasswordUI',
  layout: 'full'
})
export default class ReissuePasswordUI extends Vue {
  private email: string | (string | null)[] = ''

  private password: string = ''

  private comfirmPassword: string = ''

  created() {
    this.email = this.$route.query.email
  }

  private async onSubmit(v: ValidationContext) {
    if (v.valid === false) {
      this.$buefy.notification.open({
        message: '필수값을 입력해 주세요',
        type: 'is-info'
      })
      return
    }

    const payload: IPasswordLinkVerification = {
      code: this.$route.query.code,
      email: this.email,
      newPassword: this.password
    }
    const response = await this.$repositories.sign.passwordLinkVerification(
      payload
    )
    console.log('response :::', response)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
