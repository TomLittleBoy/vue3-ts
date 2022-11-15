import { ref } from "vue"
import PageModal from "@/components/page-model"
type CallbackFn = () => void

export function usePageModal(newCb?: CallbackFn, edutCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    console.log("item", item)
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    edutCb && edutCb()
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
