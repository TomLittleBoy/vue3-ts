import tRequest from "../../index"
import { IDataType } from "../../types"

export function getPageListData(url: string, queryInfo: any) {
  return tRequest.post<IDataType>({ url: url, data: queryInfo })
}

// 删除
//url:  /users/id
export function deletePageData(url: string) {
  return tRequest.delete<IDataType>({
    url: url
  })
}
