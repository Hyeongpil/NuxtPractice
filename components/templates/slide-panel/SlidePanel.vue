<template>
  <div class="panel px-8" :class="activeValue">
    <div
      class="flex flex-col w-full justify-center bg-primary rounded-t-lg py-2"
    >
      <div
        ref="panelControlArea"
        class="flex flex-col items-center cursor-pointer"
        @click="expandPanel()"
      >
        <!-- 확대/축소 아이콘 -->
        <b-icon
          class="cursor-pointer"
          :icon="isOpen ? 'chevron-down' : 'chevron-up'"
          size="is-small"
          type="is-white"
        >
        </b-icon>
        <!-- /학대/축소 아이콘 -->

        <div :class="isOpen ? 'hidden' : ''">
          <slot ref="clickArea" class="panel__click__area" name="click-area" />
        </div>
      </div>

      <div class="panel__expand__area p-2" :class="expandAreaClasses">
        <slot name="expanded-area"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class SlidePanel extends Vue {
  private isOpen = false

  get activeValue() {
    return this.isOpen ? 'active ' : ''
  }

  get expandAreaClasses() {
    return this.isOpen ? 'active' : 'active hidden'
  }

  public expandPanel(): void {
    this.isOpen = !this.isOpen
  }
}
</script>

<style lang="scss" scoped>
.panel {
  position: fixed;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.panel__expand__area {
}

.panel.active {
  display: flex;
  flex-direction: column;
}

.panel__expand__area.active {
  height: calc(100vh - 110px);
}
</style>
