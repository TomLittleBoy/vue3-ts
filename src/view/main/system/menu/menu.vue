<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      title="新建菜单"
      pageName="menu"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      title="新建菜单"
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      pageName="menu"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import PageContent from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
import PageModal from "@/components/page-model"
import { usePageModal } from "@/hooks/use-page-modal"
import { modalConfig } from "./config/modal.config"
import { useStore } from "@/store"

export default defineComponent({
  name: "menu",
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    const store = useStore()
    const modalConfigRef = computed(() => {
      const menuItem = modalConfig.formItems.find((item) => {
        return item.field === "parentId"
      })
      // const data = menuListOptions(store.state.entireMenu)

      // menuItem!.options = data.map((item) => {
      //   return { name: item.name, parentId: item.id }
      // })
      menuItem!.options = store.state.entireMenu
      return modalConfig
    })

    return {
      contentTableConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      modalConfig,
      modalConfigRef
    }
  }
})
</script>

<style scoped></style>
