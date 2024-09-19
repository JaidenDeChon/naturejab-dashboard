import { ReactorSensorTypesEnum } from '~/lib/constants/reactor-sensor-types-enum';
import type { SensorData } from '~/lib/models/sensor-data';

export function getSensorDummyData(): SensorData[] {
    return [
        // Temperature sensors.
        { sensorName: 'Barrel temp (front)', sensorType: ReactorSensorTypesEnum.TEMPERATURE, sensorReading: 280 },
        { sensorName: 'Barrel temp (rear)', sensorType: ReactorSensorTypesEnum.TEMPERATURE, sensorReading: 278 },
        { sensorName: 'Condenser temp', sensorType: ReactorSensorTypesEnum.TEMPERATURE, sensorReading: 124 },
        // Pressure sensors.
        { sensorName: 'Intake pressure', sensorType: ReactorSensorTypesEnum.PRESSURE, sensorReading: 50 },
        { sensorName: 'Barrel pressure', sensorType: ReactorSensorTypesEnum.PRESSURE, sensorReading: 80 },
    ];
}

export function getTempSensorStreamDummyData() {
    return [
        { 'tPlus': 0, 'Barrel temp (front)': 25, 'Barrel temp (rear)': 25, 'Condensor temp': 25 },
        { 'tPlus': 1, 'Barrel temp (front)': 30, 'Barrel temp (rear)': 30, 'Condensor temp': 27 },
        { 'tPlus': 2, 'Barrel temp (front)': 40, 'Barrel temp (rear)': 38, 'Condensor temp': 29 },
        { 'tPlus': 3, 'Barrel temp (front)': 55, 'Barrel temp (rear)': 54, 'Condensor temp': 32 },
        { 'tPlus': 4, 'Barrel temp (front)': 70, 'Barrel temp (rear)': 72, 'Condensor temp': 35 },
        { 'tPlus': 5, 'Barrel temp (front)': 85, 'Barrel temp (rear)': 87, 'Condensor temp': 38 },
        { 'tPlus': 6, 'Barrel temp (front)': 100, 'Barrel temp (rear)': 102, 'Condensor temp': 42 },
        { 'tPlus': 7, 'Barrel temp (front)': 115, 'Barrel temp (rear)': 117, 'Condensor temp': 47 },
        { 'tPlus': 8, 'Barrel temp (front)': 130, 'Barrel temp (rear)': 132, 'Condensor temp': 52 },
        { 'tPlus': 9, 'Barrel temp (front)': 145, 'Barrel temp (rear)': 148, 'Condensor temp': 57 },
        { 'tPlus': 10, 'Barrel temp (front)': 160, 'Barrel temp (rear)': 161, 'Condensor temp': 63 },
        { 'tPlus': 11, 'Barrel temp (front)': 175, 'Barrel temp (rear)': 175, 'Condensor temp': 68 },
        { 'tPlus': 12, 'Barrel temp (front)': 190, 'Barrel temp (rear)': 188, 'Condensor temp': 72 },
        { 'tPlus': 13, 'Barrel temp (front)': 205, 'Barrel temp (rear)': 202, 'Condensor temp': 76 },
        { 'tPlus': 14, 'Barrel temp (front)': 220, 'Barrel temp (rear)': 215, 'Condensor temp': 80 },
        { 'tPlus': 15, 'Barrel temp (front)': 230, 'Barrel temp (rear)': 225, 'Condensor temp': 85 },
        { 'tPlus': 16, 'Barrel temp (front)': 235, 'Barrel temp (rear)': 232, 'Condensor temp': 90 },
        { 'tPlus': 17, 'Barrel temp (front)': 240, 'Barrel temp (rear)': 238, 'Condensor temp': 95 },
        { 'tPlus': 18, 'Barrel temp (front)': 245, 'Barrel temp (rear)': 243, 'Condensor temp': 100 },
        { 'tPlus': 19, 'Barrel temp (front)': 250, 'Barrel temp (rear)': 248, 'Condensor temp': 104 },
        { 'tPlus': 20, 'Barrel temp (front)': 255, 'Barrel temp (rear)': 253, 'Condensor temp': 108 },
        { 'tPlus': 21, 'Barrel temp (front)': 260, 'Barrel temp (rear)': 257, 'Condensor temp': 112 },
        { 'tPlus': 22, 'Barrel temp (front)': 265, 'Barrel temp (rear)': 262, 'Condensor temp': 115 },
        { 'tPlus': 23, 'Barrel temp (front)': 270, 'Barrel temp (rear)': 267, 'Condensor temp': 118 },
        { 'tPlus': 24, 'Barrel temp (front)': 275, 'Barrel temp (rear)': 272, 'Condensor temp': 120 },
        { 'tPlus': 25, 'Barrel temp (front)': 280, 'Barrel temp (rear)': 278, 'Condensor temp': 122 },
        { 'tPlus': 26, 'Barrel temp (front)': 280, 'Barrel temp (rear)': 278, 'Condensor temp': 123 },
        { 'tPlus': 27, 'Barrel temp (front)': 280, 'Barrel temp (rear)': 278, 'Condensor temp': 124 },
        { 'tPlus': 28, 'Barrel temp (front)': 280, 'Barrel temp (rear)': 278, 'Condensor temp': 124 },
        { 'tPlus': 29, 'Barrel temp (front)': 280, 'Barrel temp (rear)': 278, 'Condensor temp': 124 },
        { 'tPlus': 30, 'Barrel temp (front)': 280, 'Barrel temp (rear)': 278, 'Condensor temp': 124 },
    ];
}

