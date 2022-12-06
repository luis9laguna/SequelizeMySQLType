"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Dispositivo = connection_1.default.define('Dispositivo', {
    parrilla: {
        type: sequelize_1.DataTypes.STRING
    },
    sku: {
        type: sequelize_1.DataTypes.STRING
    },
    marca: {
        type: sequelize_1.DataTypes.STRING
    },
    plan: {
        type: sequelize_1.DataTypes.STRING
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING
    },
    camaleon: {
        type: sequelize_1.DataTypes.NUMBER
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    }
});
//# sourceMappingURL=parrilla.js.map