<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSidebarItems, useThemeLocaleData } from "../composables";
import { isActiveSidebarItem } from "../utils";

import SidebarItem from "./SidebarItem.vue";

const props = defineProps({
  position: {
    type: String,
    required: false,
    default: "left",
  },
});
const themeLocale = useThemeLocaleData()
const sidebarItems = useSidebarItems();

const isNeedSidebarRight = computed(() => themeLocale.value.sidebarRight);
const isNeedRight = ref(props.position === "right");

const route = useRoute();
const router = useRouter();

const findTargetChild = (itemV, deep = 0) => {
  if (itemV.length) {
    for (let i = 0; i < itemV.length; i++) {
      const element = itemV[i];
      const isActive = computed(() => isActiveSidebarItem(element, route));
      if (isActive.value) {
        /* 保留一级 */
        if (element.children && deep < 1) {
          return findTargetChild(element.children, deep + 1);
        } else {
          return element.children || [];
        }
      }
    }
  }
};

const getFatherItem = (itemV, deep=0) => {
  const res=[]
  if (itemV.length) {
    for (let i = 0; i < itemV.length; i++) {
      const element = itemV[i];
      /* 保留一级 */
      if (element.children && deep < 1) {
        const {children, ...other} = element
        const childArr = getFatherItem(element.children, deep + 1)
        res.push({children: childArr,...other})
      }else {
        const {children, ...other} = element
        res.push(other)
      }
    }
  }
  return res;
};
const sidebarItemsV = computed(() => {
  const res = findTargetChild(sidebarItems.value) || [];
  return res;
});

const newSidebarItems = computed(() => {
  if(!isNeedRight.value) return sidebarItems.value
  const res =  getFatherItem(sidebarItems.value) || []
  return res
});

onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  const MOBILE_DESKTOP_BREAKPOINT = 1200;
  const handleLinksWrapWidth = (): void => {
    if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
      isNeedRight.value = false;
    }else {
      isNeedRight.value = true
    }
  };
  handleLinksWrapWidth();
  window.addEventListener("resize", handleLinksWrapWidth, false);
  window.addEventListener("orientationchange", handleLinksWrapWidth, false);
});
</script>

<template>
  <ul v-if="newSidebarItems.length && position === 'left'" class="sidebar-items">
    <SidebarItem
      position="left"
      v-for="item in newSidebarItems"
      :key="item.link || item.text"
      :item="item"
    />
  </ul>
  <ul
    v-else-if="sidebarItemsV.length && position === 'right'"
    class="sidebar-items"
  >
    <SidebarItem
      position="right"
      v-for="item in sidebarItemsV"
      :key="item.link || item.text"
      :item="item"
    />
  </ul>
</template>
