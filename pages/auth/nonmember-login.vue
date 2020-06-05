<template>
  <div>비회원 로그인 뷰</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'NonMemberLoginUI',
  layout: 'full'
})
export default class NonMemberLoginUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
