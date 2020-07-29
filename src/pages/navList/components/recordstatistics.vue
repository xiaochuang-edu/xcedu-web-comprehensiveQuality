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
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
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
      }]
    }
  },
  mounted: function () {
    this.value = new Date()
    this.drawPie3()
    this.drawPie4()
    // 实现自适应部分
    window.onresize = () => {
      echarts.init(document.getElementById('main5')).resize()
      echarts.init(document.getElementById('main6')).resize()
    }
  },
  methods: {
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
    .card-div-title {
      font-size: 18px;
      font-weight: bold;
      color:rgba(153,153,153,1);
    }
  }
}
</style>
