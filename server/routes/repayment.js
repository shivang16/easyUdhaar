'use strict';
const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const Campaign = require('../model/Campaign');
const Lender = require('../model/Lender');
const  validator = require('../validate');
const rp = require('request-promise');
const Transaction = require('../model/Transaction');

router.post('/',verify,async (req,res)=>{
    const currentUser = await User.findOne({_id:req.user._id});
    
    // Creating New User And saving in Database
    const {lendingId,amountGiven} = req.body;  
   
    const currentLending = await Lender.findOne({_id:lendingId});
    
    if(amountGiven > currentLending.amountToBeRecieved) return res.json({message:"cannot pay more amount than expected"});

    const currentCampaign = await Campaign.findOne({_id:currentLending.campaignId}) 
    const campaignOwner = await User.findOne({_id:currentCampaign.borrowerId});
    
    var options = {
        method: 'POST',
        headers:{
            'auth-token': req.header('auth-token')
        },
        uri: 'http://localhost:4500/payment',
        body: {
            "senderId":currentUser._id,
            "reciverId":campaignOwner._id,
            "amount":amountGiven
        },
        json: true // Automatically stringifies the body to JSON
    };

    let response = await rp(options)
    .then(async function (parsedBody) {
        currentCampaign.amountDue-=amountGiven;
        currentCampaign.amountPaid+=amountGiven;
        if(currentCampaign.amountDue ==0)
        {
            currentCampaign.loanRepay = true;
            currentCampaign.running = false;
            if(currentCampaign.loanType==1)
            {
                campaignOwner.businessLoan = false;
            }   
            else
            {
                campaignOwner.personalLoan = false;
            }
        }
        currentLending.amountToBeRecieved-=amountGiven;
        if(currentLending.amountToBeRecieved==0)
            currentLending.repaymentDone = true;
        await currentCampaign.save();
        await currentLending.save();
        let transaction = {};
        transaction.sender = currentUser._id;
        transaction.reciver = campaignOwner._id;
        transaction.amount = amountGiven;
        transaction.date = Date.now();
        transaction.lendingId = lendingId; // We have repayed so it will show to which lender we have paid
        let transactionModel = new Transaction(transaction);
        await transactionModel.save();
        await campaignOwner.save();
        return res.json({message:"payment successful"});
   })
   .catch(function (err) {
    return res.json({message:"Error",error:err});
        console.log(err);
        // POST failed...
    });    
  
});

module.exports = router;