import tRequest from "../../index"
import { IDataType } from "../../types"

//查询用户
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

//新建用户
export function createPageData(url: string, newData: any) {
  return tRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

//编辑用户
export function editPageData(url: string, editData: any) {
  return tRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
