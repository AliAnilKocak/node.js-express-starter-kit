const {pool} = require('../../utils/init')
const {md5} = require("pg/lib/utils");

const getUserByEmailAndPassword = async (email, password) => {
    try {
        const result = await pool.query(
            `select id,
                    username,
                    email,
                    role_id,
                    image_url
             from users
             where email = $1
               and password = $2`,
            [email, md5(password)]
        )
        return result.rows[0]
    } catch (e) {
        throw e
    }
}

module.exports = {
    getUserByEmailAndPassword
}