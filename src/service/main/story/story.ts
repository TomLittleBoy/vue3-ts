import tRequest from "../../index"
import { IDataType } from "../../types"

//查询 故事列表
export function getStoryList(url: string) {
  return tRequest.post<IDataType>({ url: url })
}

//添加故事
// export function addStroy(url: string, data: any) {
//   return tRequest.post<IDataType>({
//     url: url,
//     data: data
//   })
// }
