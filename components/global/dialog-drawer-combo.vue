<script setup lang="ts">
import {
    Dialog,
    DialogTrigger,
    DialogTitle,
    DialogHeader,
    DialogDescription,
    DialogContent,
    Drawer,
    DrawerTrigger,
    DrawerTitle,
    DrawerHeader,
    DrawerDescription,
    DrawerContent,
} from '../ui';
import { useMediaQuery } from '#imports';

const isOpen = ref(false);
const isDesktop = useMediaQuery('(min-width:  768px)');

const windowWidth = ref(0);

onMounted(() => {
    if (import.meta.client) {
        windowWidth.value = window.innerWidth;
        window.addEventListener('resize', () => {
            windowWidth.value = window.innerWidth;
        });
    }
});

const defaultDrawerClass = computed(() => {
    if (isDesktop.value) {
        return 'sm:max-w-[425px]';
    }
    else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        return 'fixed inset-0 flex items-center justify-center p-4';
    }
    else {
        return '';
    }
});
</script>

<template>
    <client-only>
        <component
            :is="isDesktop ? Dialog : Drawer"
            v-model:open="isOpen"
        >
            <component
                :is="isDesktop ? DialogTrigger : DrawerTrigger"
                as-child
            >
                <slot name="trigger">
                    <Button variant="outline">
                        Open Modal
                    </Button>
                </slot>
            </component>

            <component
                :is="isDesktop ? DialogContent : DrawerContent"
                :class="defaultDrawerClass"
            >
                <component
                    :is="isDesktop ? DialogHeader : DrawerHeader"
                    class="text-left"
                >
                    <slot name="header">
                        <component :is="isDesktop ? DialogTitle : DrawerTitle">
                            Modal Title
                        </component>
                        <component :is="isDesktop ? DialogDescription : DrawerDescription">
                            Modal Description
                        </component>
                    </slot>
                </component>

                <!-- Modal body content slot -->
                <slot name="body">
                    <p>Default content goes here.</p>
                </slot>

                <!-- Drawer footer slot (only for drawer mode) -->
                <template v-if="!isDesktop">
                    <DrawerFooter class="pt-2">
                        <DrawerClose as-child>
                            <Button variant="outline">
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </template>
            </component>
        </component>
    </client-only>
</template>
