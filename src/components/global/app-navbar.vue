<script setup lang="ts">
    import PrimeMenubar from 'primevue/menubar';
    import PrimeAvatar from 'primevue/avatar';
    import type { MenuItem } from 'primevue/menuitem';

    const menuItems: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Previous runs',
            icon: 'pi pi-clock'
        }
    ];
</script>

<template>
    <nav class="app-navbar">
        <prime-menubar :model="menuItems">
            <template #end>
                <div class="app-navbar__menubar-end-slot">
                    <code>naturejab</code>
                    <prime-avatar image="/images/naturejab-logo.png" />
                </div>
            </template>
        </prime-menubar>
    </nav>
</template>

<style scoped>
    .app-navbar {
        width: 100%;
        padding: 1rem;
    }

    .app-navbar__menubar-end-slot {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        code {
            letter-spacing: 0.06em;
        }
    }

    @media (min-width: 1000px) {}
</style>
