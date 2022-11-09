import tRequest from "../../index"
import { IDataType } from "../../types"

export function getPageListData(url: string, queryInfo: any) {
  return tRequest.post<IDataType>({ url: url, data: queryInfo })
}
