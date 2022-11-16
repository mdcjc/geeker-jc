import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { ThemeConfigProps } from "./interface";
import { DEFAULT_PRIMARY } from "@/config/config";

export const GlobalStore = defineStore({
  id: "GlobalStore",
  state: () => ({
    name: "小G",
    isAdmin: true,
    themeConfig: {
      isDark: false,
      primary: DEFAULT_PRIMARY,
    },
  }),
  actions: {
    // setThemeConfig
    setThemeConfig(themeConfig: ThemeConfigProps) {
      this.themeConfig = themeConfig;
    },
  },
});
// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
