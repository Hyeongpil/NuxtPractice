<template>
  <div>이벤트 신청 페이지입니다</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'EventRegisterUI',
  middleware: 'isEventRegistered'
})
export default class EventRegisterUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
