import service from '@/utils/http/axios/Axios'

/**
 * 登录
 * @param data
 * @returns
 */
export const login = (data: any) => {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}
