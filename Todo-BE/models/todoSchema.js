const { DataTypes } = require('sequelize');
const { sequelize } = require("../util/database");

const userSchema = require('./userSchema');

const todoSchema = sequelize.define('Todo', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        }
    },
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: userSchema,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
},
{
    tableName: 'todos',
    timestamps: true,
})

module.exports = todoSchema;