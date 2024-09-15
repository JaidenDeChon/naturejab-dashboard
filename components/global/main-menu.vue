<script setup lang="ts">
</script>

<template>
    <div class="border-b-2 border-b-border p-3 md:px-24 lg:px-36 xl:px-72">
        <dialog-drawer-combo
            title="Main menu"
        >
            <template #trigger>
                <Button variant="ghost">
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
                    >
                        <NuxtLink
                            to="/"
                        >
                            <Icon
                                name="ic:round-home"
                                size="1.3em"
                                class="mr-2"
                            />
                            Home
                        </NuxtLink>
                    </Button>

                    <!-- History link. -->
                    <Button
                        as-child
                        variant="secondary"
                    >
                        <NuxtLink
                            to="/history"
                        >
                            <Icon
                                name="ic:round-access-time-filled"
                                size="1.3em"
                                class="mr-2"
                            />
                            History
                        </NuxtLink>
                    </Button>

                    <quick-controls-card />
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
