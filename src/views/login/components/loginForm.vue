<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="loginRules"
    size="large"
  >
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" placeholder="用户名:admin">
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="loginForm.password"
        placeholder="密码：123456"
        type="password"
        show-password
      >
        <template #prefix>
          <el-icon class="el-input__icon"><user /></el-icon>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item class="form-cons">
      <el-button @click="resetForm(loginFormRef)" round :icon="CircleClose"
        >重置</el-button
      >
      <el-button
        @click="login(loginFormRef)"
        round
        type="primary"
        :icon="UserFilled"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import { Login } from "@/api/interface";
import { loginApi } from "@/api/modules/login";
import type { FormInstance } from "element-plus";
import md5 from "js-md5";
const loginFormRef = ref<FormInstance>();

const loading = ref(false);
const loginForm = reactive<Login.ReqLoginForm>({ username: "", password: "" });

const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

const login = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async valid => {
    if (!valid) return;
    loading.value = true;
    
    try {
      // 1.执行登录接口

      
      const { data } = await loginApi({...loginForm,password: md5(loginForm.password)});
      // globalStore.setToken(data.access_token);
    } finally {
      loading.value = false;
    }
  });
};
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style scoped lang="scss">
@import "../index.scss";
</style>
