import axios from 'axios'
import md5 from 'js-md5'
import { baseUrl } from './config'
import commonUtils from '@/utils'
import store from '@/store'
const paramsList = ['get', 'delete', 'patch']
const dataList = ['post', 'put']

// 公共服务(加载中...)
const common = {
  loadingCount: 0,
  showFullScreenLoading: () => {
    common.loadingCount === 0 && commonUtils.loading('加载中...') // 防止多次弹出加载中
    common.loadingCount++
  },
  tryHideFullScreenLoading: () => {
    if (common.loadingCount <= 0) return
    common.loadingCount--
    common.loadingCount === 0 && commonUtils.hideLoading() // 关闭对应loading
  },
  /**
   * 处理空参数都为null
   * @param {Object} params - 参数
   */
  handlerNullParams(config) {
    const params = config[common.isTypeList(config.method)]
    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const val = params[key]
        if (val === '') {
          params[key] = null
        }
      }
    }
  },
  /**
   * RESTFUL请求设置参数位置
   * @param {string} method 方法 get|delete|patch|post|put
   * @returns
   */
  isTypeList(method) {
    if (paramsList.includes(method)) {
      return 'params'
    } else if (dataList.includes(method)) {
      return 'data'
    }
  },
  // 默认配置
  defaultParams: {
    baseURL: baseUrl,
    validateStatus: (status) => status < 500, // 拦截状态码大于500
    headers: {
      common: { Accept: 'application/json; charset=UTF-8' },
      patch: { 'Content-Type': 'application/json; charset=UTF-8' },
      post: { 'Content-Type': 'application/json; charset=UTF-8' },
      put: { 'Content-Type': 'application/json; charset=UTF-8' }
    },
    transformRequest: [],
    timeout: 30000, // 请求超时时间
    isRepeatRequest: false, // 是否开启重复请求拦截
    isResetEmptyParams: false, // 是否开启重置空参数
    request: null,
    requestError: null,
    response: null,
    responseError: null
  },
  /**
   * 参数md5加密
   * @param {Object} params - 参数
   */
  jsonSort(params) {
    let xtoken = ''
    const timestamp = Date.parse(new Date())
    const xtime = timestamp / 1000
    params['x-time'] = xtime
    const arr = []
    const json = {}
    for (const key in params) {
      arr.push(key)
    }
    arr.sort()
    for (const i in arr) {
      xtoken += md5(params[arr[i]].toString()) + 'romantic'
      json[arr[i]] = params[arr[i]]
    }
    xtoken = md5('roman_' + xtoken + '_tic')
    delete json['x-time']
    const myJson = JSON.parse(JSON.stringify(json))
    return { 'x-time': xtime, 'x-token': xtoken, data: myJson }
  }
}

// 自定义适配器来适配uniapp语法
axios.defaults.adapter = (config) => {
  return new Promise((resolve, reject) => {
    const settle = require('axios/lib/core/settle')
    const buildURL = require('axios/lib/helpers/buildURL')
    uni.request({
      method: config.method.toUpperCase(),
      url: baseUrl + buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: (response) => {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config
        }
        settle(resolve, reject, response)
      }
    })
  })
}

/**
 * 创建axios实例，参数如上，基本axios官方相同，除了isRepeatRequest、request、requestError、response、responseError
 * @param {Function} params.isRepeatRequest - 是否开启重复请求拦截
 * @param {Function} params.request - 请求前拦截
 * @param {Function} params.requestError - 请求前拦截异常处理
 * @param {Function} params.response - 请求后拦截
 * @param {Function} params.responseError - 请求后拦截异常处理
 * @param {object} store - vuex实例
 * @returns { GET, DEL, POST, PUT, PATCH, POST_FILE, GET_EXPORT }
 */
