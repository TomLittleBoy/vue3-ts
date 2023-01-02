import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px"
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: "cellphone",
      type: "input",
      label: "手机号码",
      placeholder: "请输入手机号码"
    },
    {
      field: "name",
      label: "用户名",
      type: "input",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      label: "真实姓名",
      type: "password",
      rules: [],
      placeholder: "请输入真实姓名"
    },

    {
      field: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 }
      ]
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
