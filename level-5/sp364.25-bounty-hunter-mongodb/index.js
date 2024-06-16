const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://kkrajeski:6KyKuQm8X2An4OUr@vschool.zvyzn1q.mongodb.net/?retryWrites=true&w=majority&appName=vSchool')
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

app.use('/bounties', require('./routers/bountiesRouter'));
app.use('/bounties/type', require('./routers/bountiesRouterType'));

app.listen(8000, () => {
    console.log('app is a go, bro');
})