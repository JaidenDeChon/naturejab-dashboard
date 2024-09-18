<script setup lang="ts"></script>

<template>
    <header>
        <client-only>
            <main-menu />
        </client-only>
    </header>

    <!-- eslint-disable-next-line vue/no-multiple-template-root -->
    <main>
        <slot />
    </main>
</template>
