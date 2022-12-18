import Tire from "../../tires/entity/Tire"

export default class Car {
    private __scuderia: string
    private __tire: Tire
    private __driver: string
    private __position: number

    constructor(scuderia: string, tire: Tire, driver: string, position: number) {
        this.__scuderia = scuderia;
        this.__driver = driver;
        this.__tire = tire;
        this.__position = position;
    }

    public get tire(): Tire {
        return this.__tire
    }

    public set tire(tire: Tire) {
        this.__tire = tire;
    }

    public get position(): number {
        return this.position
    }
}