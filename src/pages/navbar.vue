<template>
  <section class="nav-bar">
    <div class="nav-bar-title">
      <div class="bgcolor">
        <i class="icon-sxpj-solid" />
      </div>
      <p>学生综合素质评价</p>
    </div>
    <el-menu class="el-menu-vertical-demo" router :default-active="activated" @select="handleSelect">
      <el-menu-item v-for="(nav, index) in navList" :key="index" :index="nav.viewName">
        <i :class="nav.icon" :style="{ color: nav.color }" />
        <span slot="title">{{ nav.name }}</span>
      </el-menu-item>
    </el-menu>
  </section>
</template>
<script>
export default {
  name: 'ComprehensiveQualityNavbar',
  data: () => {
    return {
      viewName: 'homeBox',
      navList: [{
        icon: 'icon-home',
        name: '首页',
        color: '#f9801a',
        id: '402812816c27eb13016c28155c820002',
        viewName: 'homeBox'
      }, {
        icon: 'icon-post',
        name: '学生信息',
        color: '#40C197',
        id: '40289e8b6c2177df016c22b162cf0007',
        viewName: 'stuinfoBox'
      }, {
        icon: 'icon-score',
        name: '班主任评语',
        color: '#38B3F1',
        id: '40289e8b6c1c68ce016c1c9951bf0002',
        viewName: 'commentBox'
      }, {
        icon: 'icon-training-experience',
        name: '记录汇总',
        color: '#FB4E02',
        id: '40289e8b6c2177df016c22b354ef000c',
        viewName: 'summaryBox'
      }, {
        icon: 'icon-print',
        name: '记录审核',
        color: '#FFD201',
        id: '40289e8b6c2177df016c22b0a4110006',
        viewName: 'printBox'
      }, {
        icon: 'icon-count',
        name: '数据统计',
        color: '#1FA694',
        id: '40289e8b6c2177df016c22b354ef0001',
        viewName: 'countBox'
      }, {
        icon: 'icon-setTitle',
        name: '设置',
        color: '#CC0202',
        id: '40289e8b6c2177df016c22b354ef0001',
        viewName: 'settingBox'
      }]
    }
  },
  computed: {
    activated: function () {
      return this.$store.state.tabbar.comprehensiveQualityValue
    }
  },
  methods: {
    handleSelect: function (key) {
      this.$store.commit('changeValue', key)
      this.$router.replace(`/mfs-comprehensiveQuality/${key}`)
    }
  }
}
</script>
