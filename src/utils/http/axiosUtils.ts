// src/utils/http.ts
import { ElMessage } from 'element-plus'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// 默认配置
const defaultOptions: AxiosRequestConfig = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
}

// 创建 axios 实例
const service = axios.create(defaultOptions)

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，比如添加 token 到 header todo token
    const token = localStorage.getItem('token')
    if (token) {
      console.log(config.headers)
      config.headers.Authorization = `Bearer ${token}`
      console.log(config.headers)
    }
    return config
  },
  (error) => {
    ElMessage.error(error.message)
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const r = response.data
    if (r.code !== 200) {
      ElMessage.error(r.msg)
    }
    // 对响应数据做点什么
    return response
  },
  (error: AxiosError) => {
    ElMessage.error(error.message)
    // 对响应错误做点什么（比如统一处理错误信息）
    return Promise.reject(error)
  }
)

// 封装 get 方法
export function get<T> (url: string, params?: any): Promise<T> {
  return service.get(url, { params }).then((response) => response.data)
}

// 封装 post 方法
export function post<T> (url: string, data?: any): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .post<T>(url, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 封装 put 方法
export function put<T> (url: string, data?: any): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .put<T>(url, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 封装 patch 方法
export function patch<T> (url: string, data?: any): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .patch<T>(url, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 封装 delete 方法
export function del<T> (url:string, data?:any): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .delete<T>(url, data)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
