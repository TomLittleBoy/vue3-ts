import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "类别名称",
      placeholder: "请输入类别名"
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
