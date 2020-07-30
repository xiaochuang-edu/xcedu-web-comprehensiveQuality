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
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
      />
    </div>
    <div class="clearfix padding-left-size-nomal">
      <div v-for="(item, index) in stuList" :key="index" class="fl studentDiv margin-bottom-size-nomal padding-top-bottom-size-nomal">
        <div class="imgDiv" />
        <div class="stuname-div">{{ item.stuName }}</div>
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
      }],
      stuList: [{
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }, {
        stuName: '程俊熙'
      }]
    }
  },
  methods: {
    handleChange: function () {

    }
  }
}
</script>
<style lang="scss" scoped>
.layout-list-content {
  height: 100%;
  overflow: auto;
    .studentDiv {
    height: 140px;
    background:rgba(248,248,248,1);
    border-radius: 10px;
    margin-right: 1.3%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    .imgDiv {
      width: 70px;
      height: 70px;
      background-color: #fff;
      margin-bottom: 15px;
    }
    .stuname-div {
      text-align: center;
      color: #333;
      font-size: 14px;
    }
  }
}
</style>
