import { get, post } from '@/utils/request.js'
import { APP_ID, APP_SECRET } from '../utils/const'
const API_URL = 'https://test.youbaobao.xyz:18081'

/** 获取首页数据 */
export function getHomeData(parpms) {
  return get(`${API_URL}/book/home/v2`, parpms)
}

/** 获取"为你推荐"数据 */
export function recommend() {
  return get(`${API_URL}/book/home/recommend/v2`)
}

/** 获取"免费阅读"数据 */
export function freeRead() {
  return get(`${API_URL}/book/home/freeRead/v2`)
}

/** 获取"当前最热"数据 */
export function hotBook() {
  return get(`${API_URL}/book/home/hotBook/v2`)
}

/** 获取openId */
export function getOpenId(code) {
  return get(`${API_URL}/openId/get`, {
    appId: APP_ID,
    secret: APP_SECRET,
    code
  })
}
/** 用户注册 */
export function register(openId, userInfo) {
  return post(`${API_URL}/user/register`, {
    openId,
    platform: mpvuePlatform,
    ...userInfo
  })
}
