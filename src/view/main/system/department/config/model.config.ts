import { IForm } from "@/base-ui/form"
export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入用户名"
    },
    {
      field: "parentId",
      type: "select",
      label: "上级部门",
      placeholder: "请选择上级部门",
      options: []
    },
    {
      field: "leader",
      type: "input",
      label: "部门领导者",
      placeholder: "请输入领导名"
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
