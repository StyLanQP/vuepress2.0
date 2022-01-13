<script setup lang="ts">
import NavbarItems from './NavbarItems.vue'
import SidebarItems from './SidebarItems.vue'


const props = defineProps({
  position: {
    type: String,
    required: false,
    default: "left",
  },
})
</script>

<template>
  <aside class="sidebar">
    <NavbarItems />
    <slot name="top" />
    <SidebarItems :position="position" />
    <slot name="bottom" />
  </aside>
</template>
