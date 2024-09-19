<script setup lang="ts">
useAppConfig();

const colorMode = useColorMode();
colorMode.preference = 'system';
</script>

<template>
    <div
        vaul-drawer-wrapper
        class="h-screen bg-muted/70 overflow-y-scroll"
    >
        <nuxt-layout>
            <nuxt-page />
        </nuxt-layout>

        <toaster
            position="top-right"
            :toast-options="{ class: 'bg-white', style: { background: 'red' } }"
        />
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
