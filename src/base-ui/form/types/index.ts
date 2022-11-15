type IFormType = "input" | "password" | "select" | "datepicker"
export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对特殊的属性
  otherOptions?: any
  // 针对select
  options?: any
  field?: string
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any
  itemStyle?: any
}
