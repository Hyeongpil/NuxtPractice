<template>
  <div>관리자 주최한 이벤트 페이지입니다.</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'AdminCreatedUI',
  middleware: 'isLogin'
})
export default class AdminCreatedUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
