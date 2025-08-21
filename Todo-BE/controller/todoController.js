const todoSchema = require("../models/todoSchema");
const { sequelize } = require("../util/database");

exports.validateTodo = async(req, res, next)=>{
    const { title, description, userId } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({
            status: "error",
            message: "Title is required and must be a non-empty string."
        });
    }

    if (!userId || typeof userId !== 'number') {
        return res.status(400).json({
            status: "error",
            message: "User ID is required and must be a number."
        });
    }

    next();
}

exports.findTodoById = async(req, res, next)=>{
    const id = req.params.id;
    const todo = await todoSchema.findByPk(id);

    if(!todo){
        return res.status(404).json({
            status: "error",
            message: "Todo not found"
        });
    }

    req.todo = todo; // Attach the found todo to the request object
    next();
}
exports.createTodo = async(req, res)=>{
    try{
        const { title, description, userId } = req.body;
        await todoSchema.create({
            title: title,
            description: description || "No Description",
            userId: userId
        }).then((todo => {
            return res.status(201).json({
                status: "success",
                message: "Todo created successfully",
                content: todo
            });
        })).catch(err => {
            return res.status(400).json({
                status: "error",
                message: err.message || err
            });
        });
    }catch(err){
        return res.status(500).json({
            status: "error",
            message: err.message || err
        })
    }
}

exports.getAllTodo = async(req, res)=>{
    try{
        await todoSchema.findAll()
        .then((todos)=>{
            return res.status(200).json({
                status: "success",
                message: "Todos fetched successfully",
                content: todos
            })
        }).catch(err => {
            return res.status(404).json({
                status: "error",
                message: err.message || err
            });
        });
    }catch(err){
        return res.status(500).json({
            status: "error",
            message: err.message || err
        });
    }
}

exports.getTodo = async(req, res)=>{
    try{
        const todo = req.todo; // Get the todo from the request object
        return res.status(200).json({
            status: "success",
            message: "Todo fetched successfully",
            content: todo
        })
    }catch(err){
        return res.status(500).json({
            status: "error",
            message: err.message || err
        });
    }
}

exports.updateTodo = async(req, res)=>{
    try{
        const todo  = req.todo; // Get the todo from the request object
        const updatedTodo = {
            title: req.body.title || todo.title,
            description: req.body.description || todo.description,
            userId: req.body.userId || todo.userId
        }

        Object.assign(todo, updatedTodo);

        await todo.save()
        .then((todo)=>{
            return res.status(200).json({
                status: "success",
                message: "Todo updated successfully",
                content: todo
            });
        }).catch(err => {   
            return res.status(400).json({
                status: "error",
                message: err.message || err
            });
        })
    }catch(err){
        return res.status(500).json({
            status: "error",
            message: err.message || err
        });
    }
}

exports.deleteTodo = async(req, res)=>{
    try{
        const todo = req.todo; // Get the todo from the request object
        await todo.destroy()
        .then(()=>{
            return res.status(200).json({
                status: "success",
                message: "Todo deleted successfully"
            });
        }).catch(err => {
            return res.status(400).json({
                status: "error",
                message: err.message || err
            });
        })
    }catch(err){
        return res.status(500).json({
            status: "error",
            message: err.message || err
        });
    }
}