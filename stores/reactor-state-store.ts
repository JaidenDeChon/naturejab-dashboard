import { StoreNamesEnum } from '~/lib/constants/store-names-enum';
import { AugerStatusEnum } from '~/lib/constants/auger-status-enum';
import { ReactorOverallStatusEnum } from '~/lib/constants/reactor-overall-status-enum';
import { getMagnetronDummyData } from '~/mocks/magnetron-dummy-data';

export const useReactorStateStore = defineStore(StoreNamesEnum.REACTORE_STATE_STORE, () => {
    const _masterPowerStatus = ref<boolean>(false);
    const _intakeAugerStatus = ref<AugerStatusEnum>(AugerStatusEnum.STOPPED);
    const _barrelAugerStatus = ref<AugerStatusEnum>(AugerStatusEnum.STOPPED);
    const _magnetronArrayPowerStatus = ref<boolean[]>(getMagnetronDummyData());
    const _reactorOverallStatus = ref<ReactorOverallStatusEnum>(ReactorOverallStatusEnum.NOT_RUNNING);

    const masterPowerStatus = computed(() => _masterPowerStatus.value);
    const intakeAugerStatus = computed(() => _intakeAugerStatus.value);
    const barrelAugerStatus = computed(() => _barrelAugerStatus.value);
    const magnetronArrayPowerStatus = computed(() => _magnetronArrayPowerStatus.value);
    const reactorOverallStatus = computed(() => _reactorOverallStatus.value);

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
    }

    function stopReactor(): void {
        _masterPowerStatus.value = false;
        setAllMagnetrons(false);
        stopIntakeAuger();
        stopBarrelAuger();
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
        magnetronArrayPowerStatus,
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
