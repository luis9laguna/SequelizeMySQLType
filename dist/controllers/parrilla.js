"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteParrilla = exports.updateParrilla = exports.postParrilla = exports.getParrilla = exports.getParrillas = void 0;
const getParrillas = (req, res) => {
    res.json({
        msg: 'getParrillas'
    });
};
exports.getParrillas = getParrillas;
const getParrilla = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getParrilla',
        id
    });
};
exports.getParrilla = getParrilla;
const postParrilla = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postParrilla',
        body
    });
};
exports.postParrilla = postParrilla;
const updateParrilla = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'postParrilla',
        body
    });
};
exports.updateParrilla = updateParrilla;
const deleteParrilla = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'postParrilla',
        id
    });
};
exports.deleteParrilla = deleteParrilla;
//# sourceMappingURL=parrilla.js.map