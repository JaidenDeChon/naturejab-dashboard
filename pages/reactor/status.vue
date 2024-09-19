<script setup lang="ts">
import { useReactorStateStore } from '#imports';
import QuickControlsCard from '~/components/global/quick-controls-card.vue';
import ReactorSensorStatusCard from '~/components/reactor-status/reactor-sensor-status-card.vue';
import ReactorTimeRemainingCard from '~/components/reactor-status/reactor-time-remaning-card.vue';

const reactorState = useReactorStateStore();

function setMagnetronStatus(index: number) {
    console.log(index);
    const magnetronArrayCopy = [...reactorState.magnetronArrayPowerStatus];
    magnetronArrayCopy[index] = !magnetronArrayCopy[index];
    reactorState.setMagnetronArrayPowerStatus(magnetronArrayCopy);
}
</script>

<template>
    <div class="flex flex-col gap-6">
        <Card>
            <card-header class="flex flex-col md:flex-row gap-6">
                <card-title>Control Panel</card-title>
            </card-header>
            <card-content class="flex flex-col gap-6 md:flex-row">
                <!-- Quick controls card. -->
                <quick-controls-card />

                <!-- Magnetron controls. -->
                <div class="border rounded-lg p-3 flex flex-col justify-between gap-3">
                    <span>Magnetrons</span>
                    <div class="flex gap-2">
                        <Button
                            v-for="(magnetron, index) in reactorState.magnetronArrayPowerStatus"
                            :key="index"
                            :variant="magnetron ? 'default' : 'secondary'"
                            class="w-full"
                            @click="setMagnetronStatus(index)"
                        >
                            {{ index + 1 }}
                        </Button>
                    </div>
                    <div class="flex gap-2">
                        <Button
                            class="w-full"
                            @click="reactorState.setAllMagnetrons(true, true)"
                        >
                            Start all
                        </Button>
                        <Button
                            variant="destructive"
                            class="w-full"
                            @click="reactorState.setAllMagnetrons(false, true)"
                        >
                            Stop all
                        </Button>
                    </div>
                </div>

                <!-- Intake auger controls. -->
                <div class="border rounded-lg p-3 flex flex-col justify-between gap-3 flex-1">
                    <div class="flex justify-between">
                        <span>Intake Auger</span>
                        <badge class="capitalize">
                            {{ reactorState.intakeAugerStatus }}
                        </badge>
                    </div>
                    <div class="flex gap-2">
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
                    <div class="flex gap-2">
                        <Button
                            class="w-full"
                            variant="destructive"
                        >
                            Stop
                        </Button>
                    </div>
                </div>

                <!-- Barrel auger controls. -->
                <div class="border rounded-lg p-3 flex flex-col justify-between gap-3 flex-1">
                    <div class="flex justify-between">
                        <span>Barrel Auger</span>
                        <badge
                            class="capitalize"
                        >
                            {{ reactorState.barrelAugerStatus }}
                        </badge>
                    </div>
                    <div class="flex gap-2">
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
                    <div class="flex gap-2">
                        <Button
                            class="w-full"
                            variant="destructive"
                        >
                            Stop
                        </Button>
                    </div>
                </div>
            </card-content>
        </Card>

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
