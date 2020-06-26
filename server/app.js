const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Connect to DB
dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true,useNewUrlParser: true  },function(){
    
console.log("DB CONNECTED!!");
})

//Import Routes
const authRoute = require('./routes/auth.js');
const privateRoute = require('./routes/private_route');
const dashboard = require('./routes/dashboard');
const newCampaign = require('./routes/newCampaign');
const verification = require('./routes/verification');
const newLender = require('./routes/newLending');
const transaction = require('./routes/transactionHistory');

app.use(express.json());

// Adding Middleware
app.use('/user',authRoute);
app.use('/dashboard',dashboard);
app.use('/newCampaign',newCampaign);
app.use('/verification',verification);
app.use('/newLending',newLender);
app.use('/transaction',transaction);

app.get('/',function(req,res){
    res.send("Yoo");
});

app.get('*',(req,res)=>{
    res.send("PAGE NOT FOUND!!");
});
    
app.listen(3000,function(req,res){
    console.log("SERVER IS ON!!");
});