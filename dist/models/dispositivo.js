"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Dispositivo = connection_1.default.define('Dispositivo', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    parrilla: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sku: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    plan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    camaleon: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
exports.default = Dispositivo;
//# sourceMappingURL=dispositivo.js.map