<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="70px"
    >
      <el-form-item label="手机号" prop="num">
        <el-input v-model="ruleForm.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="ruleForm.code" />
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue"
import type { FormInstance, FormRules } from "element-plus"
export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>()

    const ruleForm = reactive({
      num: "",
      code: ""
    })

    const rules = reactive<FormRules>({
      num: [
        { required: true, message: "手机号是必传内容~", trigger: "blur" },
        {
          pattern: /^[0-9]{11}$/,
          message: "手机号必须是11位数字~",
          trigger: "blur"
        }
      ],
      code: [
        {
          required: true,
          message: "验证码是必传内容~",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]{6}$/,
          message: "验证码必须是6位数字~",
          trigger: "blur"
        }
      ]
    })

    const loginAction = () => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          console.log("真正执行登录逻辑")
        }
      })
    }

    return { ruleFormRef, ruleForm, rules, loginAction }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>
