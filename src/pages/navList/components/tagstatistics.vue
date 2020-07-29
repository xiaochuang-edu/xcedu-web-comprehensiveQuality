<template>
  <div class="tagstatistics-div">
    <div>
      <div class="selectYear">
        <el-date-picker v-model="yearvalue" format="yyyy 年" type="year" />
      </div>
      <el-row>
        <el-col :span="12">
          <div class="left-container">
            <div class="clearfix">
              <div class="card-div-title fl">特长分析</div>
              <div class="lookmore fr">查看全部</div>
            </div>
            <div id="main3" ref="main3" />
            <div class="thead-div1 margin-top-size-large clearfix">
              <span class="fl">标签</span>
              <span class="fl">记录条数</span>
            </div>
            <div v-for="(item1, index1) in rankList" :key="index1" class="thead-div1 clearfix">
              <span class="fl" style="font-weight: normal;">{{ item1.tabname }}</span>
              <span class="fl" style="font-weight: normal;">{{ item1.pieces }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="left-container">
            <div class="clearfix">
              <div class="card-div-title fl">
                <span>学生分析</span>
                <el-dropdown>
                  <el-button type="primary">
                    篮球<i class="el-icon-arrow-down el-icon--right" />
                  </el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>篮球</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="lookmore fr">查看全部</div>
            </div>
            <div id="main4" ref="main4" />
            <div class="thead-div margin-top-size-large clearfix">
              <span class="fl">学生</span>
              <span class="fl">班级</span>
              <span class="fl">记录条数</span>
            </div>
            <div v-for="(item1, index1) in rankList" :key="index1" class="thead-div clearfix">
              <span class="fl" style="font-weight: normal;">{{ item1.tabname }}</span>
              <span class="fl" style="font-weight: normal;">{{ item1.pieces }}</span>
              <span class="fl" style="font-weight: normal;">{{ item1.stuname }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      yearvalue: '',
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
      }]
    }
  },
  mounted: function () {
    this.yearvalue = new Date()
    this.drawPie1()
    this.drawPie2()
    // 实现自适应部分
    window.onresize = () => {
      echarts.init(document.getElementById('main3')).resize()
      echarts.init(document.getElementById('main4')).resize()
    }
  },
  methods: {
    drawPie1: function () {
      var charts3 = echarts.init(this.$refs.main3)
      var option3 = {
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
      charts3.setOption(option3)
    },
    drawPie2: function () {
      var charts4 = echarts.init(this.$refs.main4)
      var option4 = {
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
                type: 'solid'
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
      charts4.setOption(option4)
    }
  }
}
</script>
<style lang="scss" scoped>
.tagstatistics-div {
  .selectYear {
    padding: 20px;
  }
  .left-container {
    padding: 20px;
    .card-div-title {
      font-size: 18px;
      font-weight: bold;
      color:rgba(153,153,153,1);
      span {
        font-size: 18px;
        font-weight: bold;
        color:rgba(153,153,153,1);
        margin-right: 15px;
      }
    }
    .lookmore {
      color:rgba(153,153,153,1);
      font-size: 14px;
    }
    #main3 {
      width: 100%;
      height: 330px;
    }
    #main4 {
      width: 100%;
      height: 330px;
    }
    .thead-div1 {
      padding: 15px 0;
      border-bottom: 1px solid #ededed;
      span {
        width: 50%;
        font-weight:bold;
        color:rgba(153,153,153,1);
        font-size: 14px;
        text-align: center;
      }
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
  }
  .left-container:first-child {
    border-right: 1px dashed #eee;
  }
}
</style>
