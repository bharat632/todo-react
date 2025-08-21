const { sequelize } = require('../util/database');
const { DataTypes } = require('sequelize');

const userSchema = sequelize.define('User', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: DataTypes.BIGINT,
        allowNull: true,
        validate: {
            is: /^[0-9]{10}$/ // Validates a 10-digit mobile number
        }
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Male'
    }
},
{
    timestamps: true,
    tableName: 'users',
    indexes: [
        {
            unique: true,
            fields: ['email']
        }
    ]
})

module.exports = userSchema;