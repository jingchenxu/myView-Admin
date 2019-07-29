<template>
  <div class="mis-container">
    <el-container>
      <el-aside style="width: auto;">
        <mis-menu/>
      </el-aside>
      <el-container>
        <el-header>
          <a type="text" class="sider-trigger-a">
            <Icon @click="handleSiderTrigger" style="font-size: 26px;" type="md-menu" />
          </a>
        </el-header>
        <el-main>
          <mis-tab-navi/>
          <router-view v-if="getLogin" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MisMenu from './components/MisMenu'
import MisTabNavi from './components/MisTabNavi'
import { mapGetters } from 'vuex'

export default {
  name: 'MisContainer',
  components: {
    MisMenu,
    MisTabNavi
  },
  computed: {
    ...mapGetters([
      'getLogin'
    ])
  },
  methods: {
    handleSiderTrigger () {
      this.$store.dispatch('CHANGEEXPANDMISMENU')
    }
  }
}
</script>

<style lang="less">
.mis-container {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      background-color: #b3c0d1;
      color: #333;
      line-height: 60px;
      a {
        color: #2d8cf0;
        background: transparent;
        text-decoration: none;
        outline: none;
        cursor: pointer;
        -webkit-transition: color .2s ease;
        transition: color .2s ease;
      }
      .sider-trigger-a {
        padding: 6px;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        color: #5c6b77;
        margin-top: 12px;
      }
    }

    .el-aside {
      background-color: #d3dce6;
      color: #333;
    }

    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 160px;
      padding: 0;
    }
  }
}
</style>
