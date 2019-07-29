import SysMenu from './types/SysMenu'
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
  return {
    success: true,
    data: {},
    msg: '登录成功'
  }
})

export default Mock
