<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <div class="menu">
          <div class="menu-headr">
            <img src="@/assets/images/logo.svg" alt="logo" />
            <div>Geeker Admin</div>
          </div>
          <el-scrollbar>
            <el-menu
              :router="false"
              :collapse-transition="false"
              :unique-opened="true"
              background-color="#191a20"
              text-color="#bdbdc0"
              active-text-color="#ffffff"
            >
              <SubMenu :menuList="menuList" />
            </el-menu>
          </el-scrollbar>
        </div>
      </el-aside>
      <el-container>
        <el-header class="layout-header">Header</el-header>
        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive>
                <component :is="Component" :key="route.path" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs, nextTick } from "vue";
import { useRouter } from "vue-router";
import SubMenu from "../components/Menu/SubMenu.vue";

const router = useRouter();
const menuList = <Menu.MenuOptions[]>[
  {
    meta: {
      title: "资源管理",
      icon: "House",
    },
    path: "1",
    children: [
      {
        meta: {
          title: "资源管理-1",
          icon: "House",
        },
        path: "2",
      },
    ],
  },
  {
    meta: {
      title: "书籍管理",
      icon: "House",
    },
    path: "3",
  },
];

// 刷新当前页面
const isRouterRefresh = ref(true);
const refreshCurrentPage = () => {
  isRouterRefresh.value = false;
  nextTick(function () {
    isRouterRefresh.value = true;
  });
};
</script>
<style scoped lang="scss" name="layoutVertical">
@import "./index.scss";
</style>
<style lang="scss">
  .el-menu,
  .el-menu--popup {
    .el-menu-item {
      &.is-active {
        background: #060708;
        &::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 4px;
          content: "";
          background: var(--el-color-primary);
        }
      }
    }
  }
</style>
