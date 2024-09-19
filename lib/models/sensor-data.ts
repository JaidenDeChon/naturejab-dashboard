import type { ReactorSensorTypesEnum } from '~/lib/constants/reactor-sensor-types-enum.js';

export interface SensorData {
    sensorName: string;
    sensorType: ReactorSensorTypesEnum;
    sensorReading: number;
};
