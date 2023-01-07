import { mapGetters, createNamespacedHelpers } from "vuex"

import { useMapper } from "./useMapper"

export function useGetters(moduleName: string | any, mapper: any) {
  let mapperFn: any = mapGetters
  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  } else {
    //没有命名空间,直接将mapper赋值,mapper为第一参数
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}
