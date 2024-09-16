<script setup lang="ts">
import FireSuppressionButton from '~/components/reactor-controls/fire-suppression-button.vue';
import { AugerStatusEnum } from '~/lib/constants/auger-status-enum';
import { useReactorStateStore } from '#imports';

const reactorStateStore = useReactorStateStore();
</script>

<template>
    <Card class="bg-muted w-full md:w-96">
        <!-- Body. -->
        <CardContent class="p-3 flex flex-col gap-6">
            <!-- Critical controls. -->
            <div class="grid grid-cols-2 grid-rows-4 gap-3">
                <!-- Emergency stop button. -->
                <FireSuppressionButton />

                <!-- Shutdown button. -->
                <Button class="col-span-2">
                    <Icon
                        name="ic:round-power-settings-new"
                        size="1rem"
                        class="mr-2"
                    />
                    Shutdown
                </Button>

                <!-- Inert vacuum break button. -->
                <Button>
                    <Icon
                        name="ic:round-lens-blur"
                        size="1rem"
                        class="mr-2"
                    />
                    Inert vacuum break
                </Button>

                <!-- Kill magnetrons button. -->
                <Button>
                    <Icon
                        name="ic:outline-electric-bolt"
                        size="1rem"
                        class="mr-2"
                    />
                    Kill magnetrons
                </Button>

                <!-- Barrel auger toggle. -->
                <Button
                    class="gap-3"
                    @click="reactorStateStore.barrelAugerStatus === AugerStatusEnum.FORWARD ? reactorStateStore.stopBarrelAuger() : reactorStateStore.barrelAugerForward()"
                >
                    Barrel:
                    <Badge
                        :variant="reactorStateStore.barrelAugerStatus === AugerStatusEnum.FORWARD ? 'secondary' : 'destructive'"
                        class="capitalize"
                    >
                        {{ reactorStateStore.barrelAugerStatus }}
                    </Badge>
                </Button>

                <!-- Intake auger dropdown. -->
                <Button
                    class="gap-3"
                    @click="reactorStateStore.intakeAugerStatus === AugerStatusEnum.FORWARD ? reactorStateStore.stopIntakeAuger() : reactorStateStore.intakeAugerForward()"
                >
                    Intake:
                    <Badge
                        :variant="reactorStateStore.intakeAugerStatus === AugerStatusEnum.FORWARD ? 'secondary' : 'destructive'"
                        class="capitalize"
                    >
                        {{ reactorStateStore.intakeAugerStatus }}
                    </Badge>
                </Button>
            </div>
        </CardContent>
    </Card>
</template>
