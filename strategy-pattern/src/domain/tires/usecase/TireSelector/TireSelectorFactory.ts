import { Token } from "typedi";
import Car from "../../../context/entity/Car";
import Context from "../../../context/entity/Context";
import Tire from "../../entity/Tire";

export default interface TireSelectorFactory {
    validate(context: Context): boolean
    installTire(context: Context): Car
    tire: Tire
}

export const TireFactoryToken = new Token<TireSelectorFactory>('tires')