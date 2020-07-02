const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const Lender = require('../model/Lender');
const Campaign = require('../model/Campaign');
const { async } = require('q');
const { date } = require('@hapi/joi');



router.get('/',verify,async (req,res)=>{
    const user = await User.findOne({_id:req.user._id});


    // Lender side service
    if(user.accountType == false)
    { 
        var totalAmountLend = 0;
        var totalAmountRecived = 0;
        var totalLending = 0;
        
        await Lender.find({lenderId:user._id},async function (err,data) {
        
            if(err) return res.send(err);
            
            var lendingHistory = [];
            for(var i=0;i<data.length;i++)
            {
                totalLending++;
                totalAmountLend+=data[i].amountGiven;
                totalAmountRecived+=(data[i].amountGiven-data[i].amountToBeRecieved);
                const transactionId = "LID"+String(Math.floor(1000+Math.random()*(8999)));
                const currentCampaign = await Campaign.findOne({_id:data[i].campaignId});
                if(currentCampaign==null) continue;
                const campaignOwner = await User.findOne({_id:currentCampaign.borrowerId});
                if(campaignOwner!=null)
                {
                    var temp = {
                        "transactionId":transactionId,
                        "lendingDate":data[i].dateLending,
                        "status":data[i].repaymentDone,
                        "name":campaignOwner.firstName
                    };
                    lendingHistory.push(temp);
                
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
        });

    }

    // Borrower side
    else
    {
        var totalAmountExpected = 0;
        var totalAmountGet = 0;
        var campaignProgress = 0;
        var repaymentProgress = 0;
        var amountRepayed = 0;
        var campaignHistory = {};

        const campaignList = await Campaign.find({borrowerId:user._id});
        for(var i=0;i<campaignList.length;i++)
        {
            totalAmountExpected += (campaignList[i].amount);
            totalAmountGet += (campaignList[i].amountGet);
            amountRepayed += (campaignList[i].amountPaid);
            if(campaignList[i].running== true)
            {
                const lenderList = await Lender.find({campaignId:campaignList[i]._id});
                if(lenderList.length==0)
                {
                    //console.log("Hoo");
                }
                else
                {
                    var lndrlst = [];
                    for(var j=0;j<lenderList.length;j++)
                    {
                        var randomDate = String(Math.floor(1+Math.random()*27))+"/"+String(Math.floor(1+Math.random()*11))+"/"+String(Math.floor(2021+Math.random(2024)));
                        var temp = {
                            "lendingId":lenderList[j]._id,
                            "amountGiven":lenderList[j].amountGiven,
                            "amountPending":lenderList[j].amountToBeRecieved,
                            "dueDate": randomDate
                        }
                        lndrlst.push(temp);
                        
                    }
                    campaignHistory["campaignId"] = lndrlst;
                }
            }
           
        }
        
        campaignProgress = totalAmountGet/totalAmountExpected;
        repaymentProgress = amountRepayed/totalAmountExpected;

        var returnObject = {
            "totalAmountExpected":totalAmountExpected,
            "totalAmountGet":totalAmountGet,
            "amountRepayed":amountRepayed,
            "campaignProgress":campaignProgress,
            "campaignLenders":campaignHistory,
            "businessCreditScore":user.creditScoreBusiness,
            "personalCreditScore":user.creditScorePersonal

        }
        return res.json({returnObject});
        
    }

});



router.get('/exploreCampaigns',verify,async (req,res)=>{
    const currentUser = await User.findOne({_id:req.user._id});
    
    await Campaign.find({running:true},async (err,data)=>{
        if(err) return res.send("error: " + err);
        else
        {
            var finalObject = [];
            for(var i=0;i<data.length;i++)
            {
                const borrower = await User.findOne({_id:data[i].borrowerId})
                if(borrower==null) continue;
                const borrowerName = borrower.firstName + " " + borrower.lastName;
                var cs;
                if(data[i].loanType==1)
                {
                    cs = borrower.creditScoreBusiness;
                }
                else
                {
                    cs = borrower.creditScorePersonal;
                }
                const progress = (data[i].amountGet)/data[i].amount;
                const temp = {
                    "borrowerName":borrowerName,
                    "creditScore":cs,
                    "campaignType":data[i].loanType,
                    "campaignProgress":progress,
                    "amountInital":data[i].amount,
                    "amountReq":data[i].amountExpected,
                    "campaignId":data[i]._id
                };
                finalObject.push(temp);

           }
            return res.json(finalObject);
        }
        
    });
});



module.exports = router;