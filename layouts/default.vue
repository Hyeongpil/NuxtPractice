<template>
  <div>
    <navbar-default class="container" />
    <line-divider class="hidden sm:visible md:block" />
    <section>
      <nuxt />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarDefault from '@/components/organisms/navigations/NavbarDefault.vue'
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
}
</script>
