<template>
  <div>권한없음 페이지</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name:'NotAuthorizedUI',
  layout: 'error'
})
export default class NotAuthorizedUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
