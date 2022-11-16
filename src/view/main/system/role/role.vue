<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContent from "@/components/page-content"
import PageSearch from "@/components/page-search"
import PageModal from "@/components/page-model"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"
import { usePageModal } from "@/hooks/use-page-modal"
export default defineComponent({
  components: { PageContent, PageSearch, PageModal },
  name: "role",
  setup() {
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      modalConfig
    }
  }
})
</script>

<style scoped></style>
