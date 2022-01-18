<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import NavbarItems from "./NavbarItems.vue";
import SidebarItems from "./SidebarItems.vue";
import Select from "./Select.vue";

const versionList = ["v1.0", "v2.0"];
const versionActive = ref("v1.0");
const isShowSearch = ref(false);

const props = defineProps({
  position: {
    type: String,
    required: false,
    default: "left",
  },
});

const MOBILE_DESKTOP_BREAKPOINT = 720;
const handleLinksWrapWidth = (): void => {
  if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
    isShowSearch.value = true;
  } else {
    isShowSearch.value = false;
  }
};
onMounted(() => {
  // TODO: migrate to css var
  // refer to _variables.scss
  handleLinksWrapWidth();
  window.addEventListener("resize", handleLinksWrapWidth, false);
  // window.addEventListener("orientationchange", handleLinksWrapWidth, false);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleLinksWrapWidth, false);
});
</script>

<template>
  <aside class="sidebar">
    <NavbarSearch v-if="isShowSearch" />
    <NavbarItems />
    <slot name="top" />
    <SidebarItems :position="position" />
    <slot name="bottom" />
    <Select :dataArr="versionList" versionActive="v1.0"></Select>
  </aside>
</template>
