const { Todo } = require('../models')

class TodoController {
    static getAll(req, res, next) {
        const id = req.decode.id
        Todo.findAll({
            where: {
                UserId: id
            }
        })
            .then((result) => {
                res.status(200).json(result)
            }).catch(next)
    }

    static getOne(req, res, next) {
        const id = req.params.id
        Todo.findByPk(id)
            .then((result) => {
                res.status(200).json(result)
            }).catch(next)
    }

    static create(req, res, next) {
        const { title, description } = req.body
        const UserId = req.decode.id
        Todo.create({ title, description, UserId })
            .then((result) => {
                res.status(201).json(result)
            }).catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params
        Todo.destroy({
            where: {
                id
            }
        })
            .then((result) => {
                res.status(200).json({
                    numberOfRowsDeleted: result
                })
            }).catch(next)
    }

    static update(req, res, next) {
        const { id } = req.params
        const { title, description } = req.body
        Todo.update({ title, description }, {
            where: {
                id
            }
        })
            .then((result) => {
                res.status(200).json({
                    AffectedRows: result
                })
            }).catch(next)
    }

    static patch(req, res, next) {
        const { id } = req.params
        const { title, description } = req.body
        if (title) {
            Todo.update({ title }, {
                where: {
                    id
                }
            })
                .then((result) => {
                    res.status(200).json({
                        AffectedRows: result
                    })
                }).catch(next)
        } else if (description) {
            Todo.update({ description }, { where: { id } })
                .then((result) => {
                    res.status(200).json({
                        AffectedRows: result
                    })
                }).catch(next)
        } else {
            res.status(400).json({
                message: "Bad Request"
            })
        }
    }
}

module.exports = TodoController