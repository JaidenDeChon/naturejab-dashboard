<script setup lang="ts"></script>

<template>
    <header class="border-b-2 border-border">
        <main-menu />
    </header>

    <!-- eslint-disable-next-line vue/no-multiple-template-root -->
    <main class="bg-muted/40 p-6">
        <slot />
    </main>
</template>
