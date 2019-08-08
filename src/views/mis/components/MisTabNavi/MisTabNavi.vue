<template>
  <div class="mis-tab-navi">
    <div style="position: relative; overflow: hidden;">
      <div class="tab-navi-container">
        <span @click="handlePrev" class="tab-navi-prev">
          <Icon type="ios-arrow-back" />
        </span>
        <div class="tab-navi-scroll">
          <div class="tab-navi">
            <div :key="menu.mkey" @click="handleTabClick(menu)" v-for="(menu, index) of naviList" class="tab-item">{{menu.mname}}<Icon type="md-close" /></div>
            <!-- <div class="tab-item">测试菜单1<Icon type="md-close" /></div>
            <div class="tab-item">测试菜单1<Icon type="md-close" /></div>
            <div class="tab-item">测试菜单1<Icon type="md-close" /></div>
            <div class="tab-item">测试菜单1<Icon type="md-close" /></div>
            <div class="tab-item">测试菜单1<Icon type="md-close" /></div>
            <div class="tab-item">测试菜单1<Icon type="md-close" /></div>
            <div class="tab-item">测试菜单1<Icon type="md-close" /></div>
            <div class="tab-item">测试菜单1<Icon type="md-close" /></div> -->
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
  props: {
    naviList: {
      type: Array
    },
    activeNavi: {
      type: Object
    }
  },
  methods: {
    handlePrev () {

    },
    handleNext () {

    },
    handleTabClick (menu) {
      this.$router.push({
        name: menu.mkey
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mis-tab-navi {
  width: calc(100% - 284px);
  height: 44px;
  background-color: transparent;
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
        .tab-item {
          min-width: 100px;
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
