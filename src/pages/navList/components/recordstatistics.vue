<template>
  <div class="recordstatistics-div">
    <div>
      <div class="selectYear">
        <el-date-picker v-model="value" format="yyyy 年" type="year" />
      </div>
      <el-row>
        <el-col :span="10">
          <div class="right-container">
            <div class="clearfix">
              <div class="card-div-title fl">维度分析</div>
            </div>
            <div id="main5" ref="main5" />
          </div>
        </el-col>
        <el-col :span="14">
          <div class="right-container">
            <div class="clearfix">
              <div class="card-div-title fl">月记录量分析</div>
            </div>
            <div id="main6" ref="main6" />
          </div>
        </el-col>
      </el-row>
      <div class="bottom-content-div">
        <div>
          <span class="card-div-title">年级分析</span>
          <el-cascader
            v-model="selectvalue"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
            @change="handleChange"
          />
        </div>
        <div id="main7" ref="main7" />
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      selectvalue: '',
      value: '',
      dimensionList: [{
        name: '思想品德',
        value: 1696
      }, {
        name: '学业水平',
        value: 1796
      }, {
        name: '身心健康',
        value: 1868
      }, {
        name: '艺术素养',
        value: 2014
      }, {
        name: '社会实践',
        value: 2144
      }],
      options: [{
        value: 1,
        label: '白云校区',
        children: [{
          value: 11,
          label: '高一年级'
        }, {
          value: 22,
          label: '高二年级'
        }, {
          value: 33,
          label: '高三年级'
        }]
      }],
      classList: [{
        name: '1班',
        value: 90
      }, {
        name: '2班',
        value: 70
      }, {
        name: '3班',
        value: 50
      }, {
        name: '4班',
        value: 30
      }, {
        name: '5班',
        value: 10
      }, {
        name: '6班',
        value: 20
      }, {
        name: '7班',
        value: 60
      }, {
        name: '8班',
        value: 50
      }, {
        name: '9班',
        value: 30
      }, {
        name: '10班',
        value: 10
      }, {
        name: '11班',
        value: 60
      }, {
        name: '12班',
        value: 50
      }, {
        name: '13班',
        value: 40
      }, {
        name: '14班',
        value: 90
      }, {
        name: '15班',
        value: 60
      }, {
        name: '16班',
        value: 40
      }, {
        name: '17班',
        value: 30
      }]
    }
  },
  mounted: function () {
    this.value = new Date()
    this.drawPie3()
    this.drawPie4()
    this.drawPie5()
    // 实现自适应部分
    window.onresize = () => {
      echarts.init(document.getElementById('main5')).resize()
      echarts.init(document.getElementById('main6')).resize()
      echarts.init(document.getElementById('main7')).resize()
    }
  },
  methods: {
    handleChange: function () {

    },
    drawPie3: function () {
      var charts5 = echarts.init(this.$refs.main5)
      var option5 = {
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
          top: 60,
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
          'rgba(233,184,188,1)'
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
            data: this.dimensionList
          }
        ]
      }
      charts5.setOption(option5)
    },
    drawPie4: function () {
      var charts6 = echarts.init(this.$refs.main6)
      var option6 = {
        color: 'rgba(143,201,239,1)',
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: { show: false },
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
        },
        yAxis: {
          type: 'value',
          max: 100,
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
        },
        series: [{
          data: [42, 53, 60, 14, 29, 30, 32, 45, 66, 77, 87, 98],
          type: 'line'
        }]
      }
      charts6.setOption(option6)
    },
    drawPie5: function () {
      var charts7 = echarts.init(this.$refs.main7)
      var option7 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '10%',
          top: '20%',
          containLabel: false
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            data: ['1班', '2班', '3班', '4班', '5班', '6班', '7班', '8班', '9班', '10班', '11班', '12班', '13班', '14班', '15班', '16班', '17班'],
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
            max: 100,
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
          data: this.classList,
          itemStyle: {
            normal: {
              color: function (params) {
                var colorItem = ['rgba(199,224,141,1)', 'rgba(118,195,159,1)', 'rgba(143,201,239,1)', 'rgba(152,165,217,1)', 'rgba(233,184,188,1)', 'rgba(249,169,98,1)', 'rgba(190,206,163,1)', 'rgba(136,192,204,1)', 'rgba(68,179,234,1)', 'rgba(78,126,206,1)']
                var currentItem = 0
                var colorList = []
                for (var i = 0; i < option7.series[0].data.length; i++) {
                  colorList.push(colorItem[currentItem])
                  if (currentItem < 9) {
                    currentItem++
                  } else {
                    currentItem = 0
                  }
                }
                return colorList[params.dataIndex]
              }
            }
          }
        }]
      }
      charts7.setOption(option7)
    }
  }
}
</script>
<style lang="scss" scoped>
.recordstatistics-div {
  .selectYear {
    padding: 20px;
  }
  #main5 {
    width: 100%;
    height: 330px;
  }
  #main6 {
    width: 100%;
    height: 330px;
  }
  .right-container {
    padding: 20px;
  }
  .card-div-title {
    font-size: 18px;
    font-weight: bold;
    color:rgba(153,153,153,1);
  }
  .el-row {
    border-bottom: 1px solid #ededed;
  }
  .bottom-content-div {
    padding: 20px;
  }
  .el-cascader {
    margin-left: 20px;
  }
  #main7 {
    width: 100%;
    height: 330px;
  }
}
</style>
