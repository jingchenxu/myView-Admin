import {
  SysMenu,
  SysUser
} from '../types/sys'
import menuList from './data/menu'
import userList from './data/userlist'
import syspage1columns from './data/syspage1columns'
const Mock = require('mockjs')
const uuidv5 = require('uuid/v5')

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
  let login = JSON.parse(req.body)
  // 返回用户的基本信息
  let user = new SysUser()
  if (login.user !== 'mvadmin' || login.password !== 'mvadmin') {
    return {
      success: false,
      data: {},
      msg: '用户名/密码错误'
    }
  }
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

Mock.mock('/api/savesysuser', 'post', (req, res) => {
  let _user = JSON.parse(req.body)
  _user['userid'] = uuidv5('myview admin', uuidv5.DNS)
  userList.unshift(_user)
  return {
    success: true,
    data: {},
    msg: '保存成功'
  }
})

Mock.mock('/api/deletesysuser', 'delete', (req, res) => {
  let _selection = JSON.parse(req.body)
  _selection.map(row => {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].userid === row.userid) {
        console.log('找到了', row.userid, '----------', i)
        userList.splice(i, 1)
      }
    }
  })
  return {
    success: true,
    data: {},
    msg: '删除成功'
  }
})

Mock.mock(/\/api\/getcolumns[\s\S]*?/, 'get', (req, res) => {
  function getUrl (para) {
    var paraArr = req.url.split('?')[1].split('&')
    for (var i = 0; i < paraArr.length; i++) {
      if (para === paraArr[i].split('=')[0]) {
        return paraArr[i].split('=')[1]
      }
    }
    return ''
  }
  let columnid = getUrl('columnid')
  let data = []
  switch (columnid) {
    case 'syspage':
      data = syspage1columns
      break
    default:
      break
  }
  return {
    success: true,
    data,
    msg: ''
  }
})

Mock.mock('/api/savearticle', 'post', (req, res) => {
  let article = JSON.parse(req.body)
  console.dir(article)
  return {
    success: true,
    data: {},
    msg: '保存成功'
  }
})

export default Mock
