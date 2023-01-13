<template>
  <div class="login">
    <Particles :options="particles" id="particles"></Particles>
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import LoginPanel from "./cpn/login-panel.vue"
import { particles } from "./particles/particles-config"
export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {
      particles
    }
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}

#particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: -10;
}
</style>
