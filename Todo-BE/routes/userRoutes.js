const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/")
    .get(userController.getAllUsers)
    .post(userController.createUser);

router.route("/:id")    
    .get(userController.findUserByEmail, userController.getUser)
    .put(userController.findUserByEmail, userController.updateUser)
    .delete(userController.findUserByEmail, userController.deleteUser);

module.exports = router;