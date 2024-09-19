import { StoreNamesEnum } from '~/lib/constants/store-names-enum';
import { AugerStatusEnum } from '~/lib/constants/auger-status-enum';
import { ReactorOverallStatusEnum } from '~/lib/constants/reactor-overall-status-enum';
import { getMagnetronDummyData } from '~/mocks/magnetron-dummy-data';
import {
    getSensorDummyData,
    getTempSensorStreamDummyData,
    getPressureSensorStreamDummyData,
} from '~/mocks/sensor-dummy-data';
import type { SensorData } from '~/lib/models/sensor-data';

export const useReactorStateStore = defineStore(StoreNamesEnum.REACTORE_STATE_STORE, () => {
    const _masterPowerStatus = ref<boolean>(false);
    const _intakeAugerStatus = ref<AugerStatusEnum>(AugerStatusEnum.STOPPED);
    const _barrelAugerStatus = ref<AugerStatusEnum>(AugerStatusEnum.STOPPED);
    const _magnetronArrayPowerStatus = ref<boolean[]>(getMagnetronDummyData());
    const _reactorOverallStatus = ref<ReactorOverallStatusEnum>(ReactorOverallStatusEnum.NOT_RUNNING);
    const _sensorsArray = ref<SensorData[]>(getSensorDummyData());
    const _sensorReadingStreamTemperature = ref(getTempSensorStreamDummyData());
    const _sensorReadingStreamPressure = ref(getPressureSensorStreamDummyData());
    const _reactorTimeLimit = ref<number>(90);
    const _reactorTimeElapsed = ref<number>(0);

    const masterPowerStatus = computed(() => _masterPowerStatus.value);
    const intakeAugerStatus = computed(() => _intakeAugerStatus.value);
    const barrelAugerStatus = computed(() => _barrelAugerStatus.value);
    const magnetronArrayPowerStatus = computed(() => _magnetronArrayPowerStatus.value);
    const reactorOverallStatus = computed(() => _reactorOverallStatus.value);
    const sensorsArray = computed(() => _sensorsArray.value);
    const sensorReadingStreamTemperature = computed(() => _sensorReadingStreamTemperature.value);
    const sensorReadingStreamPressure = computed(() => _sensorReadingStreamPressure.value);
    const reactorTimeLimit = computed(() => _reactorTimeLimit.value);
    const reactorTimeElapsed = computed(() => _reactorTimeElapsed.value);

    // Public setters and methods.

    // Intake auger.

    function stopIntakeAuger(): void {
        _intakeAugerStatus.value = AugerStatusEnum.STOPPED;
    }

    function intakeAugerForward(): void {
        _intakeAugerStatus.value = AugerStatusEnum.FORWARD;
    }

    function intakeAugerReverse(): void {
        _intakeAugerStatus.value = AugerStatusEnum.REVERSE;
    }

    // Barrel auger.

    function stopBarrelAuger(): void {
        _barrelAugerStatus.value = AugerStatusEnum.STOPPED;
    }

    function barrelAugerForward(): void {
        _barrelAugerStatus.value = AugerStatusEnum.FORWARD;
    }

    function barrelAugerReverse(): void {
        _barrelAugerStatus.value = AugerStatusEnum.REVERSE;
    }

    // Magnetrons.

    function setMagnetronArrayPowerStatus(newValue: boolean[]): void {
        _magnetronArrayPowerStatus.value = [...newValue];
    }

    // Reactor start/stop.

    function startReactor(): void {
        _masterPowerStatus.value = true;
        setAllMagnetrons(true);
        intakeAugerForward();
        barrelAugerForward();
        _reactorTimeElapsed.value = 33;
    }

    function stopReactor(): void {
        _masterPowerStatus.value = false;
        setAllMagnetrons(false);
        stopIntakeAuger();
        stopBarrelAuger();
        _reactorTimeElapsed.value = 0;
    }

    function killPowerImmediately(): void {
        // Master power.
        _masterPowerStatus.value = false;
        // Magnetrons.
        for (let i = 0; i < _magnetronArrayPowerStatus.value.length; i++) {
            _magnetronArrayPowerStatus.value[i] = false;
        }
        // Augers.
        stopIntakeAuger();
        stopBarrelAuger();
    }

    // Private functions / utility methods.

    function setAllMagnetrons(newValue: boolean): void {
        // Create a copy of the current array
        const currentArray = [..._magnetronArrayPowerStatus.value];

        // Iterate over each element in the array
        currentArray.forEach((_, index) => {
            setTimeout(() => {
                currentArray[index] = newValue;
                setMagnetronArrayPowerStatus([...currentArray]);
            }, index * 100);
        });
    }

    return {
        masterPowerStatus,
        reactorOverallStatus,
        intakeAugerStatus,
        barrelAugerStatus,
        sensorsArray,
        magnetronArrayPowerStatus,
        sensorReadingStreamTemperature,
        sensorReadingStreamPressure,
        reactorTimeLimit,
        reactorTimeElapsed,
        startReactor,
        stopReactor,
        killPowerImmediately,
        stopIntakeAuger,
        intakeAugerForward,
        intakeAugerReverse,
        stopBarrelAuger,
        barrelAugerForward,
        barrelAugerReverse,
        setMagnetronArrayPowerStatus,
    };
});
