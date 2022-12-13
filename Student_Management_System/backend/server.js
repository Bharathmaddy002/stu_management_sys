const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors =  require('cors')
const app = express()
const port = 8000

// Express Data

const studentdata = require('../backend/routes/sturoute')




mongoose.connect('mongodb://localhost:27017/students')
  .then((x) => {
     console.log(`Connected to Mongo Database: "${x.connections[0].name}"`)
  })
  .catch((err) => {
     console.log("Error Connecting to Mongo",err)
  })

// Middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

// localhost:8000/stu/create-student
app.use('/stu',studentdata)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})