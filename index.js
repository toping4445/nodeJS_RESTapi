const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const user = require('./api/user/index')

app.use(logger('dev')) 
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use('/users',user)

 
module.exports = app

