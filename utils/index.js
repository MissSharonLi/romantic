import { api } from '@/api'
import store from '@/store'
const commonUtils = {
  toast() {
    uni.showToast({
      title: arguments[0] || '',
      icon: arguments[1] || 'none',
      duration: arguments[2] || 2000,
      image: arguments[3] || '',
      postion: arguments[4] || 'center'
    })
  },
  loading() {
    uni.showLoading({
      title: arguments[0] || '',
      mask: true
    })
  },
  hideLoading() {
    uni.hideLoading()
  },
  isPhoneAvailable(phone) {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/
    if (!myreg.test(phone)) {
      return false
    } else {
      return true
    }
  },
  getTel(tel) {
    tel = (tel || '').toString() || '18888888888'
    const reg = /^(\d{3})\d{4}(\d{4})$/
    return tel.replace(reg, '$1****$2')
  },
  async runApiToGetUserInfo(token) {
    const { code, data } = await api.getUseriInfo({ token })
    if (code === 1 && data) {
      store.commit('setUserInfo', JSON.stringify(data))
      uni.setStorageSync('storage_userInfo', JSON.stringify(data))
    }
  },
  async runApiToGetAreaList(token) {
    const { code, data } = await api.getAreaList({ token: token })
    if (code === 1) store.commit('setAreaList', JSON.stringify(data))
  },
  login() {
    return new Promise((resolve, reject) => {
      const token = uni.getStorageSync('storage_token')
      const userInfo = uni.getStorageSync('storage_userInfo')
      if (token) {
        store.commit('setToken', token)
        store.commit('setUserInfo', userInfo)
        resolve(true)
      } else {
        uni.getUserProfile({
          desc: '获取您的昵称、头像、地区及性別',
          success: (res) => {
            const params = {
              nickname: res.userInfo.nickName,
              headimgurl: res.userInfo.avatarUrl,
              sex: res.userInfo.gender,
              province: res.userInfo.province,
              city: res.userInfo.city,
              country: res.userInfo.country
            }
            wx.login({
              provider: 'weixin',
              onlyAuthorize: true,
              success: async (obj) => {
                params.code = obj.code
                const { code, data } = await api.getWxapplogin(params)
                if (code === 1 && data) {
                  store.commit('setToken', data.token)
                  uni.setStorageSync('storage_token', data.token)
                  await commonUtils.runApiToGetUserInfo(data.token)
                  await commonUtils.runApiToGetAreaList(data.token)
                  resolve(true)
                }
              },
              fail: () => {
                commonUtils.toast('您已拒绝授权')
              }
            })
          },
          fail: () => {
            commonUtils.toast('您已拒绝授权')
          }
        })
      }
    })
  },
  /**
   * 检测当前的小程序
   * 是否是最新版本，是否需要下载、更新
   */
  checkUpdateVersion() {
    // 判断微信版本是否 兼容小程序更新机制API的使用
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      // 检测版本更新
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            wx.showModal({
              title: '温馨提示',
              content: '检测到新版本，是否重启小程序？',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(() => {
            // 新版本下载失败
            wx.showModal({
              title: '已有新版本',
              content: '请您删除小程序，重新搜索进入'
            })
          })
        }
      })
    } else {
      wx.showModal({
        title: '溫馨提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
}
export default commonUtils
