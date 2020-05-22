<template>
  <b-tabs
    v-model="activeTab"
    type="is-toggle-rounded"
    :position="is - centered"
    size="is-small"
    class="block pt-3"
    @change="openTabContent(activeTab)"
  >
    <template v-for="(item, key) of items">
      <b-tab-item :key="key" :label="item.title" />
    </template>
  </b-tabs>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class AdminTab extends Vue {
  // 탭을 그릴 때, 선택된 아이템을 지정할 수 있습니다
  @Prop({ required: false, default: 0 })
  activeTab!: number

  private items = [
    {
      title: '메뉴1',
      to: { name: 'admin-menu1' }
    },
    {
      title: '메뉴2',
      to: { name: 'admin-menu2' }
    },
    {
      title: '메뉴3',
      to: { name: 'inspire' }
    }
  ]

  /**
   * 사용자가 클릭한 탭에 대하여
   */
  public openTabContent(index: number): void {
    this.$router.push(this.items[index].to)
  }
}
</script>
