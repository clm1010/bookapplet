// 工具库

import config from './config'

// http get工具函数 获取数据
export function get (url, data) {
  return request(url, 'GET', data)
}
// http POST工具函数 获取数据
export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败！', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}

// 提示框
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success',
    duration: 2000
  })
}
// 显示模态弹窗
export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
