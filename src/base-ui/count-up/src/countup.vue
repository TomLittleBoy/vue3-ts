<template>
  <span ref="counterRef" />
</template>

<script setup lang="ts">
import { defineProps, withDefaults, onMounted, ref, watch } from "vue"
import { CountUpOptions } from "countup.js"
import { CountUp } from "countup.js"
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ",", // 千位分割
  decimal: ".", // 小数分割
  prefix: "￥" // 单位
}
const props = withDefaults(defineProps<{ number: number; option: any }>(), {
  number: 0,
  option: () => ({})
})

const counterRef = ref<HTMLDivElement | null>(null)
const instance = ref<CountUp | null>(null)

const update = (number: number) => {
  if (!instance.value) return
  instance?.value.update(number)
}

const start = () => {
  if (!instance.value) return
  instance?.value.start()
}
onMounted(() => {
  createCounter()
})

watch(
  () => props.number,
  () => {
    update(props.number)
  }
)

const createCounter = () => {
  if (!counterRef.value) return
  const opts: CountUpOptions = Object.assign(defaultOptions, props.option)
  instance.value = new CountUp(counterRef?.value, props.number, opts)
  start()
}
</script>

<style scoped></style>
