<template>
  <div>회원 탈퇴 페이지입니다.</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'WithdrawalUI',
  middleware: 'isLogin'
})
export default class WithdrawalUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
