const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'}); //uso el archivo .env 

connectDB()

const transactions = require('./routes/transactions'); //traigo la ruta.

const app = express();

app.use(express.json());
app.use('/api/v1/transactions', transactions) //en la ruta, renderiza transactions
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on ${ process.env.NODE_ENV } mode on port ${ PORT }`.yellow.bold));

