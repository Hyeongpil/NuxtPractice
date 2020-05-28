<template>
  <div class="container">
    <user-information-input label="NAME" placeholder="이름" />
    <user-information-input label="EMAIL" placeholder="이메일" />
    <user-information-input label="PHONE" placeholder="핸드폰번호" />
    <validate-form />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ValidateForm from '@/components/molecules/form/ValidateForm.vue'

import { settingStore } from '@/store'
@Component({
  components: { ValidateForm }
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped></style>
