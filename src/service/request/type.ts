import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface TRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface TRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: TRequestInterceptors<T>
  showLoading?: boolean
}
