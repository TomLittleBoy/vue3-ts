const path = require("path")
//webpack打包分析插件
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin
// const fs = require("fs")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const {
  ElementPlusResolver
} = require("unplugin-vue-components/resolvers")

// const cdn = {
//   // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
//   externals: {
//     vue: "Vue",
//     vuex: "Vuex",
//     "vue-router": "VueRouter",
//     "element-plus": "element-plus",
//     axios: "axios"
//   },
//   // cdn的css链接
//   css: ["https://unpkg.com/browse/element-plus@2.2.28/dist/index.css"],
//   // cdn的js链接
//   js: [
//     "https://unpkg.com/vue@3/dist/vue.global.js",
//     "https://unpkg.com/element-plus@2.2.28/dist/index.full.js",
//     "https://unpkg.com/vuex@4.1.0/dist/vuex.global.js",
//     "https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js",
//     "https://unpkg.com/axios/dist/axios.min.js",
//     "https://cdn.bootcdn.net/ajax/libs/typescript/4.9.4/typescript.js"
//   ]
// }

// 全局 scss 资源
// const scssResources = []
// fs.readdirSync("src/assets/scss").map((dirname) => {
//   if (fs.statSync(`src/assets/scss/${dirname}`).isFile()) {
//     scssResources.push(`@import "src/assets/scss/${dirname}";`)
//   }
// })
module.exports = {
  outputDir: "./build",
  publicPath: "./",
  // 配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias.set("@", path.resolve(__dirname, "src")).set("components", "@/components")
  // },
  // 配置方式一
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    // externals: cdn.externals,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: "@/components"
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
      // new BundleAnalyzerPlugin()
    ]
  }
}
