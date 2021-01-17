const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Fill up here please.']
    },
    amount: {
        type: Number,
        required: [true, 'Fill up here please']
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema)