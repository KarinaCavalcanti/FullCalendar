// Declarando variáveis que receberão as dependências
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Adicionando propriedades
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const database = require('./database');
require('./controllers/CalendarController')(app);

// Iniciando servidor
app.listen(6424, () => {
    console.log(`Express started at http://localhost:6424`);
});