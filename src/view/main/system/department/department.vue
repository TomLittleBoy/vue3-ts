<template>
  <div class="department">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
    ></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      title="新建部门"
      pageName="department"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></PageContent>

    <PageModal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="department"
      title="新建部门"
    ></PageModal>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import { useStore } from "@/store"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

import PageModal from "@/components/page-model"
import { modalConfig } from "./config/model.config"
import { usePageModal } from "@/hooks/use-page-modal"
import { usePageSearch } from "@/hooks/use-page-search"

const store = useStore()

const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === "parentId"
  )
  departmentItem!.options = store.state.entireDepartment.map((item) => {
    return { label: item.name, value: item.id }
  })

  return modalConfig
})
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
  usePageModal()
</script>

<style scoped></style>
