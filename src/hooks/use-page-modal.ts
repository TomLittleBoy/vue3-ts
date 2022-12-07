import { ref } from "vue"
import PageModal from "@/components/page-model"
type CallbackFn = (item?: any) => void

export function usePageModal(newCb?: CallbackFn, edutCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      debugger
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    edutCb && edutCb(item)
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
