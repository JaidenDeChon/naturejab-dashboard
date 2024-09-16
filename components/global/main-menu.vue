<script setup lang="ts">
import { useMainMenuDrawerStore } from '~/stores/main-menu-drawer-state';

const mainMenuDrawerStore = useMainMenuDrawerStore();
</script>

<template>
    <div class="border-b-2 border-border p-3 bg-background/40 backdrop-blur-lg md:px-24 lg:px-36 xl:px-72">
        <dialog-drawer-combo>
            <template #trigger>
                <Button
                    variant="ghost"
                >
                    <Icon
                        name="material-symbols:menu-rounded"
                        size="1.3em"
                    />
                </Button>
            </template>

            <template #body>
                <div class="w-full p-4 flex flex-col gap-3">
                    <!-- Home link. -->
                    <Button
                        as-child
                        variant="secondary"
                        class="justify-start"
                    >
                        <NuxtLink
                            to="/"
                            @click="mainMenuDrawerStore.closeMainMenuDrawer()"
                        >
                            <Icon
                                name="ic:round-home"
                                size="1rem"
                                class="mr-2"
                            />
                            Home
                        </NuxtLink>
                    </Button>

                    <!-- History link. -->
                    <Button
                        as-child
                        variant="secondary"
                        class="justify-start"
                    >
                        <NuxtLink
                            to="/history"
                            @click="mainMenuDrawerStore.closeMainMenuDrawer()"
                        >
                            <Icon
                                name="ic:round-access-time-filled"
                                size="1rem"
                                class="mr-2"
                            />
                            History
                        </NuxtLink>
                    </Button>

                    <quick-controls-card
                        class="my-9"
                        @close-main-menu-drawer="mainMenuDrawerStore.closeMainMenuDrawer()"
                    />
                </div>
            </template>

            <template #footer>
                <Button>
                    Close
                </Button>
            </template>
        </dialog-drawer-combo>
    </div>
</template>

<style></style>
