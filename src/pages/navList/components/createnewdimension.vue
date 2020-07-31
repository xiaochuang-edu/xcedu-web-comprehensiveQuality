<template>
  <el-dialog
    title="新建评价维度"
    :visible.sync="dialogvisible"
    top="0"
    class="createnewdimension-div"
    :modal="false"
    :fullscreen="true"
    @close="sendMsg"
  >
    <el-form ref="ruleForm" :model="ruleForm" label-width="30%" :rules="rules">
      <el-form-item label="维度名称" prop="name">
        <el-col :span="16">
          <el-input v-model="ruleForm.name" placeholder="请输入维度名称" />
        </el-col>
      </el-form-item>
      <el-form-item label="背景颜色" prop="color">
        <el-col :span="15">
          <el-input v-model="ruleForm.color" readonly />
        </el-col>
        <el-col :span="1">
          <el-color-picker v-model="ruleForm.color" show-alpha />
        </el-col>
      </el-form-item>
      <el-form-item label="是否启用" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="评价内容" prop="type">
        <el-col :span="16">
          <div class="border-box">
            <el-checkbox v-model="ruleForm.type.checked1">自定义内容</el-checkbox>
            <el-button v-show="true" class="fr" type="primary" size="small" @click="onClick">编辑</el-button>
          </div>
          <div class="border-box">
            <el-checkbox v-model="ruleForm.type.checked2">考试成绩</el-checkbox>
          </div>
          <div class="border-box">
            <el-checkbox v-model="ruleForm.type.checked3">体质健康</el-checkbox>
          </div>
          <div class="border-box">
            <el-checkbox v-model="ruleForm.type.checked4">德育记录</el-checkbox>
          </div>
          <div class="border-box">
            <el-checkbox v-model="ruleForm.type.checked5">典型事例</el-checkbox>
          </div>
        </el-col>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" size="small">保存</el-button>
    </span>
    <my-customcontent :showflag="showflag" @func="getMsgFormSon" />
  </el-dialog>
</template>
<script>
import customcontent from './customcontent.vue'

export default {
  components: {
    'my-customcontent': customcontent
  },
  props: {
    dialogvisible: {
      type: Boolean
    }
  },
  data () {
    return {
      ruleForm: {
        name: '',
        color: '',
        delivery: false,
        type: {
          checked1: false,
          checked2: false,
          checked3: false,
          checked4: false,
          checked5: false
        }
      },
      rules: {
        name: [
          { required: true, message: '请输入维度名称', trigger: 'blur' },
          { max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        color: [
          { required: true, message: '请选择背景颜色', trigger: 'blur' }
        ]
      },
      showflag: false
    }
  },
  mounted: function () {
  },
  methods: {
    onClick: function () {
      this.showflag = true
    },
    getMsgFormSon: function (data) {
      this.showflag = data
    },
    sendMsg: function () {
      this.dialogvisible = false
      this.$emit('func', this.dialogvisible)
    }
  }
}
</script>
<style lang="scss" scoped>
.createnewdimension-div  {
    z-index: 2999!important;
    .border-box {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 36px;
    line-height: 36px;
    outline: 0;
    padding: 0 15px;
    width: 100%;
    margin-bottom: 20px;
    .el-button {
        height: 30px;
        padding: 0 10px;
        line-height: 30px;
        margin-top: 2px;
    }
    }
}
</style>
<style lang="scss">
.createnewdimension-div .el-col-1 {
    height: 40px;
    text-align: right;
}
.createnewdimension-div .el-dialog__header {
    display: flex;
    align-items: center;
}
</style>
