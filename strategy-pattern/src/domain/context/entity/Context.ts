import Car from "./Car";

export default class Context {
    wheater: WheaterType
    humidity: number
    temperature: number
    car: Car

    constructor(wheater: WheaterType, humidity: number, temperature: number, car: Car) {
        this.wheater = wheater;
        this.car = car;
        this.humidity = humidity;
        this.temperature = temperature;
    }
}

export enum WheaterType {
    SUNNY, CLOUDY, RAINY
}