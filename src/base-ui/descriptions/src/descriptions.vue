<template>
  <div class="description">
    <el-descriptions class="margin-top" :title="title" :column="column" border>
      <template v-for="(itemData, index) in tableDatas" :key="index">
        <el-descriptions-item>
          <template #label>{{ itemData.name }}</template>
          <el-tag size="small">{{ itemData.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue"
interface Props {
  title?: string
  column: number
  tableDatas: string[]
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  column: 1,
  tableDatas: () => []
})
</script>

<style scoped></style>
