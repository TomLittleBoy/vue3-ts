import rsRequest from "../../index"
import { IDataType } from "../../types"
enum DeptApi {
  deptList = "department/list"
}
export function getDeptFunction(Data: any) {
  return rsRequest.post<IDataType>({
    url: DeptApi.deptList,
    data: Data
  })
}
