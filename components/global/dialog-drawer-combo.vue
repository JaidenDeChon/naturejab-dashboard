<script setup lang="ts">
import { useRoute } from 'vue-router';
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

const props = withDefaults(
    defineProps<{
        title?: string;
        subtitle?: string;
        closeOnRouteChange?: boolean;
    }>(),
    {
        closeOnRouteChange: true,
    },
);

// Watch the router to close when the route changes.
const isOpen = ref(false);
const route = useRoute();
watch(() => route.fullPath, () => {
    if (!props.closeOnRouteChange) return;
    isOpen.value = false;
});

const isDesktop = useMediaQuery('(min-width:  768px)');

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
                    <component :is="isDesktop ? DialogTitle : DrawerTitle">
                        {{ props.title }}
                    </component>
                    <component :is="isDesktop ? DialogDescription : DrawerDescription">
                        {{ props.subtitle }}
                    </component>
                </component>

                <!-- Modal body content slot -->
                <slot name="body">
                    <p>Default content goes here.</p>
                </slot>

                <!-- Drawer footer slot (only for drawer mode) -->
                <template v-if="!isDesktop">
                    <DrawerFooter class="pt-2 w-full">
                        <DrawerClose as-child>
                            <slot name="footer">
                                <Button variant="outline">
                                    Cancel
                                </Button>
                            </slot>
                        </DrawerClose>
                    </DrawerFooter>
                </template>
            </component>
        </component>
    </client-only>
</template>
