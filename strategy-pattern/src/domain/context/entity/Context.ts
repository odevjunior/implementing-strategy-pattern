import Car from "./Car";

export default class Context {
    public wheater: WheaterType
    public humidity: number
    public temperature: number
    public car: Car

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