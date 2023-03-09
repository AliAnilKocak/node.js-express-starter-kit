const { pool } = require('../../utils/init')

const getAllTodo = async user => {
    const result = await pool.query({
        text: `select 'DBden veri getirildi'`
    })
    return result.rows
}

module.exports = {
    getAllTodo
}