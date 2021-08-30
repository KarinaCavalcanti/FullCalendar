const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true });

mongoose.Promise = global.Promise;
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Sucesso ao se comunicar com o Banco de Dados!');
});