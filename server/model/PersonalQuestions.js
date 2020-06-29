const mongoose = require('mongoose');
const { string, number } = require('@hapi/joi');

const personalQuestionSchema = new mongoose.Schema({
    borrowerId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    eatOut:{    // How often do you eat out
        type:Number,
        required:true
    },
    nearestMajorCity:{
        type:Number,
        required:true
    },
    annualIncome:{
        type:Number,
        required:true
    },
    checkingAccount:{
        type:Number,
        required:true
    },
    savingAccount:{
        type:Number,
        required:true
    },
    jobStatus:{    // Employed/Run a business/Unemployed
        type:Number,
        required:true
    },
    lastTravel:{   // Time since last travel out of town (int) (days)
        type:Number,
        required:true
    },
    vechicles:{   // Number of vehicles owned
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    houseType:{  // Housing type (rent/owned/homeless)
        type:String,
        required:true
    },
    cellBill:{  // Monthly cell bill
        type:Number,
        required:true
    },
    familyMembers:{   // Number of members in family
        type:Number,
        required:true
    },
    earningMembers:{   // Earning family members
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    cibilScore:{
        type:Number,
        required:true
    },
    internetDevices:{  // Number of internet active devices in the household (int)
        type:Number,
        required:true
    },
    literateAdults:{ //Number of literate adults in the household (int)
        type:Number,
        required:true
    },
    purpose:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('PersonalQuestion',personalQuestionSchema);