const path = require("path")

const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const {
  ElementPlusResolver
} = require("unplugin-vue-components/resolvers")

module.exports = {
  outputDir: "./build",
  // 配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias.set("@", path.resolve(__dirname, "src")).set("components", "@/components")
  // },
  // 配置方式一
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
