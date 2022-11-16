<template>
  <div class="page-content">
    <div class="content">
      <Ttbale
        :listData="dataList"
        :listCount="dataCount"
        v-bind="contentTableConfig"
        v-model:page="pageInfo"
      >
        <!-- header中插槽 -->
        <template #headerHandler>
          <el-button
            v-if="isCreate"
            type="primary"
            size="medium"
            @click="handleNewClick"
            >新建用户</el-button
          >
        </template>
        <!-- 列中插槽 -->
        <template #status="scope">
          <el-button
            size="mini"
            plain
            :type="scope.row.enable ? 'success' : 'danger'"
          >
            {{ scope.row.enable ? "启用" : "禁用" }}
          </el-button></template
        >
        <template #createAt="scope">
          <strong>{{ $filters.formatTime(scope.row.createAt) }}</strong>
        </template>
        <template #updateAt="scope">
          <strong>{{ $filters.formatTime(scope.row.updateAt) }}</strong>
        </template>
        <template #handler="scope">
          <div class="handle-btns">
            <el-button
              size="mini"
              :icon="Edit"
              type="text"
              v-if="isUpdate"
              @click="handleEditClick(scope.row)"
            >
              编辑
            </el-button>

            <el-button
              :icon="Delete"
              size="mini"
              type="text"
              v-if="isDelete"
              @click="handleDeleteClick(scope.row)"
              >删除</el-button
            >
          </div>
        </template>

        <!-- 动态插入剩余插槽 -->
        <template
          v-for="item in otherPropSlots"
          :key="item.prop"
          #[item.slotName]="scope"
        >
          <template v-if="item.slotName">
            <slot :name="item.slotName" :row="scope.row"></slot>
          </template>
        </template>
      </Ttbale>
    </div>
  </div>
</template>

<script lang="ts">
import Ttbale from "@/base-ui/table"
import { useStore } from "@/store"
import { defineComponent, computed, ref, watch } from "vue"
import { Delete, Edit } from "@element-plus/icons-vue"
import { usePermission } from "@/hooks/use-permission"
export default defineComponent({
  components: {
    Ttbale
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: { type: String, required: true }
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore()

    // 获取操作的权限
    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "delete")
    const isQuery = usePermission(props.pageName, "query")

    //双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    // 监听数数据变化
    watch(pageInfo, () => getPageData())

    // 发送请求 获取数据
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return
      store.dispatch("system/getPageListAction", {
        // pageUrl: "users/list",
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    // const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)
    const dataList = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })

    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    // 获取其他动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "createAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "handler") return false
        return true
      }
    )
    // 删除操作
    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      })
    }

    // 编辑/新建操作
    const handleNewClick = () => {
      emit("newBtnClick")
    }

    const handleEditClick = (item: any) => {
      emit("editBtnClick", item)
    }

    return {
      Delete,
      Edit,
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      handleDeleteClick,
      handleNewClick,
      handleEditClick
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
