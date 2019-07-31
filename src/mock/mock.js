import {
  SysMenu,
  SysUser
} from '../types/sys'
import menuList from './data/menu'
import userList from './data/userlist'
const Mock = require('mockjs')

Mock.setup({
  timeout: '300~3000'
})

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

Mock.mock('/api/getonlineuser', 'get', (req, res) => {
  let user = new SysUser()
  let menu = menuList
  return {
    success: true,
    data: {
      user,
      menu
    },
    msg: ''
  }
})

Mock.mock('/api/searchsyspage1columns', 'get', (req, res) => {
  return {
    success: true,
    data: {},
    msg: ''
  }
})

Mock.mock(/\/api\/searchuserlist[\s\S]*?/, 'get', (req, res) => {
  function getUrl (para) {
    var paraArr = req.url.split('?')[1].split('&')
    for (var i = 0; i < paraArr.length; i++) {
      if (para === paraArr[i].split('=')[0]) {
        return paraArr[i].split('=')[1]
      }
    }
    return ''
  }
  let pagenumber = Number(getUrl('pagenumber'))
  let limit = Number(getUrl('limit'))
  let name = getUrl('name')
  let address = getUrl('address')
  let _userList = []
  if (name !== '') {
    name = decodeURIComponent(name)
    _userList = userList.filter(user => user.name.indexOf(name) > -1)
  } else {
    _userList = Object.assign(userList, [])
  }
  console.dir(userList)
  let start = (pagenumber - 1) * limit
  let end = pagenumber * limit
  return {
    success: true,
    data: {
      list: _userList.slice(start, end),
      total: userList.length
    },
    msg: ''
  }
})

export default Mock
