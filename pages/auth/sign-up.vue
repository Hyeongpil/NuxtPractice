<template>
  <div>
    <h4>회원가입</h4>

    <lerni-form @onSubmit="onSubmit">
      <form-item label="이름" name="이름" rules="required|min:2">
        <lerni-input v-model="name" type="text"></lerni-input>
      </form-item>
      <form-item label="이메일" name="이메일" rules="required|email">
        <lerni-input v-model="email" type="email"></lerni-input>
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
      <!-- TODO 체크박스 밸리데이션 추가하기 -->
      <!-- <form-item name="회원 약관 동의" rules="required"> -->
      <ValidationProvider v-slot="{ validate, errors }" rules="required">
        <Checkbox v-model="check" label="회원 약관 동의"></Checkbox>
        <p>{{ errors[0] }}</p>
      </ValidationProvider>
      <!-- </form-item> -->

      <form-item name="submit">
        <button type="submit">회원 가입</button>
      </form-item>
    </lerni-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationContext } from 'vee-validate/dist/types/components/common'
import { ValidationProvider } from 'vee-validate'
import { ISignUp } from '../../types/user.interface'

@Component({
  name: 'SignUpUI',
  layout: 'full',
  components: {
    ValidationProvider
  }
})
export default class SignUpUI extends Vue {
  private name: string = ''

  private email: string = ''

  private password: string = ''

  private comfirmPassword: string = ''

  private check: boolean = false

  private async onSubmit(v: ValidationContext) {
    if (v.valid === false) {
      this.$buefy.notification.open({
        message: '필수값을 입력해 주세요',
        type: 'is-info'
      })
      return
    }
    const payload: ISignUp = {
      email: this.email,
      name: this.name,
      password: this.password,
      termOfUses: [
        {
          accept: true,
          acceptedDateTime: new Date(),
          type: 'LERNI_이용_약관_동의'
        }
      ]
    }
    const response = await this.$repositories.sign.signUp(payload)
    console.log('response :::', response)
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
