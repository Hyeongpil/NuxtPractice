<template>
  <div>
    <navbar-default class="container hidden sm:visible md:flex" />
    <line-divider class="hidden sm:visible md:block" />
    <event-info class="container hidden sm:visible md:flex md:flex-col mt-5" />
    <div class="container">
      <navbar-activity class="mt-5" />
      <section>
        <nuxt />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarDefault from '@/components/organisms/navigations/NavbarDefault.vue'
import NavbarActivity from '@/components/organisms/navigations/NavbarActivity.vue'
import EventInfo from '@/components/organisms/EventInfo.vue'

@Component({
  components: {
    NavbarDefault,
    NavbarActivity,
    EventInfo
  },
  middleware: 'enterEvent'
})
export default class ActivityLayout extends Vue {}
</script>

<style lang="scss" scoped></style>
