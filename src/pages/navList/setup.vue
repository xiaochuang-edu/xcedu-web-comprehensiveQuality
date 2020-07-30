<template>
  <div class="layout-list-content">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">评价维度</el-menu-item>
      <el-menu-item index="2">标签管理</el-menu-item>
      <el-menu-item index="3">评价报告</el-menu-item>
    </el-menu>
    <my-evaluationdimension v-if="activeIndex == 1" />
    <my-labelmanagement v-if="activeIndex == 2" />
    <my-assessmentreport v-if="activeIndex == 3" />
  </div>
</template>

<script>
import evaluationdimension from './components/evaluationdimension.vue'
import labelmanagement from './components/labelmanagement.vue'
import assessmentreport from './components/assessmentreport.vue'

export default {
  components: {
    'my-evaluationdimension': evaluationdimension,
    'my-labelmanagement': labelmanagement,
    'my-assessmentreport': assessmentreport
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
