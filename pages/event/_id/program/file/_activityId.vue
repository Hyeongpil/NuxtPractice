<template>
  <div>파일공유 액티비티</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'FileUI',
  layout: 'activity'
})
export default class FileUI extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
