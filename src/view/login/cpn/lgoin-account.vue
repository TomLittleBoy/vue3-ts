<template>
  <div class="login-account">
    <el-form
      ref="ruleFormRef"
      :model="account"
      :rules="rules"
      label-width="60px"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import localCache from "@/utils/cache"
import { useStore } from "vuex"
export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>()
    const store = useStore()
    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    })

    const rules = reactive<FormRules>({
      name: [
        { required: true, message: "用户名是必传内容~", trigger: "blur" },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "用户名必须是5~10个字母或者数字~",
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,
          message: "密码是必传内容~",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: "用户名必须是3位以上的字母或者数字~",
          trigger: "blur"
        }
      ]
    })

    const loginAction = (isKeepPassword: boolean) => {
      // 校验
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          // console.log("真正执行登录逻辑")
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache("name", account.name)
            localCache.setCache("password", account.password)
          } else {
            localCache.deleteCache("name")
            localCache.deleteCache("password")
          }

          //开始进行登录
          store.dispatch("login/accountLoginAction", { ...account })
        }
      })
    }

    return { account, rules, ruleFormRef, loginAction }
  }
})
</script>

<style scoped></style>
