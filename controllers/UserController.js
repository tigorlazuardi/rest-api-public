const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { compareHash } = require('../helpers/bcryptjs')

class UserController {
    static create(req, res, next) {
        const { username, password, role } = req.body
        User.create({ username, password, role })
            .then((newUser) => {
                const { id, username, password, role } = newUser.dataValues
                const token = generateToken({ id, username, password, role })
                res.status(201).json({ username, token })
            }).catch(next);
    }

    static login(req, res, next) {
        const { username, password } = req.body
        User.findOne({
            where: {
                username
            }
        })
            .then((user) => {
                if (user) {
                    if (compareHash(password, user.password)) {
                        const payload = {
                            id: user.id,
                            username: user.username,
                            password: user.password
                        }
                        console.log(payload);
                        let token = generateToken(payload)
                        res.status(200).json({
                            username,
                            token
                        })
                    } else {
                        next({ status: 401, message: "Invalid Username/Password" })
                    }
                } else {
                    next({ status: 401, message: "Invalid Username/Password" })
                }
            }).catch(next);
    }
}

module.exports = UserController