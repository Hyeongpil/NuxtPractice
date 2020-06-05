<template>
  <div>
    <h3>비밀번호 변경</h3>
    <lerni-form @onSubmit="onSubmit">
      <form-item
        label="기존 비밀번호"
        name="기존 비밀번호"
        rules="required|isPasswordCondition|isContinueSameValue|isContinueNumber"
      >
        <lerni-input v-model="password" type="password"></lerni-input>
      </form-item>
      <form-item
        label="새 비밀번호"
        name="새 비밀번호"
        rules="required|isPasswordCondition|isContinueSameValue|isContinueNumber"
      >
        <lerni-input v-model="newPassword" type="password"></lerni-input>
      </form-item>
      <form-item
        label="새 비밀번호 확인"
        name="새 비밀번호 확인"
        rules="required|confirmed:비밀번호"
      >
        <lerni-input v-model="newComfirmPassword" type="password"></lerni-input>
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
import { IPassword } from '../../types/user.interface'

@Component({
  name: 'ChangePasswordUI',
  layout: 'full'
})
export default class ChangePasswordUI extends Vue {
  private password: string = ''

  private newPassword: string = ''

  private newComfirmPassword: string = ''

  private async onSubmit(v: ValidationContext) {
    if (v.valid === false) {
      this.$buefy.notification.open({
        message: '필수값을 입력해 주세요',
        type: 'is-info'
      })
      return
    }

    const payload: IPassword = {
      password: this.password,
      newPassword: this.newPassword
    }
    const response = await this.$repositories.user.password(payload)
    console.log('response :::', response)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
