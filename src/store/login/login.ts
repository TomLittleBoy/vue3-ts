import { Module } from "vuex"
import { ILoginState } from "./type"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import { mapMenusToRoutes } from "@/utils/map-menus"
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
      userMenus: []
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
    }
  },
  // 做异步操作
  actions: {
    async accountLoginAction({ commit }, playload: IAccount) {
      // 1.登录逻辑
      const loginResult = await accountLoginRequest(playload)
      console.log("loginResult", loginResult)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)
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
    loadLocalLogin({ commit }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
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
