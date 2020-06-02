<template>
  <div>질문 액티비티</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'QuestionUI',
  layout: 'activity',
  middleware: 'enterEvent'
})
export default class QuestionUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
