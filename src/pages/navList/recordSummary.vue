<template>
  <div class="layout-list-content">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="(item, index) in tabList" :key="index" :index="index">{{ item.name }}</el-menu-item>
    </el-menu>
    <el-tag v-for="(item, index) in tagList" :key="index">{{ item.name }}</el-tag>
    <div class="padding-left-right-size-nomal clearfix margin-bottom-size-nomal">
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
          导入
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>导入</el-dropdown-item>
            <el-dropdown-item>新建</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary">导出</el-button>
      </div>
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
        prop="honorarytitle"
        label="荣誉称号"
      />
      <el-table-column
        prop="awardtime"
        label="获奖时间"
      />
      <el-table-column
        prop="awardlevel"
        label="奖项级别"
      />
      <el-table-column
        prop="organization"
        label="组织机构"
      />
      <el-table-column
        prop="label"
        label="标签"
      />
      <el-table-column
        prop="starttime"
        label="创建时间"
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
</template>

<script>
export default {
  data () {
    return {
      inputVal: '',
      total: 0,
      activeIndex: 0,
      tabList: [{
        name: '思想品德'
      }, {
        name: '学业水平'
      }, {
        name: '身心健康'
      }, {
        name: '艺术素养'
      }, {
        name: '社会实践'
      }],
      tagList: [{
        name: '参加国防，民防相关项目'
      }, {
        name: '党团活动'
      }, {
        name: '军事训练'
      }, {
        name: '违规违纪'
      }, {
        name: '先进个人'
      }, {
        name: '学校特色活动'
      }, {
        name: '志愿服务'
      }],
      tableData: [{
        studentname: '程美丽',
        classname: '高三1班',
        honorarytitle: '安徽省十佳中学生',
        awardtime: '2019-12-16',
        awardlevel: '省级',
        organization: '安徽省教育部',
        label: '三好学生、省级获奖',
        starttime: '2019-03-20'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        honorarytitle: '安徽省十佳中学生',
        awardtime: '2019-12-16',
        awardlevel: '省级',
        organization: '安徽省教育部',
        label: '三好学生、省级获奖',
        starttime: '2019-03-20'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        honorarytitle: '安徽省十佳中学生',
        awardtime: '2019-12-16',
        awardlevel: '省级',
        organization: '安徽省教育部',
        label: '三好学生、省级获奖',
        starttime: '2019-03-20'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        honorarytitle: '安徽省十佳中学生',
        awardtime: '2019-12-16',
        awardlevel: '省级',
        organization: '安徽省教育部',
        label: '三好学生、省级获奖',
        starttime: '2019-03-20'
      }]
    }
  },
  methods: {
    searchRecord: function () {

    },
    pageSizeChange: function () {

    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
