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
export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .get(url, params)
        .then((response) => {
          console.log(response)
          resolve(response)
        })
        .catch((err) => {
          handleError(err)
          reject(err)
        })
    })
  }
}

/** POST请求处理 */
export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly
        .post(url, params)
        .then((response) => {
          console.log(response)
          resolve(response)
        })
        .catch((err) => {
          console.log(err)
          handleError(err)
          reject(err)
        })
    })
  }
}
