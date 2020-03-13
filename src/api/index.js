import { get } from '@/utils/request.js'
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
