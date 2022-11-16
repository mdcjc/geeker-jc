<template>
  <div>
    <el-switch
      v-model="themeConfig.isDark"
      @change="onAddDarkChange"
      inline-prompt
      active-color="#0a0a0a"
      inactive-color="#dcdfe6"
      style="margin-left: 24px"
      :active-icon="Sunny"
      :inactive-icon="Moon"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import { computed } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { GlobalStore } from "@/stores/index";
import { useTheme } from "@/hooks/useTheme";

const globalStore = GlobalStore();
const { switchDark } = useTheme();
const themeConfig = computed(() => globalStore.themeConfig);

const onAddDarkChange = () => {
    switchDark()
};
</script>
<style scoped></style>
