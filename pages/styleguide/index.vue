<template>
  <div class="container">
    <user-information-input label="NAME" placeholder="이름" />
    <user-information-input label="EMAIL" placeholder="이메일" />
    <user-information-input label="PHONE" placeholder="핸드폰번호" />

    <checkbox label="안녕" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  components: {}
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped></style>
