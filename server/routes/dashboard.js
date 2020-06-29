const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const Lender = require('../model/Lender');
const Campaign = require('../model/Campaign');
const { async } = require('q');
const { date } = require('@hapi/joi');

async function totalAmountLending(user)
{
    var totalAmountLend = 0;
    var totalAmountRecived = 0;
    await Lender.find({lenderId:user._id},function (err,data) {
        if(err) return res.send(err);
        
        for(var i=0;i<data.length;i++)
        {
            totalAmountLend+=data[i].amountGiven;
            totalAmountRecived+=(data[i].amountGiven-data[i].amountToBeRecieved)
        }
        const returnObject = {
            "totalAmountLend":totalAmountLend,
            "totalAmountRecived":totalAmountRecived
        };
        console.log(returnObject);
        return returnObject;
    });
}


async function totalAmountCampaign(user) {

    var totalAmountExpected = 0;
    var totalAmountGet = 0;
    var campaignProgress = 0;
    var repaymentProgress = 0;
    var amountRepayed = 0;
    Campaign.find({borrowerId:user._id},async function (err,data) {
        if(err) return res.send(err);
        
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
            "campaignProgress":campaignProgress,
            "repaymentProgress":repaymentProgress

        }
        console.log(returnObject);
    });
    
}


// async function checkingInterest(user){

//     await Lender.find({lenderId:user._id},async function (err,data) {
//         if(err) return res.send(err);
        
//         console.log(data);
//         for(var i=0;i<data.length;i++)
//         {
//             const currentCampaign = await Campaign.find({_id:data[i].campaignId});
//             const campaignUser = await User.find({_id:currentCampaign.borrowerId});
        
//             if(data[i].finalEndDate.getTime() < Date.now().getTime())
//             {
//                 currentCampaign.running = false;
//                 campaignUser.defaulter = true;
//                 await currentCampaign.save();
//                 await campaignUser.save();
//                 // defaulter
//             }
//             else
//             {
//                 if(data[i].endDate.getTime() < Date.now().getTime())
//                 {
//                     // increase interest
//                     currentCampaign.loanInterest+=5;
//                     await currentCampaign.save();
//                 }
//                 // Add interest
//                 const timeDiff = date.now().getTime()-data[i].lastUpdated.getTime();

//                 const interestAmount = data[i].amountToBeRecieved*loanInterest*(timeDiff)/(100*24*30);
//                 currentCampaign.amountDue+=interestAmount;
//                 data[i].amountToBeRecieved+=interestAmount;

//                 data[i].lastUpdated = Date.now();
//                 currentCampaign.lastUpdated = Date.now();
//                 await currentCampaign.save();
//                 await data[i].save();
//             }
//         }
        
//     });

// }

router.get('/',verify,async (req,res)=>{
    const user = await User.findOne({_id:req.user._id});

    // Total amount lent
    await totalAmountLending(user);

    await totalAmountCampaign(user);
    
    // Adding interest
    //await checkingInterest(user);
    res.send(user);



});

module.exports = router;