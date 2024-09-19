<script setup lang="ts">
const colorMode = useColorMode();

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
        <Icon
            v-if="colorMode.value === 'dark'"
            name="ic:round-light-mode"
            size="1.2rem"
        />
        <Icon
            v-else-if="colorMode.value === 'light'"
            name="ic:round-dark-mode"
            size="1.2rem"
        />
        <span v-else>Color mode toggle</span>
        <span class="sr-only">Toggle theme</span>
    </Button>
</template>
