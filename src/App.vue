<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import {useTheme} from "@/hooks/useTheme"
// 使用主题
useTheme();
</script>
<style scoped></style>
