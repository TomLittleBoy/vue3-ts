<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <Card title="分类商品数量(饼图)"></Card>
      </el-col>
      <el-col :span="10">
        <Card title="不同城市商品销量"></Card>
      </el-col>
      <el-col :span="7">
        <Card title="分类商品数量(玫瑰图)"></Card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <Card title="分类商品的销量"></Card>
      </el-col>
      <el-col :span="12">
        <Card title="分类商品的收藏"></Card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import * as echarts from "echarts"
import Card from "@/base-ui/card"
export default defineComponent({
  name: "dashboard",
  components: {
    Card
  },
  setup() {
    const divRef = ref<HTMLElement>()

    return { divRef }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
