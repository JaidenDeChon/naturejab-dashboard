<script setup lang="ts">
    import PrimeCard from 'primevue/card';
    import PrimeAvatar from 'primevue/avatar';
</script>

<template>
    <prime-card class="reactor-status-card">
        <template #title>
            <div class="reactor-status-card__title-slot">
                <prime-avatar icon="pi pi-wave-pulse" />
                <span>Reactor status</span>
            </div>
        </template>

        <template #content>
            <!-- todo -->
        </template>
    </prime-card>
</template>

<style scoped>
    .reactor-status-card__title-slot {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
</style>
