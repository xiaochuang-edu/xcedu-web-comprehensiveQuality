<template>
  <div class="layout-list-content">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">标签统计</el-menu-item>
      <el-menu-item index="2">记录统计</el-menu-item>
    </el-menu>
    <my-tagstatistics v-if="activeIndex == 1" />
    <my-recordstatistics v-if="activeIndex == 2" />
  </div>
</template>

<script>
import recordstatistics from './components/recordstatistics.vue'
import tagstatistics from './components/tagstatistics.vue'

export default {
  components: {
    'my-recordstatistics': recordstatistics,
    'my-tagstatistics': tagstatistics
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  mounted: function () {
  },
  methods: {
    handleSelect: function (index) {
      this.activeIndex = index
    }
  }
}
</script>
