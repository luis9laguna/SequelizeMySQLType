"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parrilla_1 = require("../controllers/parrilla");
const router = (0, express_1.Router)();
router.get('/', parrilla_1.getParrillas);
router.get('/:id', parrilla_1.getParrilla);
router.post('/', parrilla_1.postParrilla);
router.put('/:id', parrilla_1.updateParrilla);
router.delete('/:id', parrilla_1.deleteParrilla);
exports.default = router;
//# sourceMappingURL=parrilla.js.map