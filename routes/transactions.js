const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactions');

router 
    .route('/') //representa la ruta de /api/v1/transactions
    .get(getTransactions)
    .post(addTransactions);
   
router    
    .route('/:id')
    .delete(deleteTransactions);
  



module.exports = router;


//trae los metodos de controllers