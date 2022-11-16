import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routers/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark(自定义暗黑模式)
import "@/styles/theme/element-dark.scss";
// pinia store
import pinia from "@/stores/index";
// element icons
import * as Icons from "@element-plus/icons-vue";
// 注册element Icons组件
const app = createApp(App);
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(router).use(ElementPlus).use(pinia).mount("#app");
