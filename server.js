//loads all environment variables from .env
require('dotenv').config()
const express = require('express');
const path = require('path')
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to Database'))

//lets our server accept json as a body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, './public')))

const cardsRouter = require('./routes/cards')
app.use('/cards', cardsRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
  }) 

const port = 3000;
app.listen(port,() => console.log(`Server listening on port ${port}`));
// app.listen(3000, () => console.log('Server Started'))