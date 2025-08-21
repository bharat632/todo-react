const userSchema = require("../models/userSchema");
const todoSchema = require("../models/todoSchema");

const express = require("express");
const { sequelize } = require("../util/database");
const bcrypt = require("bcrypt");

exports.findUserByEmail = async (req, res, next) => {
  const user = await userSchema.findOne({
    where: {
      email: req.body.email,
    },
    attributes: ['id', 'name', 'email', 'mobile'],
    include: [
      {
        model: todoSchema,
        attributes: ["id", "title", "description"]
      },
    ],
  });

  // const user = await sequelize.query(
  //     `SELECT u.id, u.name, u.email, u.mobile FROM users u WHERE email = :email`,
  //     {
  //         replacements: { email: req.body.email },
  //         type: sequelize.QueryTypes.SELECT
  //     }
  // );

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  req.user = user;
  next();
};

exports.createUser = async (req, res) => {
  const user = userSchema.findOne({
    where: {
      email: req.body.email,
    },
  });

  // const user = await sequelize.query(
  //     `SELECT * FROM users WHERE email = :email`,
  //     {
  //         replacements: { email: req.body.email },
  //         type: sequelize.QueryTypes.SELECT
  //     }
  // );
  // console.log('user', user);
  if (user.length > 0) {
    return res.status(400).json({
      status: "error",
      message: "user already exists",
    });
  } else {
    const password = await bcrypt.hash(req.body.password, 10);
    // const password = 'test123'; // For testing purposes, replace with actual password hashing in production
    await userSchema
      .create({
        name: req.body.name,
        email: req.body.email,
        password: password,
        mobile: Number(req.body.mobile),
        gender: req.body.gender,
      })
      .then(() => {
        return res.status(201).json({
          status: "success",
          content: {
            user: {
              name: req.body.name,
              email: req.body.email,
              mobile: req.body.mobile,
            },
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: err.message || err,
        });
      });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    await userSchema
      .findAll({
        attributes: ["id", "name", "email", "mobile"],
        include: [
          {
            model: todoSchema,
            attributes: ["id", "title", "description"]
          },
        ],
      })
      .then((users) => {
        if (users) {
          return res.status(200).json({
            status: "success",
            content: {
              users: users,
            },
          });
        }
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: err.message || err,
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message || err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    return res.status(200).json({
      status: "success",
      content: {
        user: req.user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = req.user;
    const updatedUser = {
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      mobile: req.body.mobile || user.mobile,
      gender: req.body.gender || user.gender,
      password: req.body.password
        ? await bcrypt.hash(req.body.password, 10)
        : user.password,
      updatedAt: new Date(),
      // password: req.body.password
    };
    Object.assign(user, updatedUser);

    await user
      .save()
      .then(() => {
        return res.status(300).json({
          status: "success",
          content: {
            user: user,
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: err.message || err,
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message || err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = req.user;
    user
      .destroy()
      .then(() => {
        return res.status(204).json({
          status: "success",
          message: "User deleted successfully",
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: "error",
          message: err.message || err,
        });
      });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message || err,
    });
  }
};
