const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//sign up route mongoose 8

authRouter.post("/signup", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      res.status(403);
      return next(new Error("username is already taken"));
    }
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
    return res.status(201).send({ user: savedUser.withoutPassword(), token });
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

//log in route mongoose 8
authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(403);
      return next(new Error("username of password incorrect"));
    }
    const isMatch = await user.checkPassword(req.body.password);
    if (!isMatch) {
      res.status(403);
      return next(new Error("username or password incorrect"));
    }
    const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
    return res.status(201).send({ user: savedUser.withoutPassword(), token });
  } catch (error) {
    res.status(500);
    return next(error);
  }
});

module.exports = authRouter;
