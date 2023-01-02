import { createApp } from "vue"
import router from "./router"
import store from "./store"
// 引入全局配置
import { globalRegister } from "./global"
// 初始化页面布局
import "normalize.css"
import "./assets/css/index.css"
// import tRequest from "./service"
import { setupStore } from "./store"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import App from "./App.vue"

const app = createApp(App)
//全局引入icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 解决vuex刷新
setupStore()
app.use(router)
app.use(globalRegister)
app.use(store)

app.mount("#app")

// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }

// tRequest
//   .get<DataType>({
//     url: "/home/multidata",
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
