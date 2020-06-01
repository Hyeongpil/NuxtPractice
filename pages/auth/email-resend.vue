<template>
  <div>이메일 재전송 해주세요</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'EmailResendUI',
  layout: 'full'
})
export default class EmailResendUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
