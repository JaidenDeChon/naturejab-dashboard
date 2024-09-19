<script setup lang="ts">
const header = ref();

onMounted(() => header.value);
</script>

<template>
    <header
        ref="header"
        class="border-b-2 border-border px-6 h-16 content-center fixed w-full bg-background/60 backdrop-blur-lg z-50"
    >
        <main-menu class="size-for-all-screens" />
    </header>

    <!-- eslint-disable-next-line vue/no-multiple-template-root -->
    <main class="min-h-full p-6 pt-16 z-0 box-border">
        <slot />
    </main>
</template>
