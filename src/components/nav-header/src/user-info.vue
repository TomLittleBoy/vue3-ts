<template>
  <div class="user-info">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <div class="block">
          <el-avatar
            :size="25"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
        </div>
        <div style="margin-left: 5px">{{ name }}</div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">
            <el-icon><CircleCloseFilled /></el-icon>
            退出登录</el-dropdown-item
          >
          <el-dropdown-item command="b">
            <el-icon><User /></el-icon>
            用户信息</el-dropdown-item
          >
          <el-dropdown-item command="c">
            <el-icon><Setting /></el-icon>
            系统管理</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
export default defineComponent({
  setup(props) {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    const handleCommand = (command: string | number) => {
      alert(command)
    }

    return { handleCommand, name }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
