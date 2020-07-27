<template>
  <section class="app-comprehensiveQuality-section">
    <navbar />
    <router-view />
  </section>
</template>
<script>
import navbar from '@/pages/navbar.vue'
export default {
  components: { navbar }
}
</script>
<style lang="less" scoped>
.app-comprehensiveQuality-section {
  height: 100%;
  overflow: auto;
}
</style>
