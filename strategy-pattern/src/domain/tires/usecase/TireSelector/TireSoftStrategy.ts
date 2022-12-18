import { Service } from "typedi";
import Car from "../../../context/entity/Car";
import Context, {WheaterType} from "../../../context/entity/Context";
import Tire, {TireType} from "../../entity/Tire";
import TireSelector, { TireFactoryToken } from "./TireSelectorFactory";

@Service({ id: TireFactoryToken, multiple: true })
export default class TireSoftStrategy implements TireSelector {
    tire: Tire = new Tire(TireType.SOFT)

    validate(context: Context): boolean {
        const {wheater, humidity, temperature, car} = context;
        if(
            (wheater == WheaterType.SUNNY || WheaterType.CLOUDY) 
            && (humidity > 20 && humidity < 50) 
            && temperature < 35 
            && car.getPosition() < 8
        ) {
            return true;
        }
        return false;
    }

    installTire(context: Context): Car {
        let {car} = context;
        car.setTire(this.tire);
        return car;
    }

}