<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      pageName="users"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      title="新建用户"
    ></page-content>
    <PageModal
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :title="`${defaultInfo.Title}用户`"
      pageName="users"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useStore } from "@/store"
import PageContent from "@/components/page-content"
import PageSearch from "@/components/page-search"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import { usePageSearch } from "@/hooks/use-page-search"

import { modalConfig } from "./config/model.config"
import PageModal from "@/components/page-model"
import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    // let dialogVisible = ref(false)

    // const handleNewData = () => {
    //   dialogVisible.value = true
    // }
    // const handleEditData = (item: any) => {
    //   dialogVisible.value = true
    // }

    //处理密码的逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      )

      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordItem!.isHidden = true
    }
    //动态添加部门和角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "departmentId"
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { label: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === "roleId"
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(newCallback, editCallback)

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick,

      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo,
      modalConfigRef
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
