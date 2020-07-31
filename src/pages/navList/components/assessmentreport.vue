<template>
  <div class="assessmentreport-div">
    <div class="clearfix topcontent-div">
      <el-tag v-for="(item, index) in tagList" :key="index">{{ item.name }}</el-tag>
      <el-button class="fr" type="primary">新建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tagList: [{
        name: '高二年级报告样式'
      }, {
        name: '初中报告'
      }, {
        name: '小学报告'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.assessmentreport-div {
  .topcontent-div {
    padding: 20px 20px 20px 0;
  }
  .el-tag {
    padding: 0 10px;
    border: 0;
    height: 30px;
    line-height: 30px;
    background-color: #f8f8f8;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    margin-left: 20px;
  }
}
</style>
