'use strict';
module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.Sequelize.Model
    class Todo extends Model { }
    Todo.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "Title cannot be null"
                },
                notEmpty: {
                    args: true,
                    msg: "Title cannot be empty"
                }
            }
        },
        description: DataTypes.STRING,
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    args: true,
                    msg: "UserId cannot be null"
                },
                notEmpty: {
                    args: true,
                    msg: "UserId cannot be empty"
                }
            }
        }
    }, { sequelize });
    Todo.associate = function (models) {
        Todo.belongsTo(models.User)
    };
    return Todo;
};