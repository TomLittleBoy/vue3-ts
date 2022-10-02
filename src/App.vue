<template>
  <div>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    {{ $store.state.name }}

    <el-button type="">3434</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// import login from "./view/login/login.vue"
// import main from "./view/main/main.vue"
export default defineComponent({
  name: "App",
  components: {
    // login,
    // main
  }
})
</script>

<style lang="less"></style>
