import Tire from "../../tires/entity/Tire"

export default class Car {
    private scuderia: string
    private tire: Tire
    private driver: string
    private position: number

    constructor(scuderia: string, tire: Tire, driver: string, position: number) {
        this.scuderia = scuderia;
        this.driver = driver;
        this.tire = tire;
        this.position = position;
    }

    getTire(): Tire {
        return this.tire
    }

    setTire(tire: Tire): void {
        this.tire = tire;
    }

    getPosition(): number {
        return this.position
    }
}