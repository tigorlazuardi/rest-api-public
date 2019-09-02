const Router = require('express').Router()
const UserController = require('../controllers/UserController')

Router.post('/signup', UserController.create)
Router.post('/signin', UserController.login)

module.exports = Router