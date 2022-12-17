import Car from "../../../context/entity/Car";
import Context from "../../../context/entity/Context";
import Tire from "../../entity/Tire";

export default interface TireSelector {
    validate(context: Context): boolean
    installTire(context: Context): Car
    tire: Tire
}