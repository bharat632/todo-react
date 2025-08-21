const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

function handleAssociations(){
    const userSchema = require("../models/userSchema");
    const todoSchema = require("../models/todoSchema");

    userSchema.hasMany(todoSchema, {foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    todoSchema.belongsTo(userSchema, {foreignKey: 'userId', onUpdate: 'CASCADE'});
}

const connection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
        await handleAssociations();
        // await sequelize.sync();
        await sequelize.sync({alter: true});
        // await sequelize.sync({force: true});
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { connection, sequelize };