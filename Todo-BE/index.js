const express = require("express");
const dotenv = require("dotenv");  
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config({path: "./config.env"});
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/todos", todoRoutes);


module.exports = app;