<template>
  <div class="overview">
    <Card title="关于">
      <div class="left">
        Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </Card>

    <Card title="技术栈">
      <TextLink :text-arrs="technologyStacks"></TextLink>
      <Descriptions
        title="生产环境依赖"
        column="2"
        :table-datas="dependencies"
      ></Descriptions>
    </Card>
    <Card title="项目结构"></Card>
    <Card title="项目规范"></Card>
    <Card title="Git提交规范"></Card>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue"
import Card from "@/base-ui/card"
import { technologyStacks, dependencies } from "./config"
import TextLink from "@/base-ui/text-link"
import Descriptions from "@/base-ui/descriptions"
</script>

<style scoped lang="less">
.overview {
  .left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    //   // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }
}
</style>
