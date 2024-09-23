import { post, get } from '@/utils/http/axiosUtils'

interface userinfo {
    username: string
    password: string
}

interface result {
    // token: userinfo[]
    code: number
    msg: string
    data: any
    localTime: string
}

export async function login (data: userinfo) {
  return post<result>('/user/login', data)
}

export async function getUserInfo (data?: any) {
  return get<result>('/user', data)
}
