<template>
  <div
    class="rounded-full border-black border flex justify-around items-center p-1"
  >
    <div class="text-xl">
      #
    </div>
    <input type="text" placeholder="입장코드를 입력하세요" />
    <button>
      <b-icon icon="home"> </b-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class AccessBox extends Vue {}
</script>

<style lang="scss" scoped>
// .input-holder {
//   width: 450px;
//   border-radius: 50px;
//   background: rgba(0, 0, 0, 0.5);
//   transition: all 0.5s cubic-bezier(0, 0.105, 0.035, 1.57);
// }

// .input-holder .search-input {
//   width: 100%;
//   height: 50px;
//   padding: 0px 70px 0 20px;
//   opacity: 0;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   background: transparent;
//   box-sizing: border-box;
//   border: none;
//   outline: none;
//   font-family: 'Open Sans', Arial, Verdana;
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 20px;
//   color: #fff;
//   transform: translate(0, 60px);
//   transition: all 0.3s cubic-bezier(0, 0.105, 0.035, 1.57);
//   transition-delay: 0.3s;
// }

// .input-holder .search-icon {
//   width: 50px;
//   height: 50px;
//   margin: 10px;
//   border-radius: 30px;
// }
</style>
