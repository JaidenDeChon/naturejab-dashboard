<script setup lang="ts">
import FireSuppressionButton from '~/components/reactor-controls/fire-suppression-button.vue';
import { useReactorStateStore } from '#imports';

const reactorState = useReactorStateStore();
</script>

<template>
    <Card class="bg-muted w-full md:w-96">
        <!-- Body. -->
        <CardContent class="p-3 flex flex-col gap-6 z-50">
            <!-- Critical controls. -->
            <div class="grid grid-cols-2 grid-rows-3 gap-3">
                <!-- Emergency stop button. -->
                <FireSuppressionButton />

                <!-- Shutdown button. -->
                <Button
                    class="col-span-2"
                    @click="reactorState.masterPowerStatus ? reactorState.stopReactor() : reactorState.startReactor()"
                >
                    <Icon
                        name="ic:round-power-settings-new"
                        size="1rem"
                        class="mr-2"
                    />
                    {{ reactorState.masterPowerStatus ? 'Stop Reactor' : 'Start Reactor' }}
                </Button>

                <!-- Inert vacuum break button. -->
                <Button>
                    <span class="mr-2">☁</span>
                    Break vacuum
                </Button>

                <!-- Kill magnetrons button. -->
                <Button @click="reactorState.setAllMagnetrons(false)">
                    <Icon
                        name="ic:outline-electric-bolt"
                        size="1rem"
                        class="mr-2"
                    />
                    Kill magnetrons
                </Button>
            </div>
        </CardContent>
    </Card>
</template>
