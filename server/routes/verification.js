const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const  validator = require('../validate');
const Nexmo = require('nexmo');
const express = require('express');
const { model } = require('../model/User');
const app = express();
const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET
});

router.get('/profile',verify,async (req,res)=>{
    //check if profile is verified
    const currentUser = await User.findOne({_id:req.user._id});
    
    if(currentUser.profileVerified == false) 
    {
        res.send("Enter Different values for completing your profile");
        //res.redirect("form") and this form submit will have post /profile
    }
    else{
        res.send("Account Already verified");
    }


});

router.post('/profile',verify,async(req,res)=>{
    
    User.findOne({_id:req.user._id},async (err,currentUser)=>{
        if(err){
            console.log("User Not Found! " + err);
        }
        else{

            // Validation is required first add validation of input!!!

            currentUser.gender = req.body.gender;
            currentUser.aadharNo = req.body.aadharNo;
            currentUser.panNo = req.body.panNo;
            currentUser.occupation = req.body.occupation;
            currentUser.save(function (err1) {
                if(err){
                    console.log("Not Able to save!")
                }
                else{
                    res.send(currentUser);
                    //res.redirect('/phone');
                    // Phone Number input form  
                }
            })
           
        }
    });

    
});

router.get('/phone',verify,async (req,res)=>{

    // Here we have phone number entering form. 
    const currentUser = await User.findOne({_id:req.user._id});
    if(currentUser.phoneVerified==false){
        // input phone number and send it to post /phone/register 
    }
    else{
        res.send("Phone Number Already verified");
    } 
});

router.post('/phone/register',verify,async (req,res)=>{
    
    // A user registers with a mobile phone number
    let phoneNumber = req.body.number;
  
    console.log(phoneNumber);
  
    nexmo.verify.request({number: phoneNumber, brand: 'VISA Company'}, (err, result) => {
      if(err) {
        console.log(err);
  
        //Oops! Something went wrong, respond with 500: Server Error
        res.status(500).send(err);
      } else {
        console.log(result);
  
        if(result && result.status == '0') {
          //A status of 0 means success! Respond with 200: OK
          res.status(200).send(result);
        } else {
          res.status(400).send(result);
        }
      }
    });
    // !!!!!!!!!!Store request id someewhere and use it in check request
    //res.redirect('/phone/check');
});

router.get('/phone/check',verify,(req,res)=>{
    res.send("Enter OTP: ");
    // after enterring OTP send it to /phone/check post
});


router.post('/phone/check',verify,(req,res)=>{
    //To verify the phone number the request ID and code are required.
    let code = req.body.code;
    let requestId = req.body.requestId;
  
    console.log("Code: " + code + " Request ID: " + requestId);
  
    nexmo.verify.check({request_id: requestId, code: code}, (err, result) => {
      if(err) {
        console.log(err);
  
        //Oops! Something went wrong, respond with 500: Server Error
        res.status(500).send(err);
      } else {
        console.log(result)
  
        if(result && result.status == '0') {
          //A status of 0 means success! Respond with 200: OK
          res.status(200).send(result);
          console.log('Account verified!');
          User.findOne({_id:req.user._id},(err,user)=>{
              if(err){
                  console.log("Error finding user: "+err);
              }
              else{
                  user.phoneVerified = true;
                  user.profileVerified = true;
                  user.save(function(err){
                      if(err){
                          console.log("Error in Saving: " + err);
                      }
                      else{
                          console.log("Done!!");
                      }
                  })
              }
          });
        } else {
          res.status(400).send(result);
          console.log('Error verifying account')
        }
      }
    });
});




module.exports = router;