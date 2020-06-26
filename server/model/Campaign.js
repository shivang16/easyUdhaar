const mongoose = require('mongoose');

const campaignScheme = new mongoose.Schema({
    borrowerId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    loanType:{  // Which type of loan it is: business or nano or personal
        type:Number,
        required:true
    },
    dateOfApplication:{  // Date of applying for this campaign
        type:Date,
        default: Date.now(),
        required:true
    },
    amountExpected:{ // AMount we are applying for 
        type:Number,
        required:true
    },
    loanInterest:{   // Interest based on type of loan
        type:Number,
        required:true
    },
    amountDue:{   // Amount to be paid
        type:Number,
        required:true
    },
    amountPaid:{  // Amount already paid
        type:Number,
        default:0
    },
    loanRepay:{    // If loan is paid
        type:Boolean,
        default:false
    },
    loanApprovedDate:{ // Loan approve date (when we get money)
        type:Date,
        default:Date.now()
    },
    lastDate:{   // Late date of payment
        type:Date,
        default:Date.now()
    }

});

module.exports = mongoose.model('Campaign',campaignScheme);