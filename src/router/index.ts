import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { firstMenu } from "@/utils/map-menus"
import localCache from "@/utils/cache"
//固定路由
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../view/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../view/main/main.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("components/404.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }

  //如果访问的是/  则重定向到该路由路径
  if (to.path === "/main") {
    return firstMenu.url
  }
})

export default router
