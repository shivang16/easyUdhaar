const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const Lender = require('../model/Lender');
const Campaign = require('../model/Campaign');
const { async } = require('q');
const { date } = require('@hapi/joi');



router.get('/',verify,async (req,res)=>{
    const user = await User.findOne({_id:req.user._id});

    if(user.accountType == false)
    {
        
        // Lender
        var totalAmountLend = 0;
        var totalAmountRecived = 0;
        var totalLending = 0;
    await Lender.find({lenderId:user._id},async function (err,data) {
        if(err) return res.send(err);
        var lendingHistory = {};
        for(var i=0;i<data.length;i++)
        {
            totalLending++;
            totalAmountLend+=data[i].amountGiven;
            totalAmountRecived+=(data[i].amountGiven-data[i].amountToBeRecieved);
            const transactionId = "LID"+String(Math.floor(1000+Math.random()*(8999)));
            const currentCampaign = await Campaign.findOne({_id:data[i].campaignId});
            const campaignOwner = await User.findOne({_id:currentCampaign.borrowerId});
            if(campaignOwner!=null)
            {
                var temp = {
                    "transactionId":transactionId,
                    "lendingDate":data[i].dateLending,
                    "status":data[i].repaymentDone,
                    "name":campaignOwner.firstName
                };
                lendingHistory[i] = temp;
            
            }
            
        }
        var returnObject = {
            "totalAmountLend":totalAmountLend,
            "totalAmountRecived":totalAmountRecived,
            "totalLending":totalLending,
            "returnInvestment":700
        };
        
        returnObject["data"] = lendingHistory;


        return res.json(returnObject);
        //finalResponse['lending'] = returnObject;
    });

    }
    else
    {
        var totalAmountExpected = 0;
        var totalAmountGet = 0;
        var campaignProgress = 0;
        var repaymentProgress = 0;
        var amountRepayed = 0;
    await Campaign.find({borrowerId:user._id},async function (err,data) {
        if(err) return res.send(err);
        var activeCampaign = {};
        for(var i=0;i<data.length;i++)
        {
            
            totalAmountExpected += (data[i].amount);
            totalAmountGet += (data[i].amountGet);
            amountRepayed += (data[i].amountPaid);
            if(data[i].running==true)
            {
                const cid = "CID"+String(Math.floor(1000+Math.random()*(8999)));
                const date = String(Math.floor(1+Math.random()*(27)))+'-'+String(Math.floor(1+Math.random()*(6)))+'-2020';
                var temp = {
                    "campaignId": cid,
                    "dueDate": date,
                    "amountNeeded":data[i].amountExpected
                     // cam id duedate amount req
                }
                activeCampaign[i] = temp;
            }
            
        }
        campaignProgress = totalAmountGet/totalAmountExpected;
        repaymentProgress = amountRepayed/totalAmountExpected;
        var returnObject = {
            "totalAmountExpected":totalAmountExpected,
            "totalAmountGet":totalAmountGet,
            "amountRepayed":amountRepayed,
            "campaignProgress":campaignProgress
        }
        returnObject["activeCampaign"] = activeCampaign;
        return res.json(returnObject);
        //finalResponse['campaign'] = returnObject  ;
    });
    
    }

});

module.exports = router;
