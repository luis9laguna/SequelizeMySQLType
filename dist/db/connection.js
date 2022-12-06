"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const dbName = (_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : 'mantenedor_parrillas';
const user = (_b = process.env.DB_USER) !== null && _b !== void 0 ? _b : 'root';
const password = (_c = process.env.DB_PASSWORD) !== null && _c !== void 0 ? _c : '';
const host = (_d = process.env.DB_HOST) !== null && _d !== void 0 ? _d : 'localhost';
const db = new sequelize_1.Sequelize(dbName, user, password, {
    host,
    dialect: 'mysql'
});
exports.default = db;
//# sourceMappingURL=connection.js.map