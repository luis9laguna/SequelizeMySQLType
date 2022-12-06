import dotenv from 'dotenv';
import { Sequelize } from 'sequelize'
dotenv.config();

const dbName: string = process.env.DB_NAME ?? 'test'
const user: string = process.env.DB_USER ?? 'root'
const password: string = process.env.DB_PASSWORD ?? ''
const host: string = process.env.DB_HOST ?? 'localhost'

const db = new Sequelize(dbName, user, password, {
    host,
    dialect: 'mysql'
});


export default db;