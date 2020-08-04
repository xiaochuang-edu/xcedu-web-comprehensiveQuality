<template>
  <el-dialog
    title="编辑录入内容"
    :visible.sync="showflag"
    top="0"
    class="customcontent-div"
    :modal="false"
    :fullscreen="true"
    @close="sendMsg"
  >
    <div class="clearfix margin-bottom-size-large">
      <el-button class="fr" type="primary">添加子项目</el-button>
    </div>
    <el-form ref="ruleForm" :model="ruleForm" label-width="30%" :rules="rules" />
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" size="small">保存</el-button>
    </span>
    <div class="tableborder-div">
      <div v-for="(item, index) in tableList" :key="index">
        <div class="tableTop-content">
          <div class="leftContainer">
            <div class="bgcolor markDiv" />
            <el-input v-model="item.subitemtitle" style="width: 200px;" placeholder="请输入子项目名称" />
            <el-switch
              v-model="item.switchVal"
              inactive-text="是否需要审核:"
            />
            <div>
              <span>审核期限为</span>
              <el-input v-model="item.auditperiod" style="width: 100px;" />
              <span>天，学生提交记录超过设置天数未审核后，则自动通过。</span>
            </div>
          </div>
          <el-button type="primary" plain>删除</el-button>
        </div>
        <el-table
          :data="item.tableData"
          style="width: 100%"
        >
          <el-table-column
            label="字段名称"
          >
            <template slot-scope="scope">
              <span v-if="scope.$index === 0">{{ scope.row.fieldname }}</span>
              <el-input v-else v-model="scope.row.fieldname" style="width: 100px;" />
            </template>
          </el-table-column>
          <el-table-column
            label="是否必填"
          >
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.checked">必填</el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="列表显示">
            <el-checkbox v-model="scope.row.displaychecked">显示</el-checkbox>
          </el-table-column>
          <el-table-column label="列表宽度" />
          <el-table-column label="关键字段" />
          <el-table-column label="字段类型" />
          <el-table-column label="字段内容或限制" />
          <el-table-column />
        </el-table>
      </div>
    </div>
  </el-dialog>
</template>
<script>

export default {
  props: {
    showflag: {
      type: Boolean
    }
  },
  data () {
    return {
      tableList: [{
        subitemtitle: '',
        switchVal: true,
        auditperiod: 3,
        tableData: [{
          fieldname: '标签',
          checked: false,
          displaychecked: false
        }]
      }]
    }
  },
  methods: {
    sendMsg: function () {
      this.showflag = false
      this.$emit('func', this.showflag)
    }
  }
}
</script>
<style lang="scss" scoped>
.tableborder-div {
  border: 1px solid #ebeef5;
  border-bottom: 0;
  .tableTop-content {
    height: 48px;
    border-bottom: 1px solid #ebeef5;
    padding: 6px 10px;
    display: flex;
    justify-content: space-between;
    .leftContainer {
    display: flex;
    align-items: center;
    }
    .markDiv {
      height: 36px;
      width: 4px;
      margin-right: 15px;
    }
    .el-switch {
      margin: 0 30px;
    }
    .el-input {
      margin: 0 10px;
    }
  }
}
</style>
