import express, { Application } from 'express'
import routerUser from '../routes/user';
import cors from 'cors';
import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        user: '/api/user'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "4000";

        this.dbConnection();
        this.middlewares();
        this.routes();
    }


    async dbConnection() {
        try {
            await db.authenticate();
            await db.sync();
            console.log('Database Online')
        } catch (error) {
            console.log(error)
        }
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Server in ' + this.port)
        })
    }

    routes() {
        this.app.use(this.apiPaths.user, routerUser)
    }
}


export default Server;