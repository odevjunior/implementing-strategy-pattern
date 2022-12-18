import { Container, Service } from 'typedi';
import TireSoftStrategy from './TireSelector/TireSoftStrategy';
import TireMediumnStrategy from './TireSelector/TireMediumStrategy';
import TireHardStrategy from './TireSelector/TireHardStrategy';
import TireSelectorFactory, { TireFactoryToken } from './TireSelector/TireSelectorFactory';
import Context from '../../context/entity/Context';
import Car from '../../context/entity/Car';

Container.import([TireSoftStrategy, TireMediumnStrategy, TireHardStrategy])

@Service()
export default class TireUsecase {
    private factories: TireSelectorFactory[];

    constructor() {
        this.factories = Container.getMany(TireFactoryToken)
    }

    execute(context: any):Car {
        return this.factories.filter(it => it.validate(context)).map(it => it.installTire(context))[0]
    }
}   