export default (params = common.defaultParams) => {
  params = Object.assign(common.defaultParams, params || {})
  // 创建axios实例
  const service = axios.create(params)
  const { request, requestError, response, responseError, isResetEmptyParams } = params
  /**
   * 请求前拦截
   * @param {object} config - axios实例
   */
  const defaultRequest =
    request ||
    ((config) => {
      if (config.loading) common.showFullScreenLoading()
      const transformData = common.jsonSort(config[common.isTypeList(config.method)])
      // 添加token
      config.headers['x-token'] = transformData['x-token']
      config.headers['x-time'] = transformData['x-time']
      config.headers['content-type'] = 'application/x-www-form-urlencoded'
      config.data = transformData.data
      // 处理为空的参数，设置为null
      isResetEmptyParams && common.handlerNullParams(config)
      return config
    })
  /**
   * 请求前拦截异常处理
   * @param {object} config - axios实例
   */
  const defaultRequestError = requestError || ((error) => Promise.reject(error))

  /**
   * 请求后拦截
   * @param {object} config - axios实例
   */
  const defaultResponse =
    response ||
    ((response) => {
      common.tryHideFullScreenLoading()
      const res = response.data
      if (response.config.responseType === 'blob') {
        if (response.data instanceof Blob) {
          return res
        } else {
          commonUtils.toast('导出文件类型异常')
          return Promise.reject(new Error('导出流异常'))
        }
      } else if (res instanceof Object && res.code !== 0 && !res.code) {
        return {
          code: 1,
          data: res
        }
      }
      // 请求成功
      if (res.code === 1) return Promise.resolve(res)
      // token过期
      if (res.code === 401) {
        uni.clearStorageSync()
        store.commit('setToken')
        store.commit('setUserInfo')
      }
      // isHandleResponse 是否业务自行处理响应
      if (!response.config.isHandleResponse) commonUtils.toast(res.msg)
      return res
    })

  /**
   * 请求后拦截异常处理
   * @param {object} config - axios实例
   */
  const defaultResponseError =
    responseError ||
    ((error) => {
      common.tryHideFullScreenLoading()
      if (!(error && ['取消重复请求', 'cancelToken'].includes(error.msg))) {
        if (error && error.response) {
          commonUtils.toast('系统异常')
        } else {
          commonUtils.toast('系统异常')
        }
      }
      return error
      // return Promise.reject(error)
    })

  // request 请求前拦截
  service.interceptors.request.use(defaultRequest, defaultRequestError)

  // response 请求后拦截器
  service.interceptors.response.use(defaultResponse, defaultResponseError)

  /**
   * get请求方法
   * @export axios
   * @param {String} url - 请求地址
   * @param {Object} params - 请求参数
   * @returns
   */
  const GET = (url, params = {}, loading = false) => {
    params.t = new Date().getTime() // get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
      url: url,
      method: 'GET',
      params,
      loading: loading
    })
  }
  /**
   * delete请求方法
   * @export axios
   * @param {String} url - 请求地址
   * @param {Object} params - 请求参数
   * @returns
   */
  const DEL = (url, params = {}) => {
    params.t = new Date().getTime() // get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
      url: url,
      method: 'DELETE',
      params
    })
  }

  /**
   * post请求方法
   * @export axios
   * @param {String} url - 请求地址
   * @param {Object} data - 请求参数
   * @returns
   */
  const POST = (url, data = {}, other = {}, loading = false, baseURL) => {
    return service({
      url,
      method: 'POST',
      ...(other || {}),
      data,
      loading: loading
    })
  }

  /**
   * put请求方法
   * @export axios
   * @param {String} url - 请求地址
   * @param {Object} data - 请求参数
   * @returns
   */
  const PUT = (url, data = {}, loading = false, baseURL = '/api') => {
    return service({
      url,
      method: 'PUT',
      data,
      baseURL: baseURL,
      loading: loading
    })
  }

  /**
   * patch请求方法
   * @export axios
   * @param {String} url - 请求地址
   * @param {Object} data - 请求参数
   * @returns
   */
  const PATCH = (url, params = {}) => {
    return service({
      url,
      method: 'PATCH',
      params
    })
  }

  /**
   * post上传文件请求方法
   * !! 必须使用formData方式
   * @export axios
   * @param {String} url - 请求地址
   * @param {Object} data - 请求参数
   * @returns
   */
  const POST_FILE = (url, data = {}) => {
    return service({
      url,
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8'
      },
      transformRequest: [(data) => data]
    })
  }

  /**
   * get导出文件
   * @export axios
   * @param {String} url - 请求地址
   * @param {Object} data - 请求参数
   * @returns
   */
  const GET_EXPORT = (url, params = {}) => {
    return service({
      url,
      method: 'GET',
      params,
      responseType: 'blob',
      timeout: 1000 * 60 * 3
    })
  }
  const POST_EXPORT = (url, params = {}) => {
    return service({
      url,
      method: 'POST',
      params,
      responseType: 'blob',
      timeout: 1000 * 60 * 3
    })
  }

  return {
    service,
    GET,
    DEL,
    POST,
    PUT,
    PATCH,
    POST_FILE,
    POST_EXPORT,
    GET_EXPORT
  }
}
