<template>
  <div class="layout-list-content">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">待审核(109)</el-menu-item>
      <el-menu-item index="2">已审核</el-menu-item>
    </el-menu>
    <div class="padding-left-right-size-nomal clearfix margin-top-size-nomal margin-bottom-size-nomal">
      <div class="fl">
        <el-input
          v-model="inputVal"
          suffix-icon="el-icon-search"
          style="width: 200px; margin-right: 5px;"
        />
        <el-button type="primary">高级搜索</el-button>
      </div>
      <div class="fr">
        <el-dropdown split-button type="primary">
          批量驳回
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>批量驳回</el-dropdown-item>
            <el-dropdown-item>驳回</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown split-button type="primary">
          批量通过
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>批量通过</el-dropdown-item>
            <el-dropdown-item>通过</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="padding-left-right-size-nomal recordsummary-div">
      <div class="contentCenter-div clearfix">
        <div class="left-container fl">
          <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox>
              <template />
            </el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="right-container" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputVal: '',
      activeIndex: '1',
      checkAll: false
    }
  },
  methods: {
    handleCheckAllChange: function () {

    }
  }
}
</script>

<style lang="scss" scoped>
.recordsummary-div {
    padding-bottom: 80px;
    .contentCenter-div {
    width: 100%;
    background:rgba(248,248,248,1)!important;
    border: 1px solid #ededed;
    border-radius: 4px;
    height: 790px;
    .left-container {
        background-color: #fff;
        height: 100%;
        padding: 20px 15px 0 15px;
    }
    }
}
</style>
