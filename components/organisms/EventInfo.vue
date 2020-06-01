<template>
  <div class="flex flex-col">
    <h2 class="font-bold">피리 이벤트</h2>
    <span class="text-grey-400"
      >04.09(목) 08:30 - 18:00 ~ 04.09(목) 08:30 - 18:00 | 장소 ~~
    </span>
    <div class="flex flex-col md:flex-row md:justify-between mt-3">
      <span>
        <b-tag rounded class="text-grey-400 px-5 text-xs font-medium">
          #0000
        </b-tag>
      </span>

      <line-divider class="sm:hidden mt-3 sm:mt-0" />

      <div class="flex flex-row items-center">
        <vertical-divider class="mr-10" />
        <div class="flex flex-row items-center" @click="eventInfoClicked">
          <img
            src="~assets/images/icons/icon-activity-home.png"
            style="height:14px;"
            class="mr-3"
          />
          <span>행사정보</span>
        </div>
        <vertical-divider class="mx-10" />
        <div class="flex flex-row items-center" @click="shareClicked">
          <img
            src="~assets/images/icons/icon-activity-share.png"
            style="height:14px;"
            class="mr-3"
          />
          <span>코드 공유</span>
        </div>
        <vertical-divider class="ml-10" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'EventInfo'
})
export default class EventInfo extends Vue {
  @Prop(Object)
  private eventInfo: object = {}

  private shareClicked() {
    this.$emit('share-click')
  }

  private eventInfoClicked() {
    this.$emit('event-info-click')
  }
}
</script>

<style ${2|scoped,|} lang="scss"></style>
