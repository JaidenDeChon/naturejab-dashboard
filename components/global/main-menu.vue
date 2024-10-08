<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../ui';
import { useMainMenuDrawerStore } from '~/stores/main-menu-drawer-state';

const mainMenuDrawerStore = useMainMenuDrawerStore();

const links: { title: string; href: string; icon: string }[] = [
    {
        title: 'Home',
        href: '/',
        icon: 'ic:round-home',
    },
    {
        title: 'History',
        href: '/history',
        icon: 'ic:round-access-time-filled',
    },
];
</script>

<template>
    <div>
        <div class="flex justify-between">
            <!-- Mobile version of navbar. -->
            <div class="md:hidden">
                <dialog-drawer-combo v-model="mainMenuDrawerStore.isOpen">
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
                            <Button
                                v-for="link in links"
                                :key="link.title"
                                as-child
                                variant="secondary"
                                class="justify-start"
                            >
                                <nuxt-link
                                    :to="link.href"
                                    @click="mainMenuDrawerStore.closeMainMenuDrawer()"
                                >
                                    <Icon
                                        :name="link.icon"
                                        size="1rem"
                                        class="mr-2"
                                    />
                                    {{ link.title }}
                                </nuxt-link>
                            </Button>

                            <quick-controls-card
                                class="my-9 z-50"
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

            <!-- Desktop version of navbar. -->
            <div class="hidden md:flex items-start">
                <navigation-menu>
                    <navigation-menu-list>
                        <!-- List of links. -->
                        <navigation-menu-item
                            v-for="link in links"
                            :key="link.title"
                        >
                            <nuxt-link
                                :to="link.href"
                                active-class="active"
                            >
                                <navigation-menu-link :class="navigationMenuTriggerStyle()">
                                    <Icon
                                        :name="link.icon"
                                        size="1rem"
                                        class="mr-2"
                                    />
                                    {{ link.title }}
                                </navigation-menu-link>
                            </nuxt-link>
                        </navigation-menu-item>

                        <!-- Quick controls dropdown. -->
                        <navigation-menu-item>
                            <navigation-menu-trigger>Quick controls</navigation-menu-trigger>
                            <navigation-menu-content class="w-96">
                                <quick-controls-card />
                            </navigation-menu-content>
                        </navigation-menu-item>
                    </navigation-menu-list>
                </navigation-menu>
            </div>

            <theme-switch />
        </div>
    </div>
</template>

<style scoped>
a.active > a {
    @apply bg-muted;
}
</style>
