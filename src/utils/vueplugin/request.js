import axios from 'axios'

const request = function (option = {}) {
  const _request = axios.create({
    withCredentials: true,
    charset: 'UTF_8',
    timeout: 300000,
    baseURL: process.env.BASE_URL
  })

  // 以下是响应拦截器
  _request.interceptors.response.use(res => {
    console.log('拦截到请求响应')
    return res.data
  })

  // 以下是请求拦截器
  _request.interceptors.request.use(req => {
    return req
  })

  return _request
}

export default request
