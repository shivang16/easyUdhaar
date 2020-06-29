const mongoose = require('mongoose');

const transactionScheme = new mongoose.Schema({
    sender:{
        type:  mongoose.Schema.Types.ObjectId,
        required:true
    },
    reciver:{
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
    },
    lendingId:{
        type:mongoose.Schema.Types.ObjectId
    },
    campaignId:{
        type:mongoose.Schema.Types.ObjectId
    }    

});

module.exports = mongoose.model('Transaction',transactionScheme);