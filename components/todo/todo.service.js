const TodoRepository = require('./todo.repository')

const all = async (req, res) => {
    try {
        const result = await TodoRepository.getAllTodo(req.user)
        res.success(result)
    } catch (e) {
        res.error(e)
    }
}

const addTodo = async (req, res) => {
    try {
        const [data, user] = [req.body, req.user]
        await TodoRepository.addTodo(data, user)
        res.success(data)
    } catch (e) {
        res.error("Görev eklenirken hata oluştu, Tekrar deneyiniz.")
    }
}

const deleteTodo = async (req, res) => {
    try {
        const [data, user] = [req.body, req.user]
        const rowCount = await TodoRepository.deleteTodo(data, user);
        if (rowCount === 1) {
            res.success(data)
        } else {
            res.error("Görev silinirken hata oluştu, Tekrar deneyiniz.");
        }
    } catch (e) {
        res.error(e)
    }
}

const updateTodoStatus = async (req, res) => {
    try {
        const [data, user] = [req.body, req.user]
        const rowCount = await TodoRepository.updateTodoStatus(data, user);
        if (rowCount === 1) {
            res.success(data)
        } else {
            res.error("Görev güncellenirken hata oluştu, Tekrar deneyiniz.");
        }
    } catch (e) {
        res.error(e)
    }
}

const updateTodo = async (req, res) => {
    try {
        const [data, user] = [req.body, req.user]
        const rowCount = await TodoRepository.updateTodo(data, user);
        if (rowCount > 0) {
            res.success(data)
        } else {
            res.error("Görev güncellenirken hata oluştu, Tekrar deneyiniz.");
        }
    } catch (e) {
        res.error("Görev güncellenirken hata oluştu, Tekrar deneyiniz.")
    }
}

module.exports = {
    all,
    addTodo,
    deleteTodo,
    updateTodoStatus,
    updateTodo
}