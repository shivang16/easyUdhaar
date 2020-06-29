const mongoose = require('mongoose');

const lenderScheme = new mongoose.Schema({
    lenderId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    campaignId:{ 
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    dateLending:{  // Date of lending the money
        type:Date,
        default: Date.now(),
        required:true
    },
    amountGiven:{ // Principal amount given
        type:Number,
        required:true
    },
    amountToBeRecieved:{ // AMount+intrest
        type:Number,
        required:true
    },
    amountRecieved:{ // Amount recieved till now
        type:Number,
        default:0
    },
    endDate:{   // Expected end date for repayment
        type:Date,
        default:Date.now()
    },
    finalEndDate:{
        type:Date,
        default:Date.now()
    },
    repaymentDone:{   // Shows if we got full repayment or not
        type:Boolean,
        default:false
    },
    lendingStarted:{
        type:Boolean,
        default:false
    },
});

module.exports = mongoose.model('Lender',lenderScheme);