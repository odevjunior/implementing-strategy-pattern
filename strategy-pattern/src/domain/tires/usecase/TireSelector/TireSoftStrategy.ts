import { Service } from "typedi";
import Car from "../../../context/entity/Car";
import Context, {WheaterType} from "../../../context/entity/Context";
import Tire, {TireType} from "../../entity/Tire";
import TireSelector, { TireFactoryToken } from "./TireSelectorFactory";

@Service({ id: TireFactoryToken, multiple: true })
export default class TireSoftStrategy implements TireSelector {
    tire: Tire = new Tire(TireType.SOFT)

    validate(context: Context): boolean {
        const {wheater, humidity, temperature} = context;
        const car: Car = <Car>context.car
        console.log(car)
        if(
            (wheater == WheaterType.SUNNY || WheaterType.CLOUDY) 
            && (humidity > 20 && humidity < 50) 
            && temperature < 35 
            && car.position < 8
        ) {
            return true;
        }
        return false;
    }

    installTire(context: Context): Car {
        let {car} = context;
        car.tire = this.tire;
        return car;
    }

}