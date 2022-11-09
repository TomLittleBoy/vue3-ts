<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
//国际化
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"
// import login from "./view/login/login.vue"
// import main from "./view/main/main.vue"
export default defineComponent({
  name: "App",
  components: {
    // login,
    // main
    ElConfigProvider
  },
  setup(props) {
    return {
      locale: zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
