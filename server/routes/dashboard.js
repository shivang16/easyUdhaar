const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const Lender = require('../model/Lender');
const campaign = require('../model/Campaign');
const Campaign = require('../model/Campaign');

router.get('/',verify,async (req,res)=>{
    const user = await User.findOne({_id:req.user._id});
    
    //amount received to be updated in Lender database
    //More feature: add Month wise amount to be paid
    //function to give portfolio amount
    function portfolio() {
        Campaign.aggregate([{
            $match : { $and : [ {lenderId: req.user._id}] },
        },{
            $group : {
                _id : null,
                total : {
                    $sum : "$amountGiven",
                    $suminterest: "$amountToBeReceived"
                }
            }
        }],callback);
    console.log($sum);//Sum of all the lendings
    console.log($suminterest);//sum of amount to be received with interest
    }


    //amount lended and interest to be received in each campaign
    function eachCampaign() {
        lenders=[];
        const lender = Lender.find({lenderId: req.user._id})
        .toArray(function(err, result) {
    if (err) throw err;
    lenders=result;
    });
    for(i=0;i<lenders.length();i++)
    {
        var startdate = new Date(lenders[i].date());
        var dateNow = new Date.now();
        // To calculate the time difference of two dates
        var Difference_In_Time = dateNow.getTime() - startdate.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var totaltime = enddate.getTime()-startdate.getTime();
        var totalDays = totaltime/(1000*3600*24);
        if(totalDays<Difference_In_Days)
        var interestTillNow = Difference_In_Days*0.01*lender2[i].amountGiven/100;
        else
        var interestTillNow = Difference_In_Days*0.015*lenders2[i].amountGiven/100;
        //update interest Till Now amount in amountToBeReceived
        lenders[i].amountToBeReceived = interestTillNow;//update function check it
    }
    }

    //amount borrowed and amount to be given with interest
    function borrowedAmount() {
        Campaign.aggregate([{
            $match : { $and : [ {borrowerId: req.user._id}, {loanRepay: false}] },
        },{
            $group : {
                _id : null,
                total : {
                    $sumBorrowed : "$amountPaid",
                    $interestBorrowed: "$amountToBePaid"
                }
            }
        }],callback);
    console.log($sum);//Sum of all the borrowings that are not paid
    console.log($interestBorrowed);//sum of amount to be paid with interest
    }

    function eachCampaignBorrowed() {
        campaigns = [];
        const campaignslist = Campaign.find({loanRepay: false})
        .toArray(function(err, result) {
    if (err) throw err;
    campaigns=result;
    });
    for(j=0;j<borrowers.length();j++)
    {
        lenders2=[];
        const lender2 = Lender.find({borrowerId: req.user._id}, {campaignId: campaigns[j]})
        .toArray(function(err, result) {
    if (err) throw err;
    lenders2=result;
    });
    var sum2 = 0;//sum to be paid per borrower per Campaign
    for(i=0;i<lenders2.length();i++)
    {
        var startdate = new Date(lenders2[i].datelending);
        var dateNow = new Date.now();
        var enddate = new Date(lenders2[i].endDate);
        // To calculate the time difference of two dates
        var Difference_In_Time = dateNow.getTime() - startdate.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var totaltime = enddate.getTime()-startdate.getTime();
        var totalDays = totaltime/(1000*3600*24);
        if(totalDays<Difference_In_Days)
        var interestTillNow = Difference_In_Days*0.01*lender2[i].amountGiven/100;
        else
        var interestTillNow = Difference_In_Days*0.015*lenders2[i].amountGiven/100;
        sum2 =sum2+interestTillNow.lender2[i].amountGiven;
    }
    campaigns[j].amountToBePaid = sum2;
    console.log(sum2);
    }
}

    //function to get amount to be paid by a borrower to particular lender for a particualar campaign
    function particular(borrowerId2,lenderId2,campaignId2) {
        const person = Lender.find({borrowerId: borrowerId2}, {campaignId: campaignId2}, {lenderId: lenderId2});
        var startdate = new Date(person.date());
        var dateNow = new Date.now();
        // To calculate the time difference of two dates
        var Difference_In_Time = dateNow.getTime() - startdate.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        var interestTillNow = Difference_In_Days*0.01*person.amountGiven/100;
        return interestTillNow+amountGiven;
    }

    res.send(user);
});

module.exports = router;