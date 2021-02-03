const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true, //espacios en blanco
        required: [true, 'Fill up here please.']
    },
    amount: {
        type: Number,
        required: [true, 'Fill up here please']
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema)

//aca creo las schema para Mongo: texto y monto