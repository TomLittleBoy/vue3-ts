<template>
  <div class="goods">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      title="新建商品"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ "¥" + scope.row.oldPrice }}</template>
    </page-content>

    <PageModal
      ref="pageModalRef"
      pageName="goods"
      :modalConfig="modalConfig"
      :title="`${defaultInfo.Title}商品`"
    ></PageModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import PageContent from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/model.config"
import PageModal from "@/components/page-model"
import { usePageModal } from "@/hooks/use-page-modal"
export default defineComponent({
  name: "goods",
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped></style>
