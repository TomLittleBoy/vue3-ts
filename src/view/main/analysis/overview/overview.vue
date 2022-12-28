<template>
  <div class="overview">
    <Card title="关于">
      <div class="left">
        <div class="greeting">
          <span>{{ timeInfo.timeFrame }},</span>
          <span>{{ name }}</span>
        </div>
        <TypingAnimation></TypingAnimation>
      </div>
    </Card>
    <Card title="其他">
      <div class="left">
        <el-link
          type="primary"
          href="http://120.46.223.203/"
          target="_blank"
          :underline="false"
          >新能源充电桩可视化平台</el-link
        >
      </div>
    </Card>

    <Card title="技术栈">
      <TextLink :text-arrs="technologyStacks"></TextLink>
      <Descriptions
        title="生产环境依赖"
        column="2"
        :table-datas="dependencies"
      ></Descriptions>
      <Descriptions
        title="开发环境依赖"
        column="2"
        :table-datas="devDependencies"
      ></Descriptions>
    </Card>
    <Card title="项目结构">
      <div class="project_structure">
        <Code language="bash" :code="projectDir"></Code>
      </div>
    </Card>
    <Card title="项目规范">
      <Descriptions
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          {
            name: '文件(.ts .vue .json .d.ts)',
            description: '统一小写, 多个单词使用-分割'
          }
        ]"
      />

      <Descriptions
        title="编写组件规范"
        :column="1"
        :table-datas="[
          { name: '组件的文件', description: '统一小写, 多个单词使用-分割' },
          {
            name: '组件的目录结构',
            description:
              '例如 button 组件：button/src/index.vue, 统一在button/index.ts导出'
          },
          {
            name: '组件导包顺序',
            description:
              '导vue技术栈的包 , 导第三方的工具函数 , 导本地的组件, 导本地的工具函数'
          },
          { name: '组件的名称', description: '统一大写开头，驼峰命名' },
          {
            name: '组件属性顺序',
            description: 'name, components, props, emits, setup ...'
          },
          {
            name: 'template标签',
            description: '小写加 - ( 例如：<case-panel/> )'
          },
          {
            name: 'template标签属性顺序',
            description: 'v-if , v-for , ref, class, style, ... ,事件'
          },
          {
            name: '组件的props',
            description: '小写开头，驼峰命名，必须编写类型默认值'
          },
          {
            name: '组件的样式',
            description:
              '作用域：scoped, lang = scss / less  ; 类名：统一小写, 多个单词使用-分割'
          }
        ]"
      />
    </Card>
    <Card title="Git提交规范">
      <Descriptions
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'yarn commit ' },
          { name: 'pull 操作', description: 'git pull ' },
          { name: 'push 操作', description: 'git push ' }
        ]"
      />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import Card from "@/base-ui/card"
import Code from "@/base-ui/code"
import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from "./config"
import TextLink from "@/base-ui/text-link"
import Descriptions from "@/base-ui/descriptions"
import TypingAnimation from "@/base-ui/typing-animation/src/typing-animation.vue"
import { getNowTimeFrameByUnix } from "@/utils/date-format"
import { useStore } from "@/store"

const store = useStore()
const name = computed(() => store.state.login.userInfo.name)
const timeInfo = ref(getNowTimeFrameByUnix())
</script>

<style scoped lang="less">
.overview {
  .project_structure {
    text-align: left;
  }
  .left {
    text-align: left;
    display: flex;
    line-height: 30px;

    // 打字机动画
    // animation: typewriter 2s steps(20, end) forwards;
    // white-space: nowrap;
    // overflow: hidden;

    .greeting {
      font-size: 20px;
      font-weight: 700;
      margin-right: 10px;
    }
  }

  // @keyframes typewriter {
  //   from {
  //     width: 0;
  //   }
  //   to {
  //     width: 900px;
  //   }
  // }

  .el-card {
    margin-bottom: 20px;
    //   // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }
}
</style>
