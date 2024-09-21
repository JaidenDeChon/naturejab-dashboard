<script setup lang="ts">
import { useReactorStateStore } from '#imports';
// import QuickControlsCard from '~/components/global/quick-controls-card.vue';
import ReactorSensorStatusCard from '~/components/reactor-status/reactor-sensor-status-card.vue';
import ReactorTimeRemainingCard from '~/components/reactor-status/reactor-time-remaning-card.vue';
import ConfigureRun from '~/components/reactor-controls/configure-run.vue';
import MagnetronArray from '~/components/reactor-controls/magnetron-array.vue';

const reactorState = useReactorStateStore();
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-20">
            <!-- First row: configure run. -->
            <configure-run />

            <!-- Second row: controls. -->
            <div class="flex flex-col gap-20 xl:flex-row xl:gap-16">
                <!-- Magnetron controls. -->
                <div class="flex flex-col justify-between gap-3">
                    <span>Magnetrons</span>
                    <magnetron-array
                        :magnetrons="reactorState.magnetronArrayPowerStatus"
                        :set-magnetrons="reactorState.setMagnetronArrayPowerStatus"
                        @start-all="reactorState.setAllMagnetrons(true, true)"
                        @stop-all="reactorState.setAllMagnetrons(false, true)"
                    />
                </div>

                <!-- Intake auger controls. -->
                <div class="flex flex-col justify-start gap-3 flex-1">
                    <div class="flex gap-3">
                        <span>Intake Auger</span>
                        <badge class="capitalize">
                            {{ reactorState.intakeAugerStatus }}
                        </badge>
                    </div>
                    <div class="flex gap-3">
                        <Button
                            class="w-full"
                        >
                            Reverse
                        </Button>
                        <Button
                            class="w-full"
                        >
                            Forward
                        </Button>
                    </div>
                    <div class="flex gap-3">
                        <Button
                            class="w-full"
                            variant="destructive"
                        >
                            Stop
                        </Button>
                    </div>
                </div>

                <!-- Barrel auger controls. -->
                <div class="flex flex-col justify-start gap-3 flex-1">
                    <div class="flex gap-3">
                        <span>Barrel Auger</span>
                        <badge
                            class="capitalize"
                        >
                            {{ reactorState.barrelAugerStatus }}
                        </badge>
                    </div>
                    <div class="flex gap-3">
                        <Button
                            class="w-full"
                        >
                            Reverse
                        </Button>
                        <Button
                            class="w-full"
                        >
                            Forward
                        </Button>
                    </div>
                    <div class="flex gap-3">
                        <Button
                            class="w-full"
                            variant="destructive"
                        >
                            Stop
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <p
            v-if="!reactorState.masterPowerStatus"
            class="text-center p-12"
        >
            Start the reactor to view its data.
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
                    <div>
                        <scroll-area>
                            <line-chart
                                :data="reactorState.sensorReadingStreamTemperature"
                                index="tPlus"
                                :categories="['Barrel temp (front)', 'Barrel temp (rear)', 'Condensor temp']"
                                class="w-full"
                            />
                            <scroll-bar orientation="horizontal" />
                        </scroll-area>
                    </div>
                </Card>

                <Card>
                    <card-header>
                        <card-title>Reactor Vacuum</card-title>
                    </card-header>
                    <div>
                        <scroll-area>
                            <line-chart
                                :data="reactorState.sensorReadingStreamPressure"
                                index="tPlus"
                                :categories="['Intake pressure', 'Barrel pressure']"
                                class="w-full"
                            />
                            <scroll-bar orientation="horizontal" />
                        </scroll-area>
                    </div>
                </Card>
            </div>
        </template>
    </div>
</template>
