<template v-if="showFlag">
  <div class="labelmanagement-div">
    <div class="topcontent-div clearfix">
      <el-input
        v-model="inputVal"
        class="fl"
        suffix-icon="el-icon-search"
        style="width: 200px;"
      />
      <el-button class="fr" type="primary" @click="onClick">新建</el-button>
    </div>
    <div class="clearfix">
      <div v-for="(item, index) in inputList" :key="index" class="fl inputDiv">
        <el-input
          v-model="item.value"
          style="width: 200px;"
        />
        <i class="icon-minus-solid-o" @click="deleteClick(index)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputVal: '',
      inputList: [{
        value: '篮球'
      }, {
        value: '足球'
      }, {
        value: '音乐'
      }, {
        value: '排球'
      }, {
        value: '绘画'
      }, {
        value: '钢琴'
      }]
    }
  },
  methods: {
    onClick: function () {
      this.inputList.push({
        value: ''
      })
    },
    deleteClick: function (i) {
      this.inputList.splice(i, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.labelmanagement-div {
    .topcontent-div {
        padding: 20px;
    }
    .inputDiv {
        width: 25%;
        padding-left: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding-bottom: 15px;
        .icon-minus-solid-o {
            color: #f54b4b;
            font-size: 20px;
            margin-left: 10px;
        }
    }
}
</style>
