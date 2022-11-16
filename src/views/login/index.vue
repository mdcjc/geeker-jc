<template>
  <div class="login-container">
    <SwitchDark class="login-container-SwitchDark"/>
    <div class="login-box">
      <div class="login-left">
        <img src="../../assets/images/login_left0.png" alt="login" />
      </div>
      <div class="login-form">
        <div class="login-logo">
          <img class="login-icon" src="../../assets/images/logo.svg" alt="" />
          <h2 class="logo-text">Geeker-Admin</h2>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import LoginForm from "./components/loginForm.vue";
import SwitchDark from "@/components/SwitchDark/index.vue";
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
