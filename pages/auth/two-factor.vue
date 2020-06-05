<template>
  <div>
    <lerni-form @onSubmit="onSubmit">
      <form-item label="이메일" name="이메일" rules="required|email">
        <lerni-input v-model="email" type="email" disabled></lerni-input>
      </form-item>
      <form-item label="인증 코드" name="인증 코드" rules="required|digits:6">
        <lerni-input v-model="code" type="text"></lerni-input>
      </form-item>
      <form-item name="submit">
        <button type="submit">투팩터 인증</button>
      </form-item>
    </lerni-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationContext } from 'vee-validate/dist/types/components/common'
import { ITwoFactorVerification } from '../../types/user.interface'

@Component({
  name: 'TwoFactorUI',
  layout: 'full'
})
export default class TwoFactorUI extends Vue {
  private email: string = ''

  private code: string = ''

  private async onSubmit(v: ValidationContext) {
    if (v.valid === false) {
      this.$buefy.notification.open({
        message: '필수값을 입력해 주세요',
        type: 'is-info'
      })
      return
    }

    const payload: ITwoFactorVerification = {
      code: this.code
    }
    const response = await this.$repositories.user.twoFactorVerification(
      payload
    )
    console.log('response :::', response)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
