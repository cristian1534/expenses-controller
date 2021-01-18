const Transaction = require('../models/Transactions');

exports.getTransactions = async (req, res, next ) => {
        try {
            const transactions = await Transaction.find();
            return res.status(200).json({
                success: true,
                count: transactions.length,
                data: transactions
            })
        }catch(err){
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
}

exports.addTransactions = async (req, res, next ) => {
    try {

        const { text, amount } = req.body

        const transaction = await Transaction.create(req.body)
      
        return res.status('201').json({
            success: true,
            data: transaction
        })
    }catch(err){
        console.log(err)
    }
  
   
}

exports.deleteTransactions = async (req, res, next ) => {
    try {
        const transaction = await Transaction.findById(req.params.id)
        if(!transaction){
            return res.status(404).json({
                succes: false,
                error: 'No transaction found'
            })
        }

        await transaction.remove()

        return res.status(200).json({
            success: true,
            data: {}

        })

    }catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }

}
