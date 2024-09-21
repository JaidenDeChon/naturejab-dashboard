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

// Use defineModel to bind the open state
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

// Define the model for open state control
const open = defineModel<boolean>();

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
            v-model:open="open"
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
                    v-if="props.title || props.subtitle"
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
                    <DrawerFooter class="pt-0 w-full">
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
