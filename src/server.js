const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb+srv://alissonlua:developer369@cluster0-imybg.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// GET, POST, PUT, DELETE
// req.query = Acessar Query params (para filtros)
// req.params = Acessa route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)
app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)


app.listen(3333)