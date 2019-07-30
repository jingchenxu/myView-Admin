<template>
  <div class="mis-container">
    <el-container>
      <el-aside :style="{width: getExpandMisMenu ? 'auto' : '260px'}">
        <mis-menu />
      </el-aside>
      <el-container>
        <el-header>
          <a type="text" class="sider-trigger-a">
            <Icon @click="handleSiderTrigger" style="font-size: 26px;" type="md-menu" />
          </a>
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
          <mis-tab-navi />
          <router-view v-if="getLogin" />
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
  computed: {
    ...mapGetters(['getLogin', 'getExpandMisMenu'])
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
      line-height: 60px;
      box-shadow: 0 1px 4px rgba(0,21,41,.08);
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
        -webkit-transition: color 0.2s ease;
        transition: color 0.2s ease;
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
      background: #001529;
      color: #333;
      box-shadow: 2px 0 6px rgba(0,21,41,.35);
      z-index: 1;
    }

    .el-main {
      background-color: #e9eef3;
      padding: 0;
    }
  }
}
</style>
