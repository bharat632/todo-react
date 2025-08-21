const express = require('express');
const todoController = require('../controller/todoController');

const router = express.Router();

router.route('/')
    .get(todoController.getAllTodo)
    .post(todoController.validateTodo, todoController.createTodo);

router.route('/:id')
    .get(todoController.findTodoById, todoController.getTodo)
    .put(todoController.findTodoById, todoController.updateTodo)
    .delete(todoController.findTodoById, todoController.deleteTodo);


module.exports = router;