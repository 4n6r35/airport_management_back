import express, { Application } from "express";
import { fireStore } from "../firebase/config";
import cors from "cors"
import path from "path";
import { environment } from "../environments/env";
import { registreRoutes } from "../routes/registre.routes";



export class Server {
    private app: Application;
    private paths = {
        urlPath: '/api/v1'
    }

    constructor() {
        this.app = express();
        this.middlewares();
        this.firestoreConnection();
        this.routes();
    }

    async firestoreConnection() {
        await fireStore
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.paths.urlPath, registreRoutes)
    }

    public listen() {
        this.app.listen(environment.REST_PORT, () => {
            console.log(`Server running on ${environment.REST_PORT}` );
        })
    }
}

export default Server