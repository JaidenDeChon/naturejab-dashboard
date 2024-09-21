<script setup lang="ts">
import { ref } from 'vue';
import { PlasticTypesEnum } from '~/lib/constants/plastic-types-enum';

const selectedRuntime = ref(60);
const selectedPlasticTypes = ref<Record<string, boolean>>(
    Object.values(PlasticTypesEnum).reduce((acc, key) => {
        acc[key] = false;
        return acc;
    }, {} as Record<string, boolean>),
);

const togglePlasticType = (type: string, value: boolean) => {
    selectedPlasticTypes.value[type] = value;
};
</script>

<template>
    <card>
        <card-content class="p-6 flex flex-col gap-6">
            <!-- Runtime field. -->
            <number-field
                id="configure-time-limit"
                v-model="selectedRuntime"
                :min="1"
                :max="120"
                class="gap-2"
            >
                <Label for="configure-time-limit">Run reactor for: (minutes)</Label>
                <number-field-content>
                    <number-field-increment />
                    <number-field-input />
                    <number-field-decrement />
                </number-field-content>
            </number-field>

            <div class="flex flex-col gap-2">
                <Label>Plastic type:</Label>
                <dialog-drawer-combo>
                    <template #trigger>
                        <Button
                            variant="outline"
                            class="gap-3"
                        >
                            Select...
                            <Icon
                                name="ic:round-chevron-right"
                                size="1.3em"
                                class="rotate-90"
                            />
                        </Button>
                    </template>

                    <template #body>
                        <div class="p-4 flex flex-col gap-3 max-h-72 overflow-y-auto">
                            <div
                                v-for="(isSelected, plasticType) in selectedPlasticTypes"
                                :key="plasticType"
                                class="flex gap-3 items-center p-3 bg-muted rounded-lg"
                            >
                                <Checkbox
                                    :id="`plastic-type-checkbox-${plasticType}`"
                                    :checked="isSelected"
                                    @update:checked="(value) => togglePlasticType(plasticType, value)"
                                />
                                <label
                                    :for="`plastic-type-checkbox-${plasticType}`"
                                    class="w-full"
                                >
                                    {{ plasticType }}
                                </label>
                            </div>
                        </div>
                    </template>

                    <template #footer>
                        <Button>Close</Button>
                    </template>
                </dialog-drawer-combo>
            </div>

            <Button>Start reactor</Button>
        </card-content>
    </card>
</template>
