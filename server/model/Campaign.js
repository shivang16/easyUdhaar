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
    amount:{   // Inital amount wanted
        type:Number,
        default:0
    },
    amountExpected:{ // Amount need now
        type:Number,
        required:true
    },
    amountGet:{   // Amount get till now
        type:Number,
        default:0
    },
    loanInterest:{   // Interest based on type of loan
        type:Number,
        required:true
    },
    amountDue:{   // Amount to be paid
        type:Number,
        default:0
    },
    amountPaid:{  // Amount already paid
        type:Number,
        default:0
    },
    loanRepay:{    // If loan is paid
        type:Boolean,
        default:false
    },
    running:{   // Check if all money is recieved or not
        type:Boolean,
        default:true
    },
    duration:{  // Months 
        type:Number,
        default:0
    },
    lastUpdated:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Campaign',campaignScheme);