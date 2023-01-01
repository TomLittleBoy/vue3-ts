import { IForm } from "@/base-ui/form"
export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "oldPrice",
      type: "input",
      label: "商品原价",
      placeholder: "请输入商品原价"
    },
    {
      field: "newPrice",
      type: "input",
      label: "商品现价",
      placeholder: "请输入商品现价"
    },
    {
      field: "desc",
      type: "input",
      label: "商品描述",
      placeholder: "请输入商品描述"
    },
    {
      field: "status",
      type: "input",
      label: "状态",
      placeholder: "请输入商品状态"
    },
    {
      field: "imgUrl",
      type: "input",
      label: "商品图片",
      placeholder: "商品图片"
    },
    {
      field: "inventoryCount",
      type: "input",
      label: "库存",
      placeholder: "请输入库存"
    },
    {
      field: "saleCount",
      type: "input",
      label: "销售数量",
      placeholder: "请输入销售数量"
    },
    {
      field: "favorCount",
      type: "input",
      label: "喜爱数量",
      placeholder: "请输入喜爱数量"
    },
    {
      field: "address",
      type: "input",
      label: "地址",
      placeholder: "请输入地址"
    },
    {
      field: "categoryId",
      type: "select",
      label: "商品类别",
      placeholder: "选择商品类别",
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
