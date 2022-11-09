const path = require("path")

// const fs = require("fs")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const {
  ElementPlusResolver
} = require("unplugin-vue-components/resolvers")

// 全局 scss 资源
// const scssResources = []
// fs.readdirSync("src/assets/scss").map((dirname) => {
//   if (fs.statSync(`src/assets/scss/${dirname}`).isFile()) {
//     scssResources.push(`@import "src/assets/scss/${dirname}";`)
//   }
// })
module.exports = {
  outputDir: "./build",
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
    ]
  }
}
