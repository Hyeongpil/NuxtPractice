<template>
  <div>내정보에유</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'MypageUI',
  middleware: 'isLogin'
})
export default class MypageUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
