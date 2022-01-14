<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: false,
    default: 'homePage',
  },
  text: {
    type: String,
    required: false,
    default: '',
  },
})
</script>

<template>
  <span
    :class="type"
  >
    <slot>{{ text }} 哈哈哈哈哈哈哈哈哈哈或或</slot>
  </span>
</template>
