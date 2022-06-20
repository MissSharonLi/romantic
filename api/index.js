const req = require.context('./modules', false, /\.js/)
const requireAll = (requireContext) =>
  requireContext.keys().reduce((prev, cur) => {
    const module = requireContext(cur)
    return { ...prev, ...module }
  }, {}) || {}

export const api = requireAll(req)

export default {
  install(Vue) {
    Vue.prototype.$api = Object.freeze(api)
  }
}
