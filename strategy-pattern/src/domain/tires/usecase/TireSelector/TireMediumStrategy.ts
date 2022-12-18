import { Service } from "typedi";
import Car from "../../../context/entity/Car";
import Context, { WheaterType } from "../../../context/entity/Context";
import Tire, { TireType } from "../../entity/Tire";
import TireSelector, { TireFactoryToken } from "./TireSelectorFactory";

@Service({ id: TireFactoryToken, multiple: true })
export default class TireMediumnStrategy implements TireSelector {
    tire: Tire = new Tire(TireType.MEDIUM)

    validate(context: Context): boolean {
        const { wheater, humidity, temperature, car } = context;
        if (
            (wheater == WheaterType.SUNNY || WheaterType.CLOUDY)
            && (humidity >= 20 && humidity < 60)
            && (temperature >= 35 && temperature < 50)
            && (car.position >= 1 && car.position < 15)
        ) {
            return true;
        }
        return false;
    }

    installTire(context: Context): Car {
        let { car } = context;
        car.tire = this.tire;
        return car;
    }

}