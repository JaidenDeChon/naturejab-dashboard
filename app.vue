<script setup lang="ts">
useAppConfig();
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtWelcome />
        <p>color mode: {{ $colorMode.value }}</p>
    </div>
</template>
