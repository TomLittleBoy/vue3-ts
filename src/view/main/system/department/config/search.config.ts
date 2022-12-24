import { IForm } from "@/base-ui/form"
export const searchFormConfig: IForm = {
  labelWidth: "120px",
  formItems: [
    {
      field: "name",
      label: "部门名称",
      type: "input",
      rules: [],
      placeholder: "请输入部门名称"
    },
    {
      field: "leader",
      label: "部门领导",
      type: "input",
      rules: [],
      placeholder: "请输入部门领导"
    }
  ]
}
