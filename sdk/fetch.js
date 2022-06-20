import http from './http'

const { service, GET, DEL, POST, PUT, PATCH, POST_FILE, GET_EXPORT } = http({
  baseURL: '/api',
  loading: false
})

export { service, GET, DEL, POST, PUT, PATCH, POST_FILE, GET_EXPORT }
