const router = require('express').Router()
const todoMainRoute = require('./components/todo/todo.route.js')
const authMainRoute = require('./components/auth/auth.route')
const auth = require('./middlewares/middleware')

router.use('/test', todoMainRoute)
router.use('/auth', authMainRoute)

module.exports = router