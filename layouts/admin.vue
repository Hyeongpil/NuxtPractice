<template>
  <div>
    <navbar-admin />
    <admin-tab />
    <section class="main-content columns ">
      <div class="container column is-10 w-full">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import NavbarAdmin from '@/components/organisms/navigations/NavbarAdmin.vue'
import AdminTab from '@/components/molecules/tabs/AdminTab.vue'

import { settingStore } from '@/store'

@Component({
  components: {
    NavbarAdmin,
    AdminTab
  }
})
export default class AdminLayout extends Vue {
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

<style lang="scss" scoped>
/deep/ .b-tabs .tab-content {
  padding: 0rem;
}
</style>
