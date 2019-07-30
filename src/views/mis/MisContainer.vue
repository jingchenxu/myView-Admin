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
          <mis-header-item>
            <span class="header-avator"><img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar"></span>
            <span>myView Admin</span>
          </mis-header-item>
        </el-header>
        <el-main>
          <mis-tab-navi/>
          <router-view v-if="getLogin" />
          <copy-right/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MisMenu from './components/MisMenu'
import MisTabNavi from './components/MisTabNavi'
import MisHeaderItem from './components/MisHeaderItem'
import { mapGetters } from 'vuex'

export default {
  name: 'MisContainer',
  components: {
    MisMenu,
    MisTabNavi,
    MisHeaderItem
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
  },
  mounted () {
    if (!this.getLogin) {
      this.$axios.get('/api/getonlineuser').then(res => {
        if (res.success) {
          this.$store.dispatch('UPDATECURRENTUSER', res.data)
        }
      })
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
      .header-avator {
        img {
          width: 40px;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
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
      padding: 0;
    }
  }
}
</style>
