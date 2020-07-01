const mongoose = require('mongoose');
const { boolean } = require('@hapi/joi');

const userScheme = new mongoose.Schema({
    firstName:{
        type:String,
        max:255,
        required:true
    },
    lastName:{
        type:String,
        max:255,
        required:true
    },
    email:{
        type:String,
        max:255,
        min:6,
        required:true
    },
    password:{
        type:String,
        required:true,
        max:1024,
    },
    address:{
        type: String,
        max: 255
    },
    dob:{
        type:Date,
        required:true,
        default:Date.now()
    },
    phoneNo:{
        type: String,
        min:10,
        max:10,
        default: null
    },
    gender:{
        type:String,
        default: null
    },
    aadharNo:{
        type:String,
        min:12,
        max:12,
        default: null
    },
    panNo:{
        type:String,
        min:10,
        max:10,
        default: null
    },
    creditScoreBusiness:{
        type: Number,
        default:400,
    },
    creditScorePersonal:{
        type:Number,
        default:300
    },
    job:{
        type: String,
        default: null
    },
    accountNo:{
        type:String,
        min:16,
        max:16,
        required:true
    },
    balance:{
        type:Number,
        default:0
    },
    phoneVerified:{
        type:Boolean,
        default:false 
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    profileVerified:{
        type:Boolean,
        default:false
    },
    cardExpiry:{
        type:String,
        default:"2021-10"
    },
    previousLoan:{
        type:Date,
        default:Date.now()
    },
    businessLoan:{
        type:Boolean,
        default:false
    },
    personalLoan:{
        type:Boolean,
        default:false
    },
    defaulter:{
        type:Boolean,
        default:false
    },
    accountType:{
        type:Boolean,
        default:false
    }

});

module.exports = mongoose.model('User',userScheme);