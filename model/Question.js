const mongoose = require('mongoose');
const { string, number } = require('@hapi/joi');

const questionScheme = new mongoose.Schema({
    borrowerId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    sex:{
        type: String,
        required:true
    },
    job:{
        type: String,
        default: Date.now(),
        required:true
    },
    savingsAccount:{
        type:Number,
        required:true
    },    
    checkingAccount:{
        type:Number,
        required:true
    },    
    creditAmount:{
        type:Number,
        required:true
    },
    duration:{
        type: Number,
        required:true
    },
    purpose:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('Question',questionScheme);