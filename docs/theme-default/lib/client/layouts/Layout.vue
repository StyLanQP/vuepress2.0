<script setup lang="ts">
import { usePageData, usePageFrontmatter,useSiteLocaleData } from "@vuepress/client";
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  Transition,
  watch,
  getCurrentInstance,
} from "vue";
import { useRouter, useRoute } from "vue-router";
import type { DefaultThemePageFrontmatter } from "../../shared";
import Home from "../components/Home.vue";
import Navbar from "../components/Navbar.vue";
import Page from "../components/Page.vue";
import Sidebar from "../components/Sidebar.vue";
import MQNarrowNav from "../components/MQNarrowNav.vue";
import {
  useScrollPromise,
  useSidebarItems,
  useThemeLocaleData,
} from "../composables";

const page = usePageData();
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const themeLocale = useThemeLocaleData();
  const siteLocale = useSiteLocaleData()

// navbar
const shouldShowNavbar = computed(
  () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
);

// sidebar
const sidebarItems = useSidebarItems();
const isSidebarOpen = ref(false);
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
};
const touchStart = { x: 0, y: 0 };
const onTouchStart = (e): void => {
  touchStart.x = e.changedTouches[0].clientX;
  touchStart.y = e.changedTouches[0].clientY;
};
const onTouchEnd = (e): void => {
  const dx = e.changedTouches[0].clientX - touchStart.x;
  const dy = e.changedTouches[0].clientY - touchStart.y;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
    if (dx > 0 && touchStart.x <= 80) {
      toggleSidebar(true);
    } else {
      toggleSidebar(false);
    }
  }
};

// sidebar-left or right
const isNeedSidebarRight = computed(() => themeLocale.value.sidebarRight);

// classes
const containerClass = computed(() => [
  {
    "no-navbar": !shouldShowNavbar.value,
    "no-sidebar": !sidebarItems.value.length,
    "sidebar-open": isSidebarOpen.value,
  },
  frontmatter.value.pageClass,
]);

const route = useRoute();
const router = useRouter();
 // 重定向到home页
if (route.path === "/" || route.path === "/zh/" || route.path === "/en/") {
  switch (siteLocale.value.lang) {
    case 'en-US':
      router.push("/en/home/");
      break;
    case 'zh-CN':
      router.push("/zh/home/");
      break;
  
    default:
       router.push("/en/home/");
      break;
  }
  
}
// close sidebar after navigation
let unregisterRouterHook;
onMounted(() => {
  const router = useRouter();

  unregisterRouterHook = router.afterEach((to, from) => {
    toggleSidebar(false);
  });
});
onUnmounted(() => {
  unregisterRouterHook();
});

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;
</script>

<template>
  <div
    class="theme-container"
    :class="containerClass"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <slot name="navbar">
      <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar">
        <template #before>
          <slot name="navbar-before" />
        </template>
        <template #after>
          <slot name="navbar-after" />
        </template>
      </Navbar>
      <MQNarrowNav></MQNarrowNav>
    </slot>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <slot name="sidebar">
      <Sidebar>
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>

    <slot name="page">
      <Home v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <slot name="page-bottom" />
          </template>
        </Page>
      </Transition>
    </slot>

    <slot name="sidebarRight" v-if="isNeedSidebarRight">
      <Sidebar class="sidebarRight" position="right">
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
    </slot>
  </div>
</template>
