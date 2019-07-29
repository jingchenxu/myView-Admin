import { SysMenu, SysUser } from '../types/sys'
import menuList from './data/menu'
const Mock = require('mockjs')

Mock.mock('/api/data', 'get', (req, res) => {
  let sysMenu = new SysMenu()
  sysMenu.mid = '1213'
  return {
    success: true,
    data: sysMenu,
    msg: 'success'
  }
})

Mock.mock('/api/login', 'post', (req, res) => {
  // 返回用户的基本信息
  let user = new SysUser()
  // 返回用户的菜单信息
  let menu = menuList
  // TODO 返回用户的菜单操作按钮信息
  return {
    success: true,
    data: {
      user,
      menu
    },
    msg: '登录成功'
  }
})

export default Mock
