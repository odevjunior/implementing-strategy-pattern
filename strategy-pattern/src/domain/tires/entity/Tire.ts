export default class Tire {
    private type: TireType

    constructor(type: TireType){
        this.type = type;
    }
}

export enum TireType {
    SOFT, MEDIUM, HARD, INTERMEDIATED, WET
}