function createFly() {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  }
  return null
}

/** 处理错误输出 */
function handleError(err) {
  console.log(err)
}

/** GET请求处理 */
export function get(url, params = {}, showError = true) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then((response) => {
          // console.log(response)
          if (response && response.data && response.data.error_code === 0) {
            resolve(response)
          } else {
            if (showError) {
              const msg =
                (response && response.data && response.data.msg) || '请求失败'
              mpvue.showToast({
                title: msg,
                duration: 2000
              })
            }
            reject(response)
          }
        })
        .catch((err) => {
          handleError(err)
          reject(err)
        })
    })
  }
}

/** POST请求处理 */
export function post(url, params = {}, showError = true) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then((response) => {
          // console.log(response)
          if (response && response.data && response.data.error_code === 0) {
            resolve(response)
          } else {
            if (showError) {
              const msg =
                (response && response.data && response.data.msg) || '请求失败'
              mpvue.showToast({
                title: msg,
                duration: 2000
              })
            }
            reject(response)
          }
        })
        .catch((err) => {
          console.log(err)
          handleError(err)
          reject(err)
        })
    })
  }
}
