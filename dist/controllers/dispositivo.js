"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDispositivo = exports.updateDispositivo = exports.postDispositivo = exports.getDispositivo = exports.getDispositivos = void 0;
const dispositivo_1 = __importDefault(require("../models/dispositivo"));
const getDispositivos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dispositivos = yield dispositivo_1.default.findAll();
        res.json({
            ok: true,
            dispositivos
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error inesperado'
        });
    }
});
exports.getDispositivos = getDispositivos;
const getDispositivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dispositivo = yield dispositivo_1.default.findByPk(id);
        if (!dispositivo) {
            return res.status(404).json({ ok: true, msg: `No existe un dispositivo con el ${id}` });
        }
        res.json({ ok: true, dispositivo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error inesperado'
        });
    }
});
exports.getDispositivo = getDispositivo;
const postDispositivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const existDispositivo = yield dispositivo_1.default.findOne({
            where: {
                sku: body.sku
            }
        });
        if (existDispositivo) {
            return res.status(400).json({
                ok: false,
                message: 'Ya existe un dispositivo con ese SKU'
            });
        }
        const newDispositivo = yield dispositivo_1.default.create(body);
        res.json({
            ok: true,
            newDispositivo
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error inesperado'
        });
    }
});
exports.postDispositivo = postDispositivo;
const updateDispositivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { body } = req;
        const dispositivo = yield dispositivo_1.default.findByPk(id);
        if (!dispositivo) {
            return res.status(400).json({
                ok: false,
                message: `No existe un dispositivo con el id ${id}`
            });
        }
        let { sku } = body, data = __rest(body, ["sku"]);
        yield dispositivo.update(data);
        res.json({
            ok: true,
            dispositivo
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error inesperado'
        });
    }
});
exports.updateDispositivo = updateDispositivo;
const deleteDispositivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dispositivo = yield dispositivo_1.default.findByPk(id);
        if (!dispositivo) {
            return res.status(400).json({
                ok: false,
                message: `No existe un dispositivo con el id ${id}`
            });
        }
        yield dispositivo.destroy();
        res.json({
            ok: true,
            message: 'Dispositivo eliminado'
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error inesperado'
        });
    }
});
exports.deleteDispositivo = deleteDispositivo;
//# sourceMappingURL=dispositivo.js.map