// service统一出口
import TRequest from "./request"
import localCache from "@/utils/cache"
import { BASE_URL, TIME_OUT } from "./request/config"

const tRequest = new TRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache("token")
      if (token) {
        if (config && config?.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default tRequest
