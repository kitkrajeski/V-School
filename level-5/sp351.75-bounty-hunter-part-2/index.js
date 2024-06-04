const express = require('express');
const app = express();

app.use(express.json());

app.use('/bounties', require('./routers/bountyRouter.js'));

app.listen(9000, () => {
    console.log('App is a go, bro');
})