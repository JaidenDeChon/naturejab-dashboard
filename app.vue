<script setup lang="ts">
useAppConfig();
</script>

<template>
    <div
        vaul-drawer-wrapper
        class="h-screen bg-background"
    >
        <header class="sticky">
            <main-menu />
        </header>

        <nuxt-page />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
    background-color: hsl(var(--muted) / 0.4);
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
