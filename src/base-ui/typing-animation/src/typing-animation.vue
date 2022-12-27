<template>
  <div class="typing-animation">
    <span class="typing" ref="typingRef"></span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import Typed from "typed.js"
const typingRef = ref<HTMLElement>()
onMounted(() => {
  new Typed(typingRef.value!, {
    strings: [
      `Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus 、TypeScript、Echart5 等后台系统解决方案。`
    ], //输入内容
    typeSpeed: 70, //打字速度
    backSpeed: 50 //回退速度
  })
})
</script>

<style scoped lang="less"></style>
