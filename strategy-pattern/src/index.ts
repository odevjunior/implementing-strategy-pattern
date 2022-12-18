import 'reflect-metadata';
import express, { Express, Request, Response } from "express"
import {Container} from 'typedi';
import TireUsecase from "./domain/tires/usecase/TireUsecase";
import Context from './domain/context/entity/Context';

const app: Express = express()
const port = 3000

app.use(express.json()) 

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.post('/select-tire', (req: Request, res: Response) => {
    const context: Context = <Context>req.body.context
    res.json(Container.get(TireUsecase).execute(context))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})