export function getPressureSensorStreamDummyData() {
    return [
        { 'tPlus': 0, 'Intake pressure': 101325, 'Barrel pressure': 101325 },
        { 'tPlus': 1, 'Intake pressure': 85000, 'Barrel pressure': 90000 },
        { 'tPlus': 2, 'Intake pressure': 60000, 'Barrel pressure': 70000 },
        { 'tPlus': 3, 'Intake pressure': 35000, 'Barrel pressure': 50000 },
        { 'tPlus': 4, 'Intake pressure': 20000, 'Barrel pressure': 30000 },
        { 'tPlus': 5, 'Intake pressure': 10000, 'Barrel pressure': 15000 },
        { 'tPlus': 6, 'Intake pressure': 5000, 'Barrel pressure': 8000 },
        { 'tPlus': 7, 'Intake pressure': 2000, 'Barrel pressure': 3000 },
        { 'tPlus': 8, 'Intake pressure': 1000, 'Barrel pressure': 2000 },
        { 'tPlus': 9, 'Intake pressure': 500, 'Barrel pressure': 1000 },
        { 'tPlus': 10, 'Intake pressure': 300, 'Barrel pressure': 800 },
        { 'tPlus': 11, 'Intake pressure': 200, 'Barrel pressure': 600 },
        { 'tPlus': 12, 'Intake pressure': 150, 'Barrel pressure': 500 },
        { 'tPlus': 13, 'Intake pressure': 100, 'Barrel pressure': 400 },
        { 'tPlus': 14, 'Intake pressure': 80, 'Barrel pressure': 300 },
        { 'tPlus': 15, 'Intake pressure': 70, 'Barrel pressure': 250 },
        { 'tPlus': 16, 'Intake pressure': 60, 'Barrel pressure': 200 },
        { 'tPlus': 17, 'Intake pressure': 50, 'Barrel pressure': 180 },
        { 'tPlus': 18, 'Intake pressure': 50, 'Barrel pressure': 160 },
        { 'tPlus': 19, 'Intake pressure': 50, 'Barrel pressure': 140 },
        { 'tPlus': 20, 'Intake pressure': 50, 'Barrel pressure': 130 },
        { 'tPlus': 21, 'Intake pressure': 50, 'Barrel pressure': 120 },
        { 'tPlus': 22, 'Intake pressure': 50, 'Barrel pressure': 110 },
        { 'tPlus': 23, 'Intake pressure': 50, 'Barrel pressure': 100 },
        { 'tPlus': 24, 'Intake pressure': 50, 'Barrel pressure': 90 },
        { 'tPlus': 25, 'Intake pressure': 50, 'Barrel pressure': 80 },
        { 'tPlus': 26, 'Intake pressure': 50, 'Barrel pressure': 80 },
        { 'tPlus': 27, 'Intake pressure': 50, 'Barrel pressure': 80 },
        { 'tPlus': 28, 'Intake pressure': 50, 'Barrel pressure': 80 },
        { 'tPlus': 29, 'Intake pressure': 50, 'Barrel pressure': 80 },
        { 'tPlus': 30, 'Intake pressure': 50, 'Barrel pressure': 80 },
    ];
}
