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
        required:true,
        max: 255
    },
    dob:{
        type:Date,
        required:true,
        default:Date.now
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
    creditScore:{
        type: Number,
        default:500,
    },
    job:{
        type: String,
        default: null
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
    }

});

module.exports = mongoose.model('User',userScheme);