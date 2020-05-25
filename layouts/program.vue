<template>
  <div>
    <navbar-default class="container" />
    <line-divider class="hidden sm:visible md:block" />
    <event-info class="container mt-5" />
    <div class="container">
      <section>
        <nuxt />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarDefault from '@/components/organisms/navigations/NavbarDefault.vue'
import EventInfo from '@/components/organisms/EventInfo.vue'

@Component({
  components: {
    NavbarDefault,
    EventInfo
  }
})
export default class ActivityLayout extends Vue {}
</script>

<style lang="scss" scoped></style>
