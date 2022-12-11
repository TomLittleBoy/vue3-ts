<template>
  <div class="code">
    <pre class="bg">
      <code  v-html="highlightedCode"></code>
    </pre>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, defineProps, withDefaults } from "vue"
import "highlight.js/styles/github.css"
import hljs from "highlight.js"

const props = withDefaults(
  defineProps<{
    language: string
    code: string
  }>(),
  {
    language: "bash",
    code: ""
  }
)
let highlightedCode = ref<string>("")

watchEffect(() => {
  highlightedCode.value = hljs.highlight(props.code, {
    language: props.language
  }).value
})
</script>

<style scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
