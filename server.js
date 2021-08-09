
const { teste } = require('./app/models');

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

teste.create({ nome: 'Milene', email: 'mi@gmail.com', senha: '123456' });

app.listen(3306);