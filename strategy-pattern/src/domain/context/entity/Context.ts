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

    getCar(): Car {
        return this.car
    }
}

export enum WheaterType {
    SUNNY="sunny", CLOUDY="cloudy", RAINY="rainy"
}