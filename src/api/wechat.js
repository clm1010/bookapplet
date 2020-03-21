export function getSetting(auth, onSuccess, onFail) {
  mpvue.getSetting({
    success(res) {
      console.log(res)
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log(res) // 直接抛出异常
    }
  })
}

/** 获取用户信息 */
export function getUserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success(res) {
      console.log(res)
      const { userInfo } = res
      if (userInfo) {
        onSuccess(userInfo)
      } else {
        onFail(res)
      }
    },
    fail(res) {
      console.log(res) // 直接抛出异常
    }
  })
}
