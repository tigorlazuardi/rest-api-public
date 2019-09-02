'use strict';
const { generateHash } = require('../helpers/bcryptjs')

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class User extends Model { }
    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    args: true,
                    msg: "username cannot be null"
                },
                notEmpty: {
                    args: true,
                    msg: "username cannot be empty"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Password cannot be null"
                },
                notEmpty: {
                    args: true,
                    msg: "Password cannot be empty"
                },
                len: {
                    args: [8, 32],
                    msg: "Password length is between 8 and 32 characters"
                }
            }
        }
    }, {
            sequelize,
            hooks: {
                beforeCreate: (User) => User.password = generateHash(User.password)
            }
        });
    User.associate = function (models) {
        User.hasMany(models.Todo)
    };
    return User;
};