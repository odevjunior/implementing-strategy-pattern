import Car from "../../../context/entity/Car";
import Context, { WheaterType } from "../../../context/entity/Context";
import Tire, { TireType } from "../../entity/Tire";
import TireSelector from "./TireSelector";

export default class TireSoftStrategy implements TireSelector {
    tire: Tire = new Tire(TireType.HARD)

    validate(context: Context): boolean {
        const { wheater, humidity, temperature, car } = context;
        if (
            (wheater == WheaterType.SUNNY || WheaterType.CLOUDY)
            && (humidity > 50 && humidity < 80)
            && (temperature > 35 && temperature < 50)
            && (car.getPosition() > 16 && car.getPosition() < 20)
        ) {
            return true;
        }
        return false;
    }

    installTire(context: Context): Car {
        let { car } = context;
        car.setTire(this.tire);
        return car;
    }

}