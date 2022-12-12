<template>
  <div class="category">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />

    <PageContent
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="category"
    />
  </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { usePageSearch } from "@/hooks/use-page-search"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<style scoped></style>
