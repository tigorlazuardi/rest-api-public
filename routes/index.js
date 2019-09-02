const Router = require('express').Router()
const todoRoute = require('./todoRoute')
const userRoute = require('./userRoute')

Router.get('/', (req, res) => {
    res.status(200).json({
        message: "connected"
    })
})

Router.use('/api/todos', todoRoute)
Router.use('/api/', userRoute)

module.exports = Router