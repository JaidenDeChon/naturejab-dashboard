<script setup lang="ts">
import { useReactorStateStore } from '#imports';
import FireSuppressionButton from '~/components/reactor-controls/fire-suppression-button.vue';
import ReactorSensorStatusCard from '~/components/reactor-status/reactor-sensor-status-card.vue';
import ReactorTimeRemainingCard from '~/components/reactor-status/reactor-time-remaning-card.vue';

const reactorState = useReactorStateStore();
</script>

<template>
    <!-- eslint-disable-next-line vue/no-multiple-template-root -->
    <div class="flex flex-col gap-6">
        <Card>
            <card-header class="flex flex-col md:flex-row gap-6">
                <card-title>Control Panel</card-title>
                <div class="flex flex-col gap-3 md:flex-row md:ml-auto">
                    <fire-suppression-button />
                    <Button
                        variant="outline"
                        :disabled="reactorState.masterPowerStatus === false"
                        @click="reactorState.stopReactor"
                    >
                        Stop Reactor
                    </Button>
                    <Button
                        :disabled="reactorState.masterPowerStatus === true"
                        @click="reactorState.startReactor"
                    >
                        Start Reactor
                    </Button>
                </div>
            </card-header>
            <card-content />
        </Card>

        <p
            v-if="!reactorState.masterPowerStatus"
            class="text-center p-12"
        >
            Start the reactor to view data.
        </p>

        <template v-else>
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                <reactor-time-remaining-card
                    :total-time="reactorState.reactorTimeLimit"
                    :elapsed-time="reactorState.reactorTimeElapsed"
                />
                <reactor-sensor-status-card
                    v-for="sensor in reactorState.sensorsArray"
                    :key="sensor.sensorName"
                    :sensor="sensor"
                    :reactor-master-power="reactorState.masterPowerStatus"
                />
            </div>

            <div class="grid grid-cols-1 gap-6">
                <Card>
                    <card-header>
                        <card-title>Reactor Temperature</card-title>
                    </card-header>
                    <card-content>
                        <scroll-area>
                            <line-chart
                                :data="reactorState.sensorReadingStreamTemperature"
                                index="tPlus"
                                :categories="['Barrel temp (front)', 'Barrel temp (rear)', 'Condensor temp']"
                                class="w-full"
                            />
                            <scroll-bar orientation="horizontal" />
                        </scroll-area>
                    </card-content>
                </Card>

                <Card>
                    <card-header>
                        <card-title>Reactor Vacuum</card-title>
                    </card-header>
                    <card-content>
                        <scroll-area>
                            <line-chart
                                :data="reactorState.sensorReadingStreamPressure"
                                index="tPlus"
                                :categories="['Intake pressure', 'Barrel pressure']"
                                class="w-full"
                            />
                            <scroll-bar orientation="horizontal" />
                        </scroll-area>
                    </card-content>
                </Card>
            </div>
        </template>
    </div>
</template>
