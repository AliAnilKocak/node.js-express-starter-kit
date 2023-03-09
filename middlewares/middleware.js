const jwt = require("jsonwebtoken")
const response = require("../utils/standartResponse")
require('dotenv').config()

module.exports = function (req, res, next) {
    const token = req.headers["x-access-token"] || req.headers["authorization"]
    if (!token) return res.status(401).send(response(false, "Invalid Token."))
    try {
        let user = {}
        user = jwt.verify(token, process.env.jwt_private_key, {ignoreExpiration: true})
        req.user = user
        next()
    } catch (ex) {
        res.status(401).send(response(false, "Invalid Token."))
    }
}