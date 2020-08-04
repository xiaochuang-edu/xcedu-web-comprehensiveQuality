<template>
  <section class="layout-list-content clearfix">
    <div class="cardDiv fl margin-bottom-size-nomal padding-top-size-small padding-bottom-size-nomal padding-left-right-size-nomal" style="padding-right: 0;">
      <div class="card-div-title margin-bottom-size-nomal">我的记录</div>
      <div class="clearfix">
        <div class="clearfix fl margin-bottom-size-nomal userDiv">
          <img src="" alt="" class="fl margin-right-size-small">
          <div class="fl">
            <p class="username">张海龙</p>
            <p class="positionDiv">竹行中学 | 校长</p>
          </div>
        </div>
        <div class="fl margin-bottom-size-nomal stuNum" @click="onClick(1)">
          <p style="color:rgba(105,138,246,1);">2543</p>
          <p>学生数</p>
        </div>
        <div class="fl margin-bottom-size-nomal stuNum" @click="onClick(2)">
          <p style="color:rgba(165,197,99,1);">8516</p>
          <p>记录数</p>
        </div>
        <div class="fl margin-bottom-size-nomal stuNum" @click="onClick(3)">
          <p style="color:rgba(240,107,65,1);">109</p>
          <p>待审核</p>
        </div>
      </div>
      <div class="clearfix">
        <div v-for="(item, index) in tabList" :key="index" style="cursor: pointer;" class="fl clearfix tablistDiv margin-top-size-small padding-left-right-size-nomal" @click="goTable(item.tabName)">
          <span class="margin-right-size-small">{{ item.tabName }}</span>
          <span class="color">{{ item.number }}</span>
        </div>
      </div>
    </div>
    <div class="cardDiv padding-top-size-small padding-bottom-size-nomal padding-left-right-size-nomal fl margin-bottom-size-nomal" style="margin-right: 0;">
      <div class="clearfix">
        <div class="card-div-title fl">学生特长排名</div>
        <div class="lookmore fr">查看更多</div>
      </div>
      <div class="thead-div margin-top-size-large clearfix">
        <span class="fl">标签</span>
        <span class="fl">记录条数</span>
        <span class="fl">最多学生</span>
      </div>
      <div v-for="(item1, index1) in rankList" :key="index1" class="thead-div clearfix">
        <span class="fl" style="font-weight: normal;">{{ item1.tabname }}</span>
        <span class="fl" style="font-weight: normal;">{{ item1.pieces }}</span>
        <span class="fl" style="font-weight: normal;">{{ item1.stuname }}</span>
      </div>
    </div>
    <div class="cardDiv fl padding-top-size-small padding-bottom-size-nomal padding-left-right-size-nomal">
      <div class="clearfix">
        <div class="card-div-title fl">标签分析</div>
        <div class="lookmore fr">查看更多</div>
      </div>
      <div id="main1" ref="main1" />
    </div>
    <div class="cardDiv fl padding-top-size-small padding-bottom-size-nomal padding-left-right-size-nomal" style="margin-right: 0;">
      <div class="clearfix">
        <div class="card-div-title fl">学生记录总数分析</div>
        <div class="lookmore fr">查看更多</div>
      </div>
      <div id="main2" ref="main2" />
    </div>
    <my-dimensionrecord :showtable="showtable" :dialogtitle="dialogtitle" @func="getMsgFormSon" />
  </section>
</template>

<script>
import echarts from 'echarts'
import dimensionrecord from './components/dimensionrecord.vue'

