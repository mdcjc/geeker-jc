import { computed, onBeforeMount } from "vue";
import { GlobalStore } from "@/stores";
import { DEFAULT_PRIMARY } from "@/config/config";
import { ElMessage } from "element-plus";
import {getDarkColor,getLightColor} from "@/utils/theme/tool"
/**
 * @description 切换主题
 * */
export const useTheme = () => {
  console.log("123");
  
  const globalStore = GlobalStore();
  const themeConfig = computed(() => globalStore.themeConfig);
  // 切换暗黑模式
  const switchDark = () => {
    const body = document.documentElement as HTMLElement;
    if (themeConfig.value.isDark) body.setAttribute("class", "dark");
    else body.setAttribute("class", "");
  };
  // 修改主题色
  const changePrimary = (val: string) => {
    if (!val) {
      val = DEFAULT_PRIMARY;
      ElMessage({
        type: "success",
        message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`,
      });
    }
    globalStore.setThemeConfig({
      ...themeConfig.value,
      primary: val,
    });
    // 颜色加深
		document.documentElement.style.setProperty("--el-color-primary-dark-2", `${getDarkColor(themeConfig.value.primary, 0.1)}`);
		document.documentElement.style.setProperty("--el-color-primary", themeConfig.value.primary);
		// 颜色变浅
		for (let i = 1; i <= 9; i++) {
			document.documentElement.style.setProperty(
				`--el-color-primary-light-${i}`,
				`${getLightColor(themeConfig.value.primary, i / 10)}`
			);
		}
  };
  onBeforeMount(() => {
    switchDark();
		changePrimary(themeConfig.value.primary);
  });

  return {
    switchDark,
    changePrimary
  };
};
