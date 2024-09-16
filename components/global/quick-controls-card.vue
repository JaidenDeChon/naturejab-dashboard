<script setup lang="ts">
import FireSuppressionButton from '~/components/reactor-controls/fire-suppression-button.vue';
import { AugerStatusEnum } from '~/lib/constants/auger-status-enum';

const augerOneStatus = ref<AugerStatusEnum>(AugerStatusEnum.FORWARD);
const augerTwoStatus = ref<AugerStatusEnum>(AugerStatusEnum.STOPPED);

function pickAugerStatusIcon(augerStatus: AugerStatusEnum): string {
    switch (augerStatus) {
        case AugerStatusEnum.FORWARD:
            return 'ic:round-arrow-forward';
        case AugerStatusEnum.REVERSE:
            return 'ic:round-arrow-back';
        case AugerStatusEnum.STOPPED:
        default:
            return 'ic:round-highlight-off';
    }
}
</script>

<template>
    <Card class="bg-muted">
        <!-- Body. -->
        <CardContent class="p-3 flex flex-col gap-6">
            <!-- Critical controls. -->
            <div class="grid grid-cols-2 grid-rows-4 gap-3">
                <!-- Emergency stop button. -->
                <FireSuppressionButton />

                <!-- Shutdown button. -->
                <Button class="col-span-2">
                    <Icon
                        name="ic:round-power-settings-new"
                        size="1rem"
                        class="mr-2"
                    />
                    Shutdown
                </Button>

                <!-- Inert vacuum break button. -->
                <Button>
                    <Icon
                        name="ic:round-lens-blur"
                        size="1rem"
                        class="mr-2"
                    />
                    Inert vacuum break
                </Button>

                <!-- Kill magnetrons button. -->
                <Button>
                    <Icon
                        name="ic:outline-electric-bolt"
                        size="1rem"
                        class="mr-2"
                    />
                    Kill magnetrons
                </Button>

                <!-- Barrel auger dropdown. -->
                <dropdown-menu>
                    <!-- Trigger button. -->
                    <dropdown-menu-trigger as-child>
                        <Button class="gap-3">
                            Barrel:
                            <Badge
                                :variant="augerOneStatus === AugerStatusEnum.FORWARD ? 'secondary' : 'destructive'"
                                class="capitalize"
                            >
                                {{ augerOneStatus }}
                            </Badge>
                        </Button>
                    </dropdown-menu-trigger>

                    <!-- Dropdown content. -->
                    <dropdown-menu-content class="w-64">
                        <dropdown-menu-label>Barrel auger control</dropdown-menu-label>
                        <dropdown-menu-separator />
                        <dropdown-menu-radio-group v-model="augerOneStatus">
                            <dropdown-menu-radio-item
                                v-for="status in Object.values(AugerStatusEnum)"
                                :key="status"
                                :value="status"
                                class="capitalize cursor-pointer"
                            >
                                {{ status }}
                                <Icon
                                    :name="pickAugerStatusIcon(status)"
                                    size="1em"
                                    class="ml-auto"
                                    :style="status === AugerStatusEnum.STOPPED ? 'color: red' : undefined"
                                />
                            </dropdown-menu-radio-item>
                        </dropdown-menu-radio-group>
                    </dropdown-menu-content>
                </dropdown-menu>

                <!-- Intake auger dropdown. -->
                <dropdown-menu>
                    <!-- Trigger button. -->
                    <dropdown-menu-trigger as-child>
                        <Button class="gap-3">
                            Intake:
                            <Badge
                                :variant="augerTwoStatus === AugerStatusEnum.FORWARD ? 'secondary' : 'destructive'"
                                class="capitalize"
                            >
                                {{ augerTwoStatus }}
                            </Badge>
                        </Button>
                    </dropdown-menu-trigger>

                    <!-- Dropdown content. -->
                    <dropdown-menu-content class="w-64">
                        <dropdown-menu-label>Intake auger control</dropdown-menu-label>
                        <dropdown-menu-separator />
                        <dropdown-menu-radio-group v-model="augerTwoStatus">
                            <dropdown-menu-radio-item
                                v-for="status in Object.values(AugerStatusEnum)"
                                :key="status"
                                :value="status"
                                class="capitalize cursor-pointer"
                            >
                                {{ status }}
                                <Icon
                                    :name="pickAugerStatusIcon(status)"
                                    size="1em"
                                    class="ml-auto"
                                    :style="status === AugerStatusEnum.STOPPED ? 'color: red' : undefined"
                                />
                            </dropdown-menu-radio-item>
                        </dropdown-menu-radio-group>
                    </dropdown-menu-content>
                </dropdown-menu>
            </div>
        </CardContent>
    </Card>
</template>
