import { _get, _post, _delete } from './index'

// 登录
export const login = (data: any) => {
  const req = {
    data,
    url: '/api/login'
  }
  return _post(req)
}

// 查询用户列表
export const searchUserList = (data: any) => {
  const req = {
    data,
    url: '/api/searchuserlist'
  }
  return _get(req)
}

// 保存用户信息
export const saveSysUser = (data: any) => {
  const req = {
    data,
    url: '/api/savesysuser'
  }
  return _post(req)
}

// 查询用户列表表头
export const getColumns = (data: any) => {
  const req = {
    data,
    url: '/api/getcolumns'
  }
  return _get(req)
}
