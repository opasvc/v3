import service from '../../utils/http/axios/Axios'
// 封装GET请求
export const getRequest = <T>(url: string, params?: object): Promise<T> => {
  return service.get(url, { params })
}

// 封装POST请求
export const postRequest = <T>(url: string, data?: object): Promise<T> => {
  return service.post(url, data)
}