export default {
  components: {
    'my-dimensionrecord': dimensionrecord
  },
  data () {
    return {
      tabList: [{
        tabName: '思想品德',
        number: '3216'
      }, {
        tabName: '学业水平',
        number: '3216'
      }, {
        tabName: '身心健康',
        number: '3216'
      }, {
        tabName: '社会实践',
        number: '3216'
      }, {
        tabName: '艺术素养',
        number: '3216'
      }],
      rankList: [{
        tabname: '篮球',
        pieces: '2510',
        stuname: '李玉华<130>'
      }, {
        tabname: '篮球',
        pieces: '2510',
        stuname: '李玉华<130>'
      }, {
        tabname: '篮球',
        pieces: '2510',
        stuname: '李玉华<130>'
      }, {
        tabname: '篮球',
        pieces: '2510',
        stuname: '李玉华<130>'
      }, {
        tabname: '篮球',
        pieces: '2510',
        stuname: '李玉华<130>'
      }],
      labelList: [{
        name: '篮球',
        value: 2510
      }, {
        name: '足球',
        value: 2144
      }, {
        name: '羽毛球',
        value: 2014
      }, {
        name: '绘画',
        value: 1868
      }, {
        name: '音乐',
        value: 1796
      }, {
        name: '钢琴',
        value: 1696
      }],
      showtable: false,
      dialogtitle: ''
    }
  },
  mounted: function () {
    this.drawPie1()
    this.drawPie2()
    // 实现自适应部分
    window.onresize = () => {
      echarts.init(document.getElementById('main1')).resize()
      echarts.init(document.getElementById('main2')).resize()
    }
  },
  methods: {
    getMsgFormSon: function (data) {
      this.showtable = data
    },
    onClick: function (type) {
      if (type === 1) {
        this.$store.commit('changeValue', 'stuinfoBox')
        this.$router.push('/mfs-comprehensiveQuality/stuinfoBox')
      } else if (type === 2) {
        this.$store.commit('changeValue', 'summaryBox')
        this.$router.push('/mfs-comprehensiveQuality/summaryBox')
      } else if (type === 3) {
        this.$store.commit('changeValue', 'printBox')
        this.$router.push('/mfs-comprehensiveQuality/printBox')
      }
    },
    goTable: function (name) {
      this.showtable = true
      this.dialogtitle = name
    },
    drawPie1: function () {
      var charts1 = echarts.init(this.$refs.main1)
      var option1 = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 5,
          align: 'left',
          itemHeight: 10,
          itemWidth: 10,
          top: 34,
          itemGap: 30,
          textStyle: {
            color: '#999',
            fontSize: 14,
            padding: [2, 0, 0, 12]
          }
        },
        color: [
          'rgba(199,224,141,1)',
          'rgba(118,195,159,1)',
          'rgba(143,201,239,1)',
          'rgba(152,165,217,1)',
          'rgba(233,184,188,1)',
          'rgba(249,169,98,1)'
        ],
        series: [
          {
            name: '标签',
            type: 'pie',
            radius: ['40%', '80%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            labelLine: {
              show: true
            },
            label: {
              show: false,
              position: 'center'
            },
            data: this.labelList
          }
        ]
      }
      charts1.setOption(option1)
    },
    drawPie2: function () {
      var charts2 = echarts.init(this.$refs.main2)
      var option2 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '15%',
          right: '5%',
          bottom: '10%',
          top: '20%',
          containLabel: false
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['李玉华', '李丽芬', '张立冬', '王皓龙', '陈玉峰', '范立欣', '李丽', '程俊熙', '陈龙', '李艳'],
            axisLine: {
              lineStyle: {
                color: 'rgba(237,237,237,1)'
              }
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(153,153,153,1)',
                fontSize: 14
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            max: 200,
            axisTick: { show: false },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(153,153,153,1)'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(237,237,237,1)',
                width: 1,
                type: 'dashed'
              }
            }
          }
        ],
        series: [{
          name: '记录总数',
          type: 'bar',
          barWidth: '55%',
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = ['rgba(199,224,141,1)', 'rgba(118,195,159,1)', 'rgba(143,201,239,1)', 'rgba(152,165,217,1)', 'rgba(233,184,188,1)', 'rgba(249,169,98,1)', 'rgba(190,206,163,1)', 'rgba(136,192,204,1)', 'rgba(68,179,234,1)', 'rgba(78,126,206,1)']
                return colorList[params.dataIndex]
              }
            }
          },
          data: [{
            name: '李玉华',
            value: 190
          }, {
            name: '李丽芬',
            value: 170
          }, {
            name: '张立冬',
            value: 150
          }, {
            name: '王皓龙',
            value: 130
          }, {
            name: '陈玉峰',
            value: 110
          }, {
            name: '范立欣',
            value: 90
          }, {
            name: '李丽',
            value: 70
          }, {
            name: '程俊熙',
            value: 50
          }, {
            name: '陈龙',
            value: 30
          }, {
            name: '李艳',
            value: 10
          }]
        }]
      }
      charts2.setOption(option2)
    }
  }
}
</script>
<style lang="scss" scoped>
.layout-list-content {
  background-color: #f8f8f8!important;
  overflow: auto;
  padding-bottom: 20px;
  .cardDiv {
    width: 49.5%;
    margin-right: 1%;
    background-color: #fff;
    border-radius:10px;
    height: 385px;
    box-sizing: border-box;
    overflow: auto;
    .card-div-title {
      font-size: 18px;
      font-weight:bold;
      color:rgba(153,153,153,1);
    }
    .userDiv {
      height: 145px;
      background:rgba(51,150,252,0.1);
      border-radius:10px;
      padding: 30px 45px 35px 25px;
      box-sizing: border-box;
      margin-right: 2.8%;
      img {
        width: 80px;
        height: 80px;
        background-color: #fff;
        border-radius: 50%;
      }
      .username {
        font-weight:bold;
        color:rgba(51,51,51,1);
        font-size: 18px;
        margin: 14px 0;
      }
      .positionDiv {
        font-weight:400;
        color:rgba(51,51,51,1);
        font-size: 14px;
      }
    }
    .stuNum {
      height: 145px;
      background:rgba(248,248,248,1);
      border-radius: 10px;
      text-align: center;
      padding: 38px 22px 26px;
      box-sizing: border-box;
      margin-right: 2.8%;
      cursor: pointer;
      p:first-child {
        font-weight:bold;
        font-size: 36px;
        margin: 0;
        margin-bottom: 25px;
      }
      p:last-child {
        font-size: 14px;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin: 0;
      }
    }
    .tablistDiv {
      height:40px;
      background:rgba(248,248,248,1);
      border-radius: 10px;
      margin-right: 1.55%;
      line-height: 40px;
      box-sizing: border-box;
      display: flex;
      span:first-child {
        font-size: 14px;
        color:rgba(51,51,51,1);
        height: 100%;
      }
      span:last-child {
        font-size: 24px;
        font-weight: bold;
        height: 100%;
      }
    }
    .lookmore {
      color:rgba(153,153,153,1);
      font-size: 14px;
    }
    .thead-div {
      padding: 15px 0;
      border-bottom: 1px solid #ededed;
      span {
        width: 33.33%;
        font-weight:bold;
        color:rgba(153,153,153,1);
        font-size: 14px;
        text-align: center;
      }
    }
    #main1 {
      height: 330px;
      width: 100%;
    }
    #main2 {
      height: 330px;
      width: 100%;
    }
  }
}
</style>
