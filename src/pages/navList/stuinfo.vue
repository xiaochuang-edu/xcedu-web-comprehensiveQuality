<template>
  <section class="layout-list-content">
    <div class="clearfix padding-top-size-nomal padding-bottom-size-large padding-left-right-size-nomal">
      <el-input
        v-model="inputVal"
        suffix-icon="el-icon-search"
        style="width: 200px; margin-right: 5px;"
      />
      <el-cascader
        v-model="selectvalue"
        :options="options"
        @change="handleChange"
      />
    </div>
    <div class="clearfix">
      <div v-for="(item, index) in stuList" :key="index" class="fl">
        <div />
        <div>{{ item.stuName }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      inputVal: '',
      selectvalue: [],
      options: [{
        value: 1,
        label: '白云校区',
        children: [{
          value: 11,
          label: '高三年级',
          children: [{
            value: 111,
            label: '高三1班'
          }, {
            value: 112,
            label: '高三2班'
          }, {
            value: 113,
            label: '高三3班'
          }, {
            value: 114,
            label: '高三4班'
          }]
        }, {
          value: 22,
          label: '高二年级',
          children: [{
            value: 221,
            label: '高二1班'
          }, {
            value: 222,
            label: '高二2班'
          }]
        }]
      }]
    }
  }
}
</script>
<style lang="less" scoped>
.layout-list-content {

}
</style>
