<template>
  <div class="error-404">
    <h1>존재하지 않는 페이지입니다</h1>
    <p>헤헤헤</p>
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
