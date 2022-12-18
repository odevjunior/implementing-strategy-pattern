import { Service } from "typedi";
import { Express, Response, Request } from "express";
import { Container } from 'typedi';
import Context from '../../domain/context/entity/Context';
import TireUsecase from "../../domain/tires/usecase/TireUsecase";

@Service()
export default class TireController {
    private __app: Express

    constructor(app: Express) {
        this.__app = app

        this.selectTire()
    }

    selectTire() {
        this.__app.post('/select-tire', (req: Request, res: Response) => {
            const context: Context = <Context>req.body.context
            res.json(Container.get(TireUsecase).execute(context))
        })
    }
}