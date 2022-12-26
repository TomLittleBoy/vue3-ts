export const contentTableConfig = {
  title: "故事列表",
  propList: [
    { prop: "id", label: "id", minWidth: "100" },
    { prop: "title", label: "标题", minWidth: "100" },
    { prop: "content", label: "内容", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    }

    // { label: "操作", minWidth: "120", slotName: "handler" }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
