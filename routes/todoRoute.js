const Router = require('express').Router()
const TodoController = require('../controllers/TodoController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

Router.use(authentication)
Router.get('/', TodoController.getAll)
Router.get('/:id', authorization, TodoController.getOne)
Router.post('/', TodoController.create)
Router.delete('/:id', authorization, TodoController.delete)
Router.put('/:id', authorization, TodoController.update)
Router.patch('/:id', authorization, TodoController.patch)


module.exports = Router