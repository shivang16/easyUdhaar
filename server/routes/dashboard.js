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
    await Lender.find({lenderId:user._id},function (err,data) {
        if(err) return res.send(err);
        
        for(var i=0;i<data.length;i++)
        {
            totalLending++;
            totalAmountLend+=data[i].amountGiven;
            totalAmountRecived+=(data[i].amountGiven-data[i].amountToBeRecieved)
        }
        const returnObject = {
            "totalAmountLend":totalAmountLend,
            "totalAmountRecived":totalAmountRecived,
            "totalLending":totalLending
        };
        return res.send(returnObject);
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
        console.log("Hoo");
        for(var i=0;i<data.length;i++)
        {
            totalAmountExpected += (data[i].amount);
            totalAmountGet += (data[i].amountGet);
            amountRepayed += (data[i].amountPaid);
        }
        campaignProgress = totalAmountGet/totalAmountExpected;
        repaymentProgress = amountRepayed/totalAmountExpected;
        var returnObject = {
            "totalAmountExpected":totalAmountExpected,
            "totalAmountGet":totalAmountGet,
            "amountRepayed":amountRepayed,
            "campaignProgress":campaignProgress
        }
        return res.send(returnObject);
        //finalResponse['campaign'] = returnObject;
    });
    
    }

    //var finalResponse = {};
    // Total amount lent
    


    
    
   // res.send(finalResponse);



});

module.exports = router;


