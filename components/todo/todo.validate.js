const Joi = require('joi');
const validateCheck = require("./../../utils/validateCheck");

const addTodoValidate = async function (req, res, next) {
    req.validateSchema = Joi.object({
        title: Joi.string().required(),
        priority: Joi.string().valid('low', 'medium', 'high').required(),
        date: Joi.string().required(),
    });
    await validateCheck(req, res, next)
}

module.exports = {
    addTodoValidate,
    updateTodoValidate
}