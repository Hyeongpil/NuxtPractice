<template>
  <div>회원가입 할까요</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'SignUpUI',
  layout: 'full'
})
export default class SignUpUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
