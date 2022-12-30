import { IForm } from "@/base-ui/form"
export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "菜单名称",
      placeholder: "请输入菜单名"
    },
    {
      field: "type",
      type: "input",
      label: "菜单类型",
      placeholder: "请输入菜单类型"
    },
    {
      field: "url",
      type: "input",
      label: "菜单url",
      placeholder: "请输入菜单url"
    },
    {
      field: "parentId",
      type: "cascader",
      label: "父级菜单",
      placeholder: "选择父级菜单",
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
