"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const check_params_1 = __importDefault(require("../middlewares/check-params"));
const dispositivo_1 = require("../controllers/dispositivo");
const router = (0, express_1.Router)();
router.get('/', dispositivo_1.getDispositivos);
router.get('/:id', dispositivo_1.getDispositivo);
router.post('/', [
    (0, express_validator_1.check)('parrilla', 'Parrilla es requerido'),
    (0, express_validator_1.check)('sku', 'SKU es requerido'),
    (0, express_validator_1.check)('marca', 'Marca es requerido'),
    (0, express_validator_1.check)('modelo', 'Modelo es requerido'),
    (0, express_validator_1.check)('plan', 'Plan es requerido'),
    (0, express_validator_1.check)('imagen', 'Imagen es requerido'),
    (0, express_validator_1.check)('camaleon', 'Camaleon es requerido'),
    (0, express_validator_1.check)('url', 'URL es requerido'),
    check_params_1.default
], dispositivo_1.postDispositivo);
router.put('/:id', [
    (0, express_validator_1.check)('parrilla', 'Parrilla es requerido'),
    (0, express_validator_1.check)('marca', 'Marca es requerido'),
    (0, express_validator_1.check)('modelo', 'Modelo es requerido'),
    (0, express_validator_1.check)('plan', 'Plan es requerido'),
    (0, express_validator_1.check)('imagen', 'Imagen es requerido'),
    (0, express_validator_1.check)('camaleon', 'Camaleon es requerido'),
    (0, express_validator_1.check)('url', 'URL es requerido'),
    check_params_1.default
], dispositivo_1.updateDispositivo);
router.delete('/:id', dispositivo_1.deleteDispositivo);
exports.default = router;
//# sourceMappingURL=dispositivo.js.map