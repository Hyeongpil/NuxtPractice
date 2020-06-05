<template>
  <div class="flex flex-col">
    <nuxt-link to="login">
      <b-button type="is-primary" rounded>로그인</b-button>
    </nuxt-link>
    <nuxt-link to="nonmember-login">
      <b-button class="mt-3" type="is-primary" rounded>비회원</b-button>
    </nuxt-link>
    <nuxt-link to="sign-up">
      <p class="mt-10">회원가입</p>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'SelectLoginUI',
  layout: 'full'
})
export default class SelectLoginUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
