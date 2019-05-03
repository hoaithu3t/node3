const express = require('express')

const bodyParser = require('body-parser')
//require('dotenv').config()
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
require('./db/mongoose') 
const todoRoute = require('./routes/todo')
app.use("/todos", todoRoute)


app.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
})

const port = process.env.PORT || 5000
const host = process.env.HOST || 'localhost'
app.listen(port, function () {
    console.log(`Started on PORT ${port} on HOST ${host}`)
})

