import { createStore, Store, useStore as useVueStore } from "vuex"
import { IRootState, IStoreType } from "./types"
import { getPageListData } from "@/service/main/system/system"
import login from "./login/login"
import system from "./main/system/system"
const store = createStore<IRootState>({
  state() {
    return {
      name: "coder",
      age: 30,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      debugger
      const { list: departmentList } = departmentResult.data
      //请求角色数据
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      const menuResult = await getPageListData("/menu/list", {})

      const { list: menuList } = menuResult.data

      // 2.保存数据
      commit("changeEntireDepartment", departmentList)
      commit("changeEntireRole", roleList)
      commit("changeEntireMenu", menuList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  //可能导致没有token 存放数据登录后存在问题
  // store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreType> {
  return useVueStore()
}

export default store
