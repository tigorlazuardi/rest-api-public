const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

/**
 * 
 * @param {String} password - Any string
 * @returns hash of password
 */
const generateHash = (password) => bcrypt.hashSync(password, salt)

/**
 * 
 * @param {String} password 
 * @param {String} hashedPassword 
 * @returns True or false
 */
const compareHash = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword)

module.exports = {
    generateHash, compareHash
};
