const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

app.use('/bounties', require('./routers/bountiesRouter'))

app.listen(8000, () => {
    console.log('app is a go, bro');
})