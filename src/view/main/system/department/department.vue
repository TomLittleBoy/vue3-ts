<template>
  <div class="department">
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="department"
    ></PageContent>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useStore } from "@/store"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
</script>

<style scoped></style>
