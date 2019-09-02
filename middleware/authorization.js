const { Todo } = require('../models')

module.exports = (req, res, next) => {
    const id = req.params.id
    Todo.findOne({
        where: {
            id: id,
            UserId: req.decode.id
        }
    }).then((todo) => {
        if (todo) {
            next()
        } else {
            next({ status: 403, message: "You have no authorization on this Todo" })
        }
    }).catch(next);
}