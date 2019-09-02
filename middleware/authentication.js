const { verifyToken } = require('../helpers/jwt')

function authentication(req, res, next) {
    try {
        const decode = verifyToken(req.headers.token)
        req.decode = decode
        next()
    } catch (err) {
        next({ status: 401, message: err.message })
    }
}

module.exports = authentication