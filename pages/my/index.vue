<template>
  <div class="w-full ">
    <div class="flex flex-col md:flex-row items-center justify-center">
      <div class="text-5xl text-primary pr-3">hi</div>
      <div>오동</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import EventCard from '~/components/organisms/EventCard.vue'
@Component({
  components: {
    EventCard
  }
})
export default class Created extends Vue {}
</script>
