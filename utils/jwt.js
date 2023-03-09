const jwt = require("jsonwebtoken");

const forgotPasswordVerifyJwt = (token, privateKey) => {
    return jwt.verify(token, privateKey,)
}

const forgotPasswordSignJwt = (claims, privateKey) => {
    return jwt.sign(claims, privateKey, {expiresIn: '1h'})
}

module.exports = {
    forgotPasswordVerifyJwt,
    forgotPasswordSignJwt
}
