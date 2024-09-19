<script setup lang="ts">
import { ReactorSensorTypesEnum } from '~/lib/constants/reactor-sensor-types-enum.js';
import type { SensorData } from '~/lib/models/sensor-data';

const props = defineProps<{
    sensor: SensorData;
    reactorMasterPower: boolean;
}>();

const chooseIcon = computed((): string | undefined => {
    switch (props.sensor.sensorType) {
        case ReactorSensorTypesEnum.TEMPERATURE:
            return '🌡';
        case ReactorSensorTypesEnum.PRESSURE:
            // It's not a pressure icon exactly but good enough for now.
            return '☁';
        default:
            return undefined;
    }
});

const displayValue = computed((): string => {
    if (!props.reactorMasterPower) return '--';

    switch (props.sensor.sensorType) {
        case ReactorSensorTypesEnum.TEMPERATURE:
            return `${props.sensor.sensorReading}°C`;
        case ReactorSensorTypesEnum.PRESSURE:
            return `${props.sensor.sensorReading} Pa`;
        default:
            return '';
    }
});
</script>

<template>
    <Card class="p-6">
        <div class="flex justify-between">
            <span class="text-sm truncate">{{ props.sensor.sensorName }}</span>
            <span>{{ chooseIcon }}</span>
        </div>

        <span class="mt-3 block text-3xl font-bold">{{ displayValue }}</span>
    </Card>
</template>
