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
    <div class="clearfix">
      <el-button class="fr" type="primary">添加子项目</el-button>
    </div>
    <el-form ref="ruleForm" :model="ruleForm" label-width="30%" :rules="rules" />
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" size="small">保存</el-button>
    </span>
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
