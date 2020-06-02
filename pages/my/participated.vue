<template>
  <div>참여한 행사에유</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'ParticipatedUI',
  middleware: 'isLogin'
})
export default class ParticipatedUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
