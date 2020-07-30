<template>
  <div class="evaluationdimension-div">
    <div class="clearfix padding-top-size-nomal padding-right-size-nomal">
      <el-button class="fr" type="primary">新建</el-button>
    </div>
    <div class="enable">
      <i class="enableTag bgcolor" />
      <span>已启用</span>
    </div>
    <div class="enable-Box">
      <div class="enable-div">
        <draggable
          :list="dimensionList1"
          :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
          class="dragArea1"
          @start="onStart"
          @end="onEnd"
        >
          <div v-for="(item, index) in dimensionList1" :key="index" class="cardDiv">
            <i class="icon-close-x" />
            <div class="nameDiv">{{ item.name }}</div>
            <div class="imgDiv" />
          </div>
        </draggable>
      </div>
    </div>
    <div class="enable">
      <i class="enableTag bgcolor" />
      <span>未启用</span>
    </div>
    <div class="enable-Box">
      <div class="enable-div">
        <draggable
          :list="dimensionList2"
          :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
          class="dragArea2"
          @start="onStart"
          @end="onEnd"
        >
          <div v-for="(item, index) in dimensionList2" :key="index" class="cardDiv">
            <i class="icon-close-x" />
            <div class="nameDiv">{{ item.name }}</div>
            <div class="imgDiv" />
          </div>
        </draggable>
      </div>
    </div>
    <div class="enable">
      <i class="enableTag bgcolor" />
      <span>回收站</span>
    </div>
    <div class="enable-Box">
      <div class="enable-div">
        <draggable
          :list="dimensionList3"
          :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
          class="dragArea3"
          @start="onStart"
          @end="onEnd"
        >
          <div v-for="(item, index) in dimensionList3" :key="index" class="cardDiv">
            <i class="icon-close-x" />
            <div class="nameDiv">{{ item.name }}</div>
            <div class="imgDiv" />
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  data () {
    return {
      falgs: 'article',
      dimensionList1: [{
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
      dimensionList2: [{
        name: '探究创新'
      }, {
        name: '公民素养'
      }],
      dimensionList3: [{
        name: '思想品德1'
      }, {
        name: '学业水平1'
      }]
    }
  },
  methods: {
    onEnd (ev) {
      if (ev.from.className === 'dragArea1' && ev.to.className !== 'dragArea1') {
        this.$delete(this.dimensionList1, ev.oldIndex)
      } else if (ev.from.className === 'dragArea2' && ev.to.className !== 'dragArea2') {
        this.$delete(this.dimensionList2, ev.oldIndex)
      } else if (ev.from.className === 'dragArea3' && ev.to.className !== 'dragArea3') {
        this.$delete(this.dimensionList3, ev.oldIndex)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.evaluationdimension-div {
    .enable {
        position: relative;
        padding: 20px;
        padding-left: 35px;
        font-size: 14px;
        color: #333;
    }
    .enableTag {
        position: absolute;
        top: 19px;
        left: 20px;
        width: 4px;
        height: 16px;
    }
    .enable-Box {
        padding: 0 20px;
    }
    .enable-div {
        padding: 20px;
        padding-right: 0;
        border-radius: 5px;
        border: 1px solid #ededed;
        .dragArea1 {
            display: flex;
        }
        .dragArea2 {
            display: flex;
        }
        .dragArea3 {
            display: flex;
        }
        .cardDiv {
            padding: 15px;
            margin-right: 20px;
            position: relative;
            background-color: #ccc;
            border-radius: 5px;
            display: flex;
            align-items: center;
            .icon-close-x {
                position: absolute;
                top: 2px;
                left: 2px;
                color: #fff;
            }
            .nameDiv {
                color: #fff;
                font-size: 18px;
                margin-right: 15px;
            }
            .imgDiv {
                width: 40px;
                height: 40px;
                background-color: #fff;
                border-radius: 20px;
            }
        }
    }
}
</style>
