export default class Tire {
    private type: TireType

    constructor(type: TireType){
        this.type = type;
    }
}

export enum TireType {
    SOFT="soft",
    MEDIUM="medium", 
    HARD="hard", 
    INTERMEDIATED="intermediated", 
    WET="wet"
}