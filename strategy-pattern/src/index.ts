import 'reflect-metadata';
import express, { Express } from "express"
import TireController from './application/entrypoint/TireController';

export default class Main {
    private __app: Express
    private __port: number
    private __controllers: any[] = []

    constructor(app: Express, port: number) {
        this.__app = app;
        this.__port = port;
    }

    get app(): Express {
        return this.__app
    }

    addExtension(extension: any): Main {
        this.__app.use(extension);
        return this
    }

    addController(controller: any): Main {
        this.__controllers.push(controller)
        return this
    }

    start(message: string) {
        this.__app.listen(this.__port, () => console.log(message))
    }
}

const main = new Main(express(), 3000).addExtension(express.json())
main.addController(new TireController(main.app))
main.start("welcome to my app");