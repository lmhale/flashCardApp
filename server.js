//loads all environment variables from .env
require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to Database'))

//lets our server accept json as a body
app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

const port = 3000;
app.listen(port,() => console.log(`Server listening on port ${port}`));
// app.listen(3000, () => console.log('Server Started'))