import * as Axios from 'axios'
import router from '@/router'

const baseURL: string = '/'
const axios = Axios.default.create({
  baseURL,
  timeout: 3000,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  maxContentLength: 2000,
  transformResponse: [
    data => {
      try {
        data = JSON.parse(data)
      } catch (e) {
        data = {}
      }
      if (data.status === 403) {
        router.push('/login')
      }
      return data
    }
  ]
})

// get
export const _get = (req: any) => {
  return axios.get(req.url, { params: req.data })
}

// post
export const _post = (req: any) => {
  return axios({ method: 'post', url: `/${req.url}`, data: req.data })
}

// patch
export const _put = (req: any) => {
  return axios({ method: 'put', url: `/${req.url}`, data: req.data })
}

// delete
export const _delete = (req: any) => {
  return axios({ method: 'delete', url: `/${req.url}`, data: req.data })
}
