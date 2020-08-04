<template>
  <el-dialog
    :title="dialogtitle"
    :visible.sync="showtable"
    top="0"
    :width="!showfull ? '1000px' : ''"
    class="dimensionrecord-div"
    :modal="true"
    :fullscreen="showfull"
    @close="sendMsg"
  >
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" size="small">保存</el-button>
      <i class="icon-max-o" @click="onScreen" />
    </span>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item, index) in tablist" :key="index" :index="item.name">{{ item.title }}</el-menu-item>
    </el-menu>
    <div class="padding-left-right-size-nomal clearfix margin-top-size-nomal margin-bottom-size-nomal">
      <div class="fl">
        <el-input
          v-model="inputVal"
          suffix-icon="el-icon-search"
          style="width: 200px; margin-right: 5px;"
          placeholder="姓名"
        />
        <el-button type="primary">高级搜索</el-button>
      </div>
      <div class="fr">
        <el-dropdown split-button type="primary">
          新建
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>新建</el-dropdown-item>
            <el-dropdown-item>导入</el-dropdown-item>
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
        label="姓名"
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
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i class="icon-edit" @click="handleEdit(scope.$index, scope.row)" />
          <i class="icon-delete" @click="handleDelete(scope.$index, scope.row)" />
        </template>
      </el-table-column>
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
  </el-dialog>
</template>
<script>

export default {
  props: {
    showtable: {
      type: Boolean,
      default: false
    },
    dialogtitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputVal: '',
      total: 0,
      activeIndex: '1',
      showfull: false,
      tablist: [{
        title: '德育记录',
        name: '1'
      }, {
        title: '先进个人',
        name: '2'
      }],
      tableData: [{
        studentname: '程美丽',
        classname: '高三1班',
        honorarytitle: '安徽省十佳中学生',
        awardtime: '2019-12-16',
        awardlevel: '省级',
        organization: '安徽省教育部',
        label: '德育',
        starttime: '2019-03-20'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        honorarytitle: '安徽省十佳中学生',
        awardtime: '2019-12-16',
        awardlevel: '省级',
        organization: '安徽省教育部',
        label: '德育',
        starttime: '2019-03-20'
      }, {
        studentname: '程美丽',
        classname: '高三1班',
        honorarytitle: '安徽省十佳中学生',
        awardtime: '2019-12-16',
        awardlevel: '省级',
        organization: '安徽省教育部',
        label: '德育',
        starttime: '2019-03-20'
      }]
    }
  },
  methods: {
    sendMsg: function () {
      this.showtable = false
      this.$emit('func', this.showtable)
    },
    onScreen: function () {
      this.showfull = !this.showfull
    },
    handleSelect: function () {

    },
    handleClick: function (tab) {
      this.activeName = tab
    },
    handleEdit (index, row) {
    },
    handleDelete (index, row) {
    },
    searchRecord: function () {

    },
    pageSizeChange: function () {

    }
  }
}
</script>
<style lang="scss">
.dimensionrecord-div .el-dialog__header {
    display: flex;
    align-items: center;
}
</style>
