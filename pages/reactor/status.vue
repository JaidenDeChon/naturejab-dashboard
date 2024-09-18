<script setup lang="ts">
import { useReactorStateStore } from '#imports';
import ReactorSensorStatusCard from '~/components/reactor-status/reactor-sensor-status-card.vue';

const reactorStateStore = useReactorStateStore();
</script>

<template>
    <div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <reactor-sensor-status-card
                v-for="sensor in reactorStateStore.sensorsArrayReadings"
                :key="sensor.sensorName"
                :sensor="sensor"
            />
        </div>

        <div class="grid grid-cols-1 gap-6 mt-6">
            <Card>
                <card-header>
                    <card-title>Reactor Temperature</card-title>
                </card-header>
                <card-content>
                    <scroll-area>
                        <line-chart
                            :data="reactorStateStore.sensorReadingStreamTemperature"
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
                            :data="reactorStateStore.sensorReadingStreamPressure"
                            index="tPlus"
                            :categories="['Intake pressure', 'Barrel pressure']"
                            class="w-full"
                        />
                        <scroll-bar orientation="horizontal" />
                    </scroll-area>
                </card-content>
            </Card>
        </div>
    </div>
</template>
