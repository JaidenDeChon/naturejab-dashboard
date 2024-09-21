<script setup lang="ts">
const props = defineProps<{
    magnetrons: boolean[];
    setMagnetrons: (newValue: boolean[]) => void;
}>();

const emit = defineEmits<{
    'start-all': [];
    'stop-all': [];
}>();

function updateMagnetronStatus(index: number) {
    const copyArray = [...props.magnetrons];
    copyArray[index] = !copyArray[index];
    props.setMagnetrons(copyArray);
}
</script>

<template>
    <div class="flex flex-col gap-3">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Button
                v-for="(magnetron, index) in props.magnetrons"
                :key="index"
                variant="outline"
                class="gap-3"
                @click="updateMagnetronStatus(index)"
            >
                Mag {{ index + 1 }}
                <Switch
                    :checked="magnetron"
                    class="pointer-events-none"
                />
            </Button>
        </div>
        <div class="flex gap-3">
            <Button
                @click="emit('start-all')"
            >
                Start all
            </Button>
            <Button
                variant="destructive"
                @click="emit('stop-all')"
            >
                Stop all
            </Button>
        </div>
    </div>
</template>
