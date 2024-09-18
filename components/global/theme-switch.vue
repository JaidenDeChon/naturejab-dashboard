<script setup lang="ts">
const colorMode = useColorMode();

const buttonContent = computed(() => {
    switch (colorMode.preference) {
        case 'dark':
            return '🌙';
        case 'light':
        default:
            return '🔆';
    }
});

function toggleTheme() {
    const currentTheme = colorMode.value;
    switch (currentTheme) {
        case 'light':
            colorMode.preference = 'dark';
            break;
        case 'dark':
            colorMode.preference = 'light';
            break;
        // This should never be reached theoretically.
        default:
            colorMode.preference = 'system';
    }
}
</script>

<template>
    <Button
        variant="ghost"
        @click="toggleTheme"
    >
        {{ buttonContent }}
        <span class="sr-only">Toggle theme</span>
    </Button>
</template>
