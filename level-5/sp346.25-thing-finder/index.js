const express = require('express');
const app = express();

app.use(express.json());

app.use('/things', require('./routers/things'));

app.listen(9000, () => {
    console.log('App is a go, bro');
})
