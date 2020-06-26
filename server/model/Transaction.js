const mongoose = require('mongoose');

const transactionScheme = new mongoose.Schema({
    lenderId:{
        type:  mongoose.Schema.Types.ObjectId,
        required:true
    },
    borrowerId:{
        type:  mongoose.Schema.Types.ObjectId,
        required:true
    },
    amount:{
        type: Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now(),
        required:true
    }    

});

module.exports = mongoose.model('Transaction',transactionScheme);