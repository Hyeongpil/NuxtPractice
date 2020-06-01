<template>
  <div>
    이벤트 프로그램 입니다
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'EventProgramUI',
  layout:'program'
})
export default class EventProgramUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
