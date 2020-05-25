<template>
  <div>
    테스트
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  components: {},
  layout: 'activity'
})
export default class EventUI extends Vue {
  private activity = {
    title: '출석',
    type: 'attendance',
    date: new Date()
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
