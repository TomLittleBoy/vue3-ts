<template>
  <div class="category">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />

    <PageContent
      title="新建类别"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />

    <PageModal
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :title="`${defaultInfo.Title}类别`"
      pageName="category"
    ></PageModal>
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { usePageSearch } from "@/hooks/use-page-search"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import PageModal from "@/components/page-model"
import { modalConfig } from "./config/modal.config"
import { usePageModal } from "@/hooks/use-page-modal"
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
  usePageModal()

console.log("Title", defaultInfo)
</script>

<style scoped></style>
