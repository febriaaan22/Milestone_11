const { Router } = require('express')
const { register, login } = require ('../service/taylorService.js')

const taylorRouter = Router()

taylorRouter.post('/register', register)
taylorRouter.post('/login', login)


module.exports = taylorRouter