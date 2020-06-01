<template>
  <div>
    비밀번호 재발급 페이지입니다.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'ReissuePasswordUI',
  layout: 'full'
})
export default class ReissuePasswordUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
