const express = require('express');
const authRouter = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// authRouter.get('/signup', (req, res) => {
//     res.status(200).send('working');
// });

authRouter.get('/signup', (req, res, next) => {
    User.find({})
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        console.error("Error during find operation:", err);
        res.status(500).send("Error retrieving users", err);
    });
});

// authRouter.post('/signup', (req, res, next) => {
//     User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         if (user) {
//             res.status(403);
//             return next(new Error('That username is already taken'));
//         }
//         const newUser = new User(req.body);
//         newUser.save((err, savedUser) => {
//             if (err) {
//                 res.status(500);
//                 return next(err);
//             }
//             const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
//             return res.status(201).send({token, user: savedUser});
//         })
//     })
// })

authRouter.post("/signup", async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username.toLowerCase() });
      if (user) {
        return res.status(403).send({ message: "That username is already taken" });
      }
      
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
      return res.status(201).send({ token, user: savedUser.toObject() });
    } catch (err) {
      res.status(500);
      return next(err);
    }
});

authRouter.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500);
            return next(err);
        }
        if(!user){
            res.status(403);
            return next(new Error('Username or Password are incorrect'));
        }
        if(req.body.password !== user.password){
            res.status(403);
            return next(new Error('Username or Password are incorrect'));
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET);
        return res.status(200).send({token, user});
    })
})

module.exports = authRouter;