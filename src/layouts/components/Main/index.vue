<template>
	<Maximize v-if="themeConfig.maximize" />
	<el-main>
		<router-view v-slot="{ Component, route }">
			<transition appear name="fade-transform" mode="out-in">
				<keep-alive>
					<component :is="Component" :key="route.path" />
				</keep-alive>
			</transition>
		</router-view>
	</el-main>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount, provide } from "vue";
import { GlobalStore } from "@/stores";
// import { KeepAliveStore } from "@/stores/modules/keepAlive";
import Maximize from "./components/Maximize.vue";
// import Tabs from "@/layouts/components/Tabs/index.vue";
// import Footer from "@/layouts/components/Footer/index.vue";

const globalStore = GlobalStore();
// const keepAliveStore = KeepAliveStore();
const themeConfig = computed(() => globalStore.themeConfig);
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);

// 刷新当前页面
const isRouterShow = ref(true);
const refreshCurrentPage = (val: boolean) => {
	isRouterShow.value = val;
};
provide("refresh", refreshCurrentPage);

// 监听窗口大小变化，折叠侧边栏
const screenWidth = ref<number>(0);
const listeningWindow = () => {
	screenWidth.value = document.body.clientWidth;
	if (!isCollapse.value && screenWidth.value < 1200) globalStore.setThemeConfig({ ...themeConfig.value, isCollapse: true });
	if (isCollapse.value && screenWidth.value > 1200) globalStore.setThemeConfig({ ...themeConfig.value, isCollapse: false });
};
window.addEventListener("resize", listeningWindow);
onBeforeUnmount(() => {
	window.removeEventListener("resize", listeningWindow);
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
