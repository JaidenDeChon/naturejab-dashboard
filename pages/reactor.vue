<script setup lang="ts">
import { RouteNamesEnum } from '~/lib/constants/route-names-enum';
import { RoutePathsEnum } from '~/lib/constants/route-paths.enum';
</script>

<template>
    <div class="flex flex-col gap-6 size-for-all-screens">
        <tabs :default-value="$route.path">
            <tabs-list>
                <tabs-trigger
                    :value="'/' + RoutePathsEnum.REACTOR_STATUS"
                    @click.stop="$router.replace({ name: RouteNamesEnum.REACTOR_STATUS })"
                >
                    Status
                </tabs-trigger>
                <tabs-trigger
                    :value="'/' + RoutePathsEnum.REACTOR_CONTROLS"
                    @click.stop="$router.replace({ name: RouteNamesEnum.REACTOR_CONTROLS })"
                >
                    Controls
                </tabs-trigger>
            </tabs-list>
        </tabs>

        <nuxt-page />
    </div>
</template>
