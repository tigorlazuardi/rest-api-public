const jwt = require('jsonwebtoken')

const SECRET_JWT = process.env.SECRET_JWT

/**
 * 
 * @param {object} payload Object Literal
 */
function generateToken(payload) {
    return jwt.sign(payload, SECRET_JWT)
}

/**
 * 
 * @param {String} token HACM algorithm token
 */
function verifyToken(token) {
    return jwt.verify(token, SECRET_JWT)
}

module.exports = {
    generateToken, verifyToken
};
