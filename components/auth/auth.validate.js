const Joi = require('joi');
const validateCheck = require("./../../utils/validateCheck");

const login = async function (req, res, next) {
    req.validateSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).alphanum().required(),
    });
    await validateCheck(req, res, next)
}



module.exports = {
    login
}