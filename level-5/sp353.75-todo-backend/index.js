const express = require('express');
const app = express();

app.use(express.json());

app.use('/todos', require('./routers/todoRouter.js'));

app.listen(9000, () => {
    console.log('app is a go, bro')
})