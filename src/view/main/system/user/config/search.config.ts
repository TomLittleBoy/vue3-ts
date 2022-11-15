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
      field: "id",
      type: "input",
      label: "id",
      placeholder: "请输入id"
    },
    {
      field: "name",
      label: "用户名",
      type: "input",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      field: "password",
      label: "密码",
      type: "password",
      rules: [],
      placeholder: "请输入密码"
    },
    {
      field: "sport",
      label: "喜欢的运动",
      type: "select",
      rules: [],
      placeholder: "请输入喜欢的运动",
      options: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" }
      ]
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
      field: "createTime",
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
