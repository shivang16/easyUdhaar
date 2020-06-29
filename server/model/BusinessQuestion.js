const mongoose = require('mongoose');
const { string, number } = require('@hapi/joi');

const businessQuestionSchema = new mongoose.Schema({
    borrowerId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    businessIncome:{   // Annual Business income
        type:Number,
        required:true
    },
    employes:{     // Number of employes 
        type:Number,
        required:true
    },
    skilledEmployes:{    // Skilled Employes
        type:Number,
        required:true
    },
    customerFacingBToB:{   // ??
        type:Number,
        required:true
    },
    placeOwned:{      // Place is owned by that person or not
        type:Boolean,
        required:true
    },
    yearsRunning:{    // Number of years running the business 
        type:Number,
        required:true
    },
    cashMajority:{   // Are transactions carried out majorly in cash
        type:Boolean,
        required:true
    },
    assetValue:{  // Value of assets
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    checkingAccount:{
        type:Number,
        required:true
    },
    job:{
        type:Number,
        default:0
    }

});

module.exports = mongoose.model('BusinessQuestion',businessQuestionSchema);