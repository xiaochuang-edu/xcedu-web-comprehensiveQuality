<template>
  <section class="layout-list-content">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">班主任评语</el-menu-item>
      <el-menu-item index="2">学生自评</el-menu-item>
      <el-menu-item index="3">家长评语</el-menu-item>
    </el-menu>
    <div class="clearfix padding-top-bottom-size-nomal padding-left-right-size-nomal">
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
      <div v-for="(item, index) in commentList" :key="index" class="box-div fl padding-left-right-size-nomal">
        <div class="studentDiv margin-bottom-size-nomal padding-top-bottom-size-nomal margin-right-size-mix">
          <div class="imgDiv" />
          <div class="stuname-div">{{ item.stuName }}</div>
        </div>
        <div class="comment-content">
          {{ item.comment }}
        </div>
      </div>
    </div>
    <el-pagination
      :page-size="10"
      background
      layout="prev, pager, next, jumper, sizes, total"
      :total="total"
      class="tx-c margin-top-size-nomal padding-bottom-size-nomal"
      @current-change="searchComment"
      @size-change="pageSizeChange"
    />
  </section>
</template>

<script>
export default {
  data () {
    return {
      inputVal: '',
      total: 0,
      selectvalue: '',
      activeIndex: '1',
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
      commentList: [{
        stuName: '程俊熙',
        comment: '你是个聪明自信的孩子，在学习上，能够认真对待，但还需再努力一些，老师相信只要你信心不倒，努力不懈，终有一天会到达成功的彼岸!'
      }, {
        stuName: '程俊熙',
        comment: '你是个聪明自信的孩子，在学习上，能够认真对待，但还需再努力一些，老师相信只要你信心不倒，努力不懈，终有一天会到达成功的彼岸!'
      }, {
        stuName: '程俊熙',
        comment: '你是个聪明自信的孩子，在学习上，能够认真对待，但还需再努力一些，老师相信只要你信心不倒，努力不懈，终有一天会到达成功的彼岸!'
      }, {
        stuName: '程俊熙',
        comment: '你是个聪明自信的孩子，在学习上，能够认真对待，但还需再努力一些，老师相信只要你信心不倒，努力不懈，终有一天会到达成功的彼岸!'
      }, {
        stuName: '程俊熙',
        comment: '你是个聪明自信的孩子，在学习上，能够认真对待，但还需再努力一些，老师相信只要你信心不倒，努力不懈，终有一天会到达成功的彼岸!'
      }, {
        stuName: '程俊熙',
        comment: '你是个聪明自信的孩子，在学习上，能够认真对待，但还需再努力一些，老师相信只要你信心不倒，努力不懈，终有一天会到达成功的彼岸!'
      }]
    }
  },
  methods: {
    handleChange: function () {

    },
    searchComment: function () {

    },
    pageSizeChange: function () {
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-list-content {
  height: 100%;
  overflow: auto;
  .box-div {
    width: 50%;
    box-sizing: border-box;
    display: flex;
    .studentDiv {
        height: 140px;
        background:rgba(248,248,248,1);
        border-radius: 10px;
        box-sizing: border-box;
        display: flex;
        padding-left: 25px;
        padding-right: 25px;
        flex-direction: column;
        align-items: center;
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
    .comment-content {
        height:140px;
        background:rgba(248,248,248,1);
        border-radius:10px;
        padding: 15px;
        box-sizing: border-box;
    }
  }
}
</style>
