<template>
  <div class="layout-list-content printRecord">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">待审核(109)</el-menu-item>
      <el-menu-item index="2">已审核</el-menu-item>
    </el-menu>
    <div v-if="activeIndex == 1">
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
          <el-row>
            <el-col :span="8">
              <div class="left-container fl">
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
                <div class="checkCard">
                  <div v-for="(item, index) in selectcheckList" :key="index" class="checkbox-select-div margin-bottom-size-small">
                    <el-checkbox v-model="item.checked" @change="onCheck()" />
                    <div class="information-div" :class="redchanged == index ? 'bgcolor' : 'bgcolor1'" @click="onClick(index)">
                      <p class="first-pdiv">
                        <span :class="redchanged === index ? 'color2' : 'color'">{{ item.label }}</span>
                        <span :class="redchanged == index ? 'color2' : 'color1'">{{ item.designation }}</span>
                      </p>
                      <p :class="redchanged == index ? 'color2' : 'color1'">{{ item.stuInfo }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="16">
              <div class="right-container fl">
                <div class="topcontainer-div">
                  <div class="btnDiv">
                    <el-button type="primary">驳回</el-button>
                    <el-button type="primary">通过</el-button>
                  </div>
                </div>
                <el-row>
                  <el-col :span="5">
                    <div class="titleDiv">
                      <h5>陈俊旭(高三1班)</h5>
                      <p>维度</p>
                      <p>细目</p>
                      <p>荣誉称号</p>
                      <p>获奖级别</p>
                      <p>奖项级别</p>
                      <p>组织机构</p>
                      <p>标签</p>
                      <p>附件</p>
                    </div>
                  </el-col>
                  <el-col :span="1"><div class="grid-content" /></el-col>
                  <el-col :span="18">
                    <div class="title-info">
                      <h5 />
                      <p>思想品德</p>
                      <p>先进个人</p>
                      <p>2019年度安徽省十佳中学生</p>
                      <p>2019-12-24</p>
                      <p>省级</p>
                      <p>安徽省教育局</p>
                      <p>先进个人、学习、省级建立</p>
                      <p />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div v-if="activeIndex == 2">
      <el-tag v-for="(item, index) in tagList" :key="index">{{ item.name }}</el-tag>
      <div class="padding-left-right-size-nomal margin-bottom-size-nomal">
        <el-input
          v-model="reviewedVal"
          suffix-icon="el-icon-search"
          style="width: 200px; margin-right: 5px;"
        />
        <el-button type="primary">高级搜索</el-button>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="studentname"
          label="学生"
        />
        <el-table-column
          prop="classname"
          label="班级"
        />
        <el-table-column
          prop="title"
          label="标题"
        />
        <el-table-column
          prop="dimension"
          label="维度"
        />
        <el-table-column
          prop="details"
          label="细目"
        />
        <el-table-column
          prop="submittime"
          label="提交时间"
        />
        <el-table-column
          prop="audittime"
          label="审核时间"
        />
        <el-table-column
          prop="status"
          label="状态"
        />
      </el-table>
      <el-pagination
        :page-size="10"
        background
        layout="prev, pager, next, jumper, sizes, total"
        :total="total"
        class="tx-c margin-top-size-nomal padding-bottom-size-nomal"
        @current-change="searchRecord"
        @size-change="pageSizeChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isIndeterminate: false,
      inputVal: '',
      activeIndex: '1',
      checkAll: false,
      redchanged: 0,
      selectcheckList: [{
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }, {
        checked: false,
        label: '【思想品德-先进个人】',
        designation: '安徽省十佳中学生',
        stuInfo: '陈俊旭<高三1班>2020-03-02  17:20提交2020-03-05  17:20截止'
      }],
      reviewedVal: '',
      tagList: [{
        name: '全部'
      }, {
        name: '已通过'
      }, {
        name: '未通过'
      }],
      tableData: [{
        studentname: '程美丽',
        classname: '高三1班',
        title: '安徽省十佳中学生',
        dimension: '品德荣誉',
        details: '先进个人',
        submittime: '2020-03-05 15:54',
        audittime: '2020-03-05 15:54',
        status: '未通过'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        title: '安徽省十佳中学生',
        dimension: '品德荣誉',
        details: '先进个人',
        submittime: '2020-03-05 15:54',
        audittime: '2020-03-05 15:54',
        status: '未通过'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        title: '安徽省十佳中学生',
        dimension: '品德荣誉',
        details: '先进个人',
        submittime: '2020-03-05 15:54',
        audittime: '2020-03-05 15:54',
        status: '未通过'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        title: '安徽省十佳中学生',
        dimension: '品德荣誉',
        details: '先进个人',
        submittime: '2020-03-05 15:54',
        audittime: '2020-03-05 15:54',
        status: '未通过'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        title: '安徽省十佳中学生',
        dimension: '品德荣誉',
        details: '先进个人',
        submittime: '2020-03-05 15:54',
        audittime: '2020-03-05 15:54',
        status: '未通过'
      }],
      total: 0
    }
  },
  methods: {
    handleSelect: function (index) {
      this.activeIndex = index
    },
    onClick: function (i) {
      this.redchanged = i
    },
    handleCheckAllChange: function (val) {
      this.checkAll = val
      for (let i = 0; i < this.selectcheckList.length; i++) {
        this.selectcheckList[i].checked = val
      }
    },
    onCheck: function () {
      let count = 0
      for (let i = 0; i < this.selectcheckList.length; i++) {
        if (this.selectcheckList[i].checked === true) {
          count += 1
        } else {
          count -= 1
        }
      }
      if (count === this.selectcheckList.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.printRecord {
  .el-tag {
    padding: 0 10px;
    border: 0;
    height: 30px;
    line-height: 30px;
    background-color: #f8f8f8;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    margin: 20px 0 20px 20px;
}
  .recordsummary-div {
    padding-bottom: 80px;
    .contentCenter-div {
    width: 100%;
    background:rgba(248,248,248,1)!important;
    border: 1px solid #ededed;
    border-radius: 4px;
    height: 790px;
    .el-col-8 {
      height: 790px;
      overflow: hidden;
    }
    .left-container {
        background-color: #fff;
        height: 100%;
        box-sizing: border-box;
        padding: 20px 5px 35px 15px;
        overflow: hidden;
        .checkCard {
          height: 100%;
          overflow: auto;
          padding-right: 10px;
          padding-top: 15px
        }
        .checkbox-select-div {
          display: flex;
          align-items: center;
          .el-checkbox {
            margin-right: 15px;
          }
          .information-div:hover {
            box-shadow: 0 0 8px rgba(0, 0, 0, .1);
          }
          .bgcolor1 {
            background:rgba(248,248,248,1);
          }
          .information-div {
            padding: 15px 10px;
            border:1px solid rgba(237,237,237,1);
            border-radius:4px;
            font-size: 14px;
            cursor: pointer;
            .color2 {
              color: #fff;
            }
            p {
              margin: 0;
            }
            .first-pdiv {
              margin-bottom: 15px;
            }
            .color1 {
              color: #333;
            }
          }
        }
    }
    .el-col-11 {
      height: 790px;
      overflow: auto;
    }
    .right-container {
      background-color: #fff;
      height: 790px;
      overflow: auto;
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
      .topcontainer-div {
        padding-bottom: 20px;
        border-bottom: 1px solid #ededed;
        margin-bottom: 30px;
        .btnDiv {
          text-align: right;
        }
      }
      .el-col-5 {
        margin-right: 30px;
        .titleDiv {
          h5,
          p {
            margin: 0;
            text-align: right;
          }
          h5 {
            margin-bottom: 20px;
          }
          p {
            margin-bottom: 15px;
          }
        }
      }
      .title-info {
        h5 {
          height: 16px;
        }
         h5,
          p {
            margin: 0;
            text-align: left;
          }
          h5 {
            margin-bottom: 20px;
          }
          p {
            margin-bottom: 15px;
          }
      }
    }
  }
}
}
</style>
<style>
.printRecord .recordsummary-div .el-checkbox__label {
  padding-left: 15px;
}
.printRecord .recordsummary-div .el-button+.el-button {
  margin-left: 5px;
}
</style>
