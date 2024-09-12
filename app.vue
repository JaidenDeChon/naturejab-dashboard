<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date';
import { Calendar } from '@/components/ui/calendar';

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>;

useAppConfig();
</script>

<template>
    <div class="w-72">
        <Calendar
            v-model="value"
            :weekday-format="'short'"
            class="rounded-md border"
        />
    </div>
</template>
