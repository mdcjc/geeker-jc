<!-- 💥 这里是一次性加载 LayoutComponents -->
<template>
  <component :is="LayoutComponents[themeConfig.layout]" />
</template>

<script setup lang="ts" name="layout">
import { computed } from "vue";
import { GlobalStore } from "@/stores";
import LayoutVertical from "./LayoutVertical/index.vue";
const LayoutComponents: { [key: string]: any } = {
  vertical: LayoutVertical,
};

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="scss">
.layout {
  min-width: 740px;
  height: 100%;
}
.el-container {
  height: 100%;
  width: 100%;
}
</style>
