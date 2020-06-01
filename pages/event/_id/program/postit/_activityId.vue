<template>
  <div>포스트잇 액티비티</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'PostItUI',
  layout: 'activity'
})
export default class PostItUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
