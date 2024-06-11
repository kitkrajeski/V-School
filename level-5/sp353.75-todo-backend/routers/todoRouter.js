const express = require('express');
const todoRouter = express.Router();
const uuid = require('uuid');

const todoList = [
    {
        "name": "Task 1",
        "description": "Description for Task 1",
        "imageUrl": "http://www.myimage1....",
        "completed": false,
        "_id": uuid.v4()
    },
    {
        "name": "Task 2",
        "description": "Description for Task 2",
        "imageUrl": "http://www.myimage2....",
        "completed": true,
        "_id": uuid.v4()
    },
    {
        "name": "Task 3",
        "description": "Description for Task 3",
        "imageUrl": "http://www.myimage3....",
        "completed": false,
        "_id": uuid.v4()
    }
];

todoRouter.get('/', (req, res) => {
    res.status(200).send(todoList);
})

todoRouter.post('/add', (req, res) => {
    newTodo = req.body;
    todoList.push(newTodo);
    res.status(200).send(todoList);
})

todoRouter.put('/:id', (req, res) => {
    const {id} = req.params;
    const todoIndex = todoList.findIndex(todo => todo._id === id)
    todoList[todoIndex] = {...todoList[todoIndex], ...req.body}
    res.status(200).send(todoList)
})

todoRouter.delete('/:id', (req, res) => {
    const {id} = req.params;
    const todoIndex = todoList.findIndex(todo => todo._id === id);
    const deletedTodo = todoList.splice(todoIndex, 1);
    res.status(200).send(todoList);
})

todoRouter.get('/:id', (req, res) => {
    const {id} = req.params;
    const todo = todoList.find(todo => todo._id === id);
    res.status(200).send(todoList);
})

module.exports = todoRouter;