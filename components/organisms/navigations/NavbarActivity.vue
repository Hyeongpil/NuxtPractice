<template>
  <div class="flex flex-row items-center">
    <!-- 뒤로가기 아이콘 -->
    <img src="~assets/images/icons/icon-activity-back.png" alt="Buefy" />
    <h5 class="m-0 m-auto font-bold">
      액티비티에유
    </h5>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'NavbarActivity'
})
export default class NavbarActivity extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
