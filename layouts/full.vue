<template>
  <div class="flex justify-center items-center h-screen">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { settingStore } from '@/store'

@Component({})
export default class Default extends Vue {
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleWindowResize)
    })
    settingStore.updateWindowWidth(window.innerWidth)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  public handleWindowResize(e: any) {
    settingStore.updateWindowWidth(e.currentTarget.innerWidth)
  }
}
</script>

<style></style>
