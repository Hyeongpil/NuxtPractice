<template>
  <div>
    <navbar-default class="container" />
    <line-divider class="hidden sm:visible md:block" />
    <section class="container">
      <nuxt />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarDefault from '@/components/organisms/navigations/NavbarDefault.vue'

import { settingStore } from '@/store'
@Component({
  components: {
    NavbarDefault
  }
})
export default class DefaultLayout extends Vue {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }

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
