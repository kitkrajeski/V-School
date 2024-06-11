const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
// app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

app.use('/todos', require('./routers/todoRouter.js'));

app.listen(9000, () => {
    console.log('app is a go, bro')
})