import { mapState, createNamespacedHelpers } from "vuex"
import { useMapper } from "./useMapper"

export function useState(moduleName: string | any, mapper: any) {
  let mapperFn = mapState

  if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  } else {
    //没有命名空间,直接将mapper赋值,mapper为第一参数
    mapper = moduleName
  }

  return useMapper(mapper, mapperFn)
}
