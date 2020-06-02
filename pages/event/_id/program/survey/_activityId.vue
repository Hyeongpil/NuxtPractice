<template>
  <div>참여자 설문 액티비티</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'SurveyUI',
  layout: 'activity',
  middleware: 'enterEvent'
})
export default class SurveyUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
