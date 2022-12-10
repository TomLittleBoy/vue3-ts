<template>
  <BaseEchart :options="options"></BaseEchart>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from "vue"
import BaseEchart from "@/base-ui/echarts"
import { IDataType } from "../types"
const props = withDefaults(
  defineProps<{
    title?: string
    // xLabels: string[]
    lineData: IDataType
    // values: any[]
  }>(),
  { title: "" }
)
const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {},
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.lineData.xLabels
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "分别销量",
        type: "line",
        stack: "总量",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        data: props.lineData.values
      }
    ]
  }
})
</script>

<style scoped></style>
