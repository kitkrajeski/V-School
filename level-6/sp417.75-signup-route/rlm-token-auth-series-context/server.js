const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.env')})
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  process.env.MONGO_DB_URI,
  (err) => {
    if(err) console.log(err)
      else console.log('connected')
  } 
  )

// async function connectToDB() {
//   try {
//     await mongoose.connect('mongodb+srv://kkrajeski:<password>@vschool.zvyzn1q.mongodb.net/?retryWrites=true&w=majority&appName=vSchool');
//     console.log('Connected to the DB');
//   } catch (error) {
//     console.error('Error connecting to the DB:', error);
//   }
// }

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET}))
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === 'UnauthorizedError'){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})