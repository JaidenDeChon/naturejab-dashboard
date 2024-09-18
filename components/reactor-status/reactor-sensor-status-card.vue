<script setup lang="ts">
import { ReactorSensorTypesEnum } from '~/lib/constants/reactor-sensor-types-enum.js';
import type { SensorData } from '~/lib/models/sensor-data';

const props = defineProps<{
    sensor: SensorData;
}>();

const chooseIcon = computed((): string | undefined => {
    switch (props.sensor.sensorType) {
        case ReactorSensorTypesEnum.TEMPERATURE:
            return '🌡';
        case ReactorSensorTypesEnum.PRESSURE:
            // It's not a pressure icon exactly but close enough.
            return '☁';
        default:
            return undefined;
    }
});

const displayValue = computed((): string => {
    switch (props.sensor.sensorType) {
        case ReactorSensorTypesEnum.TEMPERATURE:
            return `${props.sensor.sensorValue}°C`;
        case ReactorSensorTypesEnum.PRESSURE:
            return `${props.sensor.sensorValue} Pa`;
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
