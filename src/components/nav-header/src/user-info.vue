<template>
  <div class="user-info">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <div class="block">
          <el-avatar
            size="medium"
            class="avatar"
            src="https://i.ibb.co/Lrbw8Ww/image.png"
          />
        </div>
        <div style="margin-left: 5px">{{ name }}</div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="handleExitClick">
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
    <div>
      <el-badge is-dot class="item">
        <el-icon><Postcard /></el-icon>
      </el-badge>
      <el-badge :value="12" :max="10" class="item badge">
        <el-icon><Postcard /></el-icon>
      </el-badge>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"
import localCache from "@/utils/cache"
import { useRouter } from "vue-router"
import { Postcard } from "@element-plus/icons-vue"
export default defineComponent({
  component: {
    Postcard
  },
  setup(props) {
    const store = useStore()
    const route = useRouter()
    const name = computed(() => store.state.login.userInfo.name)
    const handleCommand = (command: string | number) => {
      // alert(command)
      if (command === "handleExitClick") {
        localCache.deleteCache("token")
        route.push("/main")
      }
    }

    return { handleCommand, name, Postcard }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
}
.user-info {
  display: flex;
  flex-direction: row-reverse;

  .item {
    margin: 0 auto;
    width: 30px;
    height: 25px;
    line-height: 35px;

    margin-right: 25px;
    &:hover {
      background: #f2f2f2;
    }

    // ::v-deep .el-badge__content.is-fixed
    ::v-deep .badge .el-badge__content.is-fixed {
      width: 10px;
      height: 16px;
    }
  }
  .el-icon {
    font-size: 25px;
  }
}
.avatar {
  width: 30px;
  height: 30px;
}
</style>
