const AuthRepository = require('./auth.repository')
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const data = req.body
    try {
        let user = await AuthRepository.getUserByEmailAndPassword(data.email, data.password)

        if (user) {
            const access_token = jwt.sign(user, process.env.jwt_private_key, {expiresIn: '1d'})
            const refresh_token = jwt.sign(user, process.env.jwt_private_key_refresh, {expiresIn: '7d'})
            return res.success(
                {
                    "accessToken": access_token,
                    "refreshToken": refresh_token,
                    ...user
                }
            )
        } else {
            return res.error("E-mail or password is wrong")
        }
    } catch (e) {
        console.log("login catch; " + e.message)
        return res.error("E-mail or password is wrong")
    }
}

module.exports = {
    login
}