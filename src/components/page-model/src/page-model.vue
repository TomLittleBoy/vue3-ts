<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      width="30%"
      align-center
      :title="title"
      destroy-on-close
    >
      <el-scrollbar max-height="400px">
        <!-- <span>Open the dialog from the center from the screen</span> -->
        <RsForm v-bind="modalConfig" v-model="formData"></RsForm>
        <slot></slot>
      </el-scrollbar>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex"
import { defineComponent, ref, watch } from "vue"
import RsForm from "@/base-ui/form"

export default defineComponent({
  components: {
    RsForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      require: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    title: {
      type: String,
      default: "新建"
    }
  },
  setup(props) {
    // console.log("propsdef", props.defaultInfo.value)
    let dialogVisible = ref(false)
    const formData = ref<any>({})

    // 监听最新数据 回显
    watch(
      () => props.defaultInfo,
      (newValue) => {
        debugger
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    // const changeCascader = (value: any) => {
    //   formData.value[`parentId`] = value[0]
    // }
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log("编辑formData.vlaue", formData.value)

        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return { dialogVisible, handleConfirmClick, formData }
  }
})
</script>

<style scoped></style>
