// 封装axios
import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*'
  }
})
// 添加请求拦截器
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
})
// 添加响应拦截器
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})
// 封装get请求
service.get = (url: string, params?: object) => {
  return service({
    url,
    method: 'get',
    params
  })
}
// 封装post请求
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
service.post = (url: string, data?: object) => {
  return service({
    url,
    method: 'post',
    data
  })
}
// 封装put请求
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
service.put = (url: string, data?: object) => {
  return service({
    url,
    method: 'put',
    data
  })
}

// 封装delete请求
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
service.delete = (url: string, data?: object) => {
  return service({
    url,
    method: 'delete',
    data
  })
}

// 封装patch请求
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
service.patch = (url: string, data?: object) => {
  return service({
    url,
    method: 'patch',
    data
  })
}

// 导出
export default service
