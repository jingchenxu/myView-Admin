<template>
  <div class="mis-tab-navi">
    <div style="position: relative; overflow: hidden;">
      <div class="tab-navi-container">
        <span @click="handlePrev" class="tab-navi-prev">
          <Icon type="ios-arrow-back" />
        </span>
        <div ref="navi-scroll" class="tab-navi-scroll">
          <div ref="tab-navi" class="tab-navi">
            <div :class="activeMKey === menu.mkey ? 'active' : ''" :key="menu.mkey" @click="handleTabClick(menu)" v-for="(menu, index) of naviList" class="tab-item">
              <div class="navi-title">
                <span>{{menu.mname}}</span>
              </div>
              <Icon @click.stop="handleClose(menu, index, naviList[index-1], naviList[index+1])" type="md-close" />
            </div>
          </div>
        </div>
        <span @click="handleNext" class="tab-navi-next">
          <Icon type="ios-arrow-forward" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MisTabNavi',
  data () {
    return {
      translateX: 0
    }
  },
  props: {
    naviList: {
      type: Array
    },
    activeNavi: {
      type: Object
    }
  },
  computed: {
    activeMKey () {
      return this.activeNavi.mkey
    }
  },
  watch: {
    naviList: {
      handler (val) {
        if (val.length === 0) {
          this.$router.push({
            name: 'index'
          })
        }
        this.updateNaviPosition()
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.updateNaviPosition)
  },
  methods: {
    handlePrev () {
      console.log('向左移动')
      const tabNavi = this.$refs['tab-navi']
      const naviScroll = this.$refs['navi-scroll']
      const tabNavi_width = tabNavi.clientWidth
      const naviScroll_width = naviScroll.clientWidth
      // 先判断能不能向左移动
      // 如果能向左移动 则移动多长的距离
      if ((tabNavi_width + this.translateX) > naviScroll_width) {
        if ((tabNavi_width + this.translateX) > naviScroll_width * 2) {
          this.translateX = this.translateX - naviScroll_width
        } else {
          this.translateX = this.translateX - ((tabNavi_width + this.translateX) - naviScroll_width)
        }
      } else {
        console.log('不能向左移动了')
      }
      tabNavi.style.transform = `translateX(${this.translateX}px)`
    },
    handleNext () {
      console.log('向右移动')
      const tabNavi = this.$refs['tab-navi']
      const naviScroll = this.$refs['navi-scroll']
      const tabNavi_width = tabNavi.clientWidth
      const naviScroll_width = naviScroll.clientWidth
      // 先判断能不能向右
      // 如果向右移动则移动多长距离
      if (this.translateX < 0) {
        if ((0 - this.translateX) > naviScroll_width) {
          this.translateX = this.translateX + naviScroll_width
        } else {
          this.translateX = 0
        }
      } else {
        console.log('不能向右移动')
      }
      tabNavi.style.transform = `translateX(${this.translateX}px)`
    },
    updateNaviPosition () {
      // 判断需要向哪边移动
      const tabNavi = this.$refs['tab-navi']
      const naviScroll = this.$refs['navi-scroll']
      const tabNavi_width = tabNavi.clientWidth
      const naviScroll_width = naviScroll.clientWidth
      // 先判断是否需要移动 translateX = 0 不需要移动
      // 再判断需要像哪边移动 tabNavi_width + translateX < naviScroll_width 需要移动 需要将 translateX = 0
      if (tabNavi_width + this.translateX < naviScroll_width) {
        this.translateX = 0
      }
      tabNavi.style.transform = `translateX(${this.translateX}px)`
    },
    handleTabClick (menu) {
      this.$router.push({
        name: menu.mkey
      })
    },
    handleClose (menu, index, preMenu, nextMenu) {
      this.$store.dispatch('CLOSECACHEPAGE', menu)
      if (preMenu) {
        this.$router.push({
          name: preMenu.mkey
        })
      } else {
        if (nextMenu) {
          this.$router.push({
            name: nextMenu.mkey
          })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mis-tab-navi {
  width: calc(100% - 284px);
  height: 44px;
  background-color: #f5f7f9;
  position: fixed;
  margin: 0 12px;
  z-index: 2;
  .tab-navi-container {
    padding: 6px 32px;
    position: relative;
    .tab-navi-prev {
      width: 32px;
      text-align: center;
      position: absolute;
      line-height: 32px;
      cursor: pointer;
      left: 0;
      font-size: 16px;
    }
    .tab-navi-scroll {
      overflow: hidden;
      white-space: nowrap;
      .tab-navi {
        padding-left: 0;
        margin: 0;
        float: left;
        list-style: none;
        box-sizing: border-box;
        position: relative;
        transition: transform 0.5s ease-in-out;
        .navi-title {
          display: inline-block;
          margin-right: 10px;
        }
        .tab-item {
          min-width: 50px;
          margin-right: 10px;
          height: 32px;
          line-height: 32px;
          background-color: white;
          padding: 0 10px;
          display: inline-block;
          cursor: pointer;
          position: relative;
        }
        .tab-item:hover {
          background-color: #f5f7f9;
        }
        .active {
          background-color: #f5f7f9;
        }
      }
    }
    .tab-navi-next {
      width: 32px;
      text-align: center;
      position: absolute;
      line-height: 32px;
      cursor: pointer;
      right: 0;
      top: 6px;
      font-size: 16px;
    }
  }
}
</style>
