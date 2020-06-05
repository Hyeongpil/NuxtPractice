<template>
  <div>
    <h4>로그인</h4>

    <lerni-form @onSubmit="onSubmit">
      <form-item label="이메일" name="이메일" rules="required|email">
        <lerni-input v-model="email" type="email"></lerni-input>
      </form-item>
      <form-item label="비밀번호" name="비밀번호" rules="required">
        <lerni-input v-model="password" type="password"></lerni-input>
      </form-item>
      <div class="flex flex-row justify-between">
        <Checkbox v-model="check" label="로그인 상태 유지"></Checkbox>
        <nuxt-link to="reissue-password">
          <p>비밀번호 재발급</p>
        </nuxt-link>
      </div>
      <form-item name="submit">
        <button type="submit">로그인</button>
      </form-item>

      <nuxt-link class="mt-10" to="sign-up">
        <p>회원 가입</p>
      </nuxt-link>
    </lerni-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { ValidationContext } from 'vee-validate/dist/types/components/common'
@Component({
  name: 'LoginUI',
  layout: 'full'
})
export default class LoginUI extends Vue {
  private email: string = ''

  private password: string = ''

  private check: boolean = false

  private onSubmit(v: ValidationContext) {
    if (v.valid === false) {
      this.$buefy.notification.open({
        message: '필수값을 입력해 주세요',
        type: 'is-info'
      })
    }
    const response = this.$repositories.sign.reSendEmailVerificationLink(
      this.email
    )
    console.log('response :', response)
  }
}
</script>

<style></style>
