import { Module } from "vuex"
import { ILoginState } from "./type"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus"
import { IAccount } from "@/service/login/types"
import localCache from "@/utils/cache"
import router from "@/router"
import { IRootState } from "../types"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      //注册动态路由
      // userMenus => routes
      const routes = mapMenusToRoutes(userMenus)
      // 将routes   添加到 router.main.children
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      // 获取用户按钮权限
      const permissions = mapMenusToPermissions(userMenus)
      console.log("permissions", permissions)
      state.permissions = permissions
    }
  },
  // 做异步操作
  actions: {
    async accountLoginAction({ commit, dispatch }, playload: IAccount) {
      // 1.登录逻辑
      const loginResult = await accountLoginRequest(playload)
      const { id, token } = loginResult.data
      // commit("changeToken", token)

      localCache.setCache("token", token)

      // 发送初始化的请
      // 注意: 存在token发送请求  设置token后发送
      dispatch("getInitialDataAction", null, { root: true })

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)

      //3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      // 4.跳到首页
      router.push("/main")
    },
    // 处理vuex刷新问题
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
        // 发送初始化的请求
        dispatch("getInitialDataAction", null, { root: true })
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}
export default loginModule
