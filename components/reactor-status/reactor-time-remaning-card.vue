<script setup lang="ts">
const props = defineProps<{
    totalTime: number;
    elapsedTime: number;
}>();

const percentage = computed(() => {
    if (props.totalTime === 0) return 100;
    const elapsedPercentage = (Number(props.elapsedTime) / Number(props.totalTime)) * 100;
    if (elapsedPercentage >= 100) return 100;
    if (elapsedPercentage <= 0) return 0;
    return elapsedPercentage;
});
</script>

<template>
    <Card class="p-6 flex flex-col">
        <div class="flex justify-between">
            <span class="text-sm truncate">Time elapsed: {{ elapsedTime }} / {{ totalTime }} minutes</span>
            <span>🕒</span>
        </div>

        <Progress
            v-model="percentage"
            class="w-full mt-auto"
        />
    </Card>
</template>
