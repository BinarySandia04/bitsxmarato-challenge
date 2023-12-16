<script setup>

import { RouterLink, RouterView } from 'vue-router'

console.clear();
console.log("%cLoaded!!!", "color: #22ff22; font-size: 24px");

</script>

<template>

    <RouterView />

</template>

<style scoped>

.web-title {
  font-size: 22px;
  font-weight: bolder;
  padding-bottom: 12px;
  color: var(--color-heading)
}

a {
  width: 100%;
}

.wrapper {
  flex-grow: 1;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .sidebar {
    min-width: 240px;
    padding: 16px;
    height: 100%;
  }
}
</style>
