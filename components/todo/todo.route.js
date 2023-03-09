const router = require('express').Router()
const {all} = require('./todo.service')

router.get('/', all)

module.exports = router