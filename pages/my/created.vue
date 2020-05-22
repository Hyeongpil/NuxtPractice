<template>
  <div class="flex content-start flex-wrap">
    <event-card
      class="w-1/4 p-2"
      title="롯데그룹 인재채용 JOB cafe"
      date="04/11 ~ 04/18"
    />
    <event-card
      class="w-1/4 p-2"
      title="롯데그룹 인재채용 JOB cafe"
      date="04/11 ~ 04/18"
    />
    <event-card
      class="w-1/4 p-2"
      title="롯데그룹 인재채용 JOB cafe"
      date="04/11 ~ 04/18"
    />
    <event-card
      class="w-1/4 p-2"
      title="롯데그룹 인재채용 JOB cafe"
      date="04/11 ~ 04/18"
    />
    <event-card
      class="w-1/4 p-2"
      title="롯데그룹 인재채용 JOB cafe"
      date="04/11 ~ 04/18"
    />
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
