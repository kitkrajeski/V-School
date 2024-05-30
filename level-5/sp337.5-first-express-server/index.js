const express = require("express");
const app = express();
const {v4: uuidv4} = require('uuid')

const users = [
    {name: "joe", age: 20, id: uuidv4()},
    {name: "kit", age: 43, id: uuidv4()}
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(9000, () => {
    console.log("App is listening!")
})