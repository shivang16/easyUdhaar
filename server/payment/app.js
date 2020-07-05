const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Connect to DB
dotenv.config();
mongoose.connect("",{useUnifiedTopology: true,useNewUrlParser: true  },function(){
    
console.log("DB CONNECTED!!");
});

const payment = require('./payment');

app.use(express.json());

app.use('/payment',payment);


app.get('/',function(req,res){
    res.send("Yoo");
});

app.get('*',(req,res)=>{
    res.send("PAGE NOT FOUND!!");
});
    
app.listen(4500,function(req,res){
    console.log("SERVER IS ON!!");
});