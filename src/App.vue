<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import AppNavbar from './components/global/app-navbar.vue';
</script>

<template>
  <!-- Contains nav element -->
  <app-navbar />

  <!-- App main content -->
  <main>
    <RouterView />
  </main>

</template>

<style scoped>
  main {
    padding: 1rem;
  }
</style>
