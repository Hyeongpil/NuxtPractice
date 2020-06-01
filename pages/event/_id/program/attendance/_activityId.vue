<template>
  <div>참여자 출석 액티비티</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'AttendanceUI',
  layout: 'activity'
})
export default class AttendanceUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
