<template>
  <div class="mis-menu">
    <div class="mis-logo">
      <img src="./myView_Admin.png" alt="logo">
    </div>
    <el-menu
    default-active="index"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="getExpandMisMenu">
      <el-submenu
      v-for="menu of getMenuTree"
      :index="menu.mkey"
      :key="menu.mkey">
        <template slot="title">
          <Icon style="margin-right: 8px;" :type="menu.micon" />
          <span slot="title">{{menu.mname}}</span>
        </template>
        <!-- <el-menu-item-group> -->
          <el-menu-item
          v-for="secondMenu of menu.child"
          :index="secondMenu.mkey"
          :key="secondMenu.mkey">{{secondMenu.mname}}</el-menu-item>
        <!-- </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MisMenu',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getExpandMisMenu',
      'getMenuTree'
    ])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (index, indexPath, item) {
      this.$router.push({
        name: index
      })
    }
  }
}
</script>

<style lang="less" scoped>
.mis-menu {
  .mis-logo {
    width: 100%;
    height: 60px;
    background-color: transparent;
    position: relative;

    img {
      width: 80%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>

<style lang="less">
.mis-menu {
  .el-menu {
    border-right: none;
  }
}
</style>
