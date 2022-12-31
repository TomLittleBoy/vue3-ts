import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  labelWidth: "120px",

  formItems: [
    {
      field: "name",
      label: "角色名称",
      type: "input",
      rules: [],
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      label: "权限介绍",
      type: "input",
      placeholder: "请输入权限介绍"
    },

    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      rules: [],
      placeholder: "请选择创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ]
}
