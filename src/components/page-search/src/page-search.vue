<template>
  <div class="page-search">
    <!-- 以文件配置的形式注入 -->
    <rs-form :="searchFormConfig" v-model="formData">
      <template #header>
        <!-- <h1 class="header">高级检索</h1> -->
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">
            <el-icon><Refresh /></el-icon>
            重置</el-button
          >
          <el-button type="primary" @click="handleQueryClick">
            <el-icon><Search /></el-icon>
            搜索</el-button
          >
        </div>
      </template>
    </rs-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import RsForm from "@/base-ui/form"
export default defineComponent({
  components: { RsForm },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ["queryBtnClick"],
  setup(props, { emit }) {
    // 1.formData中属性动态绑定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)

    //2. 当用户点击重置
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
    }

    // 3.点击搜索
    const handleQueryClick = () => {
      emit("queryBtnClick", formData.value)
    }

    return { formData, handleResetClick, handleQueryClick }
  }
})
</script>

<style scoped lang="less">
.header {
  color: red;
}

.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
