<template>
  <div class="mis-container">
    <el-container>
      <el-aside :style="{width: getExpandMisMenu ? 'auto' : '260px'}">
        <mis-menu />
      </el-aside>
      <el-container>
        <el-header>
          <span class="sider-trigger">
          <Icon v-if="!getExpandMisMenu" @click="handleSiderTrigger" custom="iconfont mvzhankai" size="20" />
          <Icon v-else @click="handleSiderTrigger" custom="iconfont mvshouqi" size="20" />
          </span>
          <mis-header-item>
            <Icon @click="handleSetting" style="font-size: 18px;" type="md-more" />
            <Drawer :closable="true" v-model="showSetting">
              <Divider>主题风格设置</Divider>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </mis-header-item>
          <el-popover placement="bottom" trigger="hover">
            <mis-header-item slot="reference">
              <span class="header-avator"><img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar"></span>
              <span>myView Admin</span>
            </mis-header-item>
            <Button long type="text">修改密码</Button>
            <Button long @click="handleExit" type="text">退出</Button>
          </el-popover>
        </el-header>
        <el-main>
          <mis-tab-navi :navi-list="getCachePages" :active-navi="getCurrentPage" />
          <keep-alive>
            <router-view v-if="getLogin" :include="getCachePagesKeys" element-loading-spinner="iconfont mvloading loading-animation" v-loading="getLoading" />
          </keep-alive>
          <copy-right />
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
  data () {
    return {
      showSetting: false
    }
  },
  watch: {
    $route: {
      handler (to, from) {
        let getMenu = this.getMenu
        let menu = false
        for (let _menu of getMenu) {
          if (_menu.mkey === to.name) {
            menu = _menu
          }
        }
        if (menu) {
          this.$store.dispatch('UPDATECURRENTPAGE', menu)
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(['getLogin', 'getExpandMisMenu', 'getLoading', 'getMenu', 'getCurrentPage', 'getCachePages', 'getCachePagesKeys'])
  },
  methods: {
    handleSiderTrigger () {
      this.$store.dispatch('CHANGEEXPANDMISMENU')
    },
    handleExit () {
      // TODO 调用退出接口
      this.$router.push({
        name: 'login'
      })
    },
    handleSetting () {
      this.showSetting = true
    }
  },
  mounted () {
    if (!this.getLogin) {
      this.$axios.get('/api/getonlineuser').then(res => {
        if (res.success) {
          this.$store.dispatch('UPDATECURRENTUSER', res.data)
          console.dir(this.$route)
          let getMenu = this.getMenu
          let menu = false
          for (let _menu of getMenu) {
            if (_menu.mkey === this.$route.name) {
              menu = _menu
            }
          }
          if (menu) {
            this.$store.dispatch('UPDATECURRENTPAGE', menu)
          }
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
      line-height: 60px;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      padding: 0;
      .header-avator {
        img {
          width: 40px;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .sider-trigger {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
    }

    .el-aside {
      background: #001529;
      color: #333;
      box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
      z-index: 1;
      transition: all .2s ease-in-out;
    }

    .el-main {
      background-color: #f5f7f9;
      padding: 0;
    }
  }
}
</style>
