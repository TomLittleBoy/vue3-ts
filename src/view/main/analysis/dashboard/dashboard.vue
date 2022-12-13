<template>
  <div class="dashboard">
    <!-- 数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData.data" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statisticalPanel :panelData="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <Card title="分类商品数量(饼图)">
          <PieEchart :pieData="categoryGoodsCount"></PieEchart>
        </Card>
      </el-col>
      <el-col :span="10">
        <Card title="不同城市商品销量">
          <MapEchart :mapData="addressGoodsSale"></MapEchart>
        </Card>
      </el-col>
      <el-col :span="7">
        <Card title="分类商品数量(玫瑰图)">
          <RoseEchart :roseData="categoryGoodsCount"></RoseEchart>
        </Card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <Card title="分类商品的销量">
          <LineEchart :lineData="categoryGoodsSale"></LineEchart>
        </Card>
      </el-col>
      <el-col :span="12">
        <Card title="分类商品的收藏">
          <BarEchart :="categoryGoodsFavor"></BarEchart>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue"
import { useStore } from "@/store"
import Card from "@/base-ui/card"
import statisticalPanel from "@/components/statistical-panel"
import {
  PieEchart,
  MapEchart,
  RoseEchart,
  LineEchart,
  BarEchart
} from "@/components/page-echarts"
export default defineComponent({
  name: "dashboard",
  components: {
    Card,
    PieEchart,
    MapEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    statisticalPanel
  },
  setup() {
    const store = useStore()
    store.dispatch("dashboard/getDashboardDataAction")

    // 顶部数据
    const topPanelData = computed(() => store.state.dashboard.topPanelDatas)
    console.log("topPanelData", topPanelData)

    //获取数据
    //饼图
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    //地图
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    // 折线图数据
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })

    // 柱状图数据
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })

    return {
      categoryGoodsCount,
      addressGoodsSale,
      categoryGoodsSale,
      categoryGoodsFavor,
      topPanelData
    }
  }
})
</script>

<style scoped>
.dashboard {
  background-color: #f5f5f5;
}
.content-row {
  margin-top: 20px;
}
</style>
