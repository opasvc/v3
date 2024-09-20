// src/utils/http.ts

import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// 默认配置
const defaultOptions: AxiosRequestConfig = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
}

// 创建 axios 实例
const service = axios.create(defaultOptions)

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，比如添加 token 到 header
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data
  },
  (error: AxiosError) => {
    // 对响应错误做点什么（比如统一处理错误信息）
    return Promise.reject(error)
  }
)

// 封装 get 方法
export function get<T> (url: string, params?: any): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .get<T>(url, { params })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
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
