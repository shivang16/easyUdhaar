const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');
const Campaign = require('../model/Campaign');
const  validator = require('../validate');
const rp = require('request-promise');
const PersonalQuestion = require('../model/PersonalQuestions');
const BusinessQuestion = require('../model/BusinessQuestion');


router.post('/business',verify,async (req,res)=>{
    
    const currentUser = await User.findOne({_id:req.user._id});

    if(currentUser.accountType==false)  return res.send("You are a lender you can't borrow");
    
    // Checking if account is verified or not
    // if(currentUser.profileVerified == false){
    //     return res.send("Profile is not verified!");
    // }

    if(currentUser.defaulter == true) return res.send("You are a defaulter!");


    // Fetching data from body
    const {amountExpected,businessIncome,employes,skilledEmployes,customerFacingBToB,
    job,placeOwned,yearsRunning,cashMajority,currentBalance,assetValue,age,duration,checkingAccount} = req.body;   // Here we don't need to add borrowerId it can be taken form token
    
    
    //Validating campaign 
    const validate_check = validator.campaignValidation({"amountExpected":amountExpected});
    if(validate_check) return res.status(400).send(validate_check);

    
    

    // Check if same type of loan is already taken by user
    const loanTaken = await User.findOne({_id:currentUser._id,businessLoan:true});
    if(loanTaken != null){
        return res.send("Loan Already taken");
    }
    else{
        let campaign = {};
        campaign.borrowerId = currentUser._id;
        campaign.loanType = 1;
        campaign.amountExpected = amountExpected;
        campaign.loanInterest = 5;
        campaign.amount = amountExpected;
        campaign.duration = duration;

        // Loan Questions and credit Score API
        const Questions = {
        "businessIncome":businessIncome,
        "employes" : employes,
        "skilledEmployes" : skilledEmployes,
        "customerFacingBToB": customerFacingBToB,
        "job" : job,
        "placeOwned" : placeOwned,
        "yearsRunning" : yearsRunning,
        "cashMajority" : cashMajority,
        "currentBalance": currentBalance,
        "assetValue": assetValue,
        "age":age,
        "duration":duration,
        "checkingAccount":checkingAccount
        }

        const validate_check2 = validator.businessQuestionValidation(Questions);
        if(validate_check2) return res.status(400).send(validate_check2);

        const parameters = {   
            "Age":age,
            "Job" : job, 
            "Checking account":checkingAccount, 
            "Credit amount":amountExpected, 
            "Duration": duration, 
            "Annual income": businessIncome, 
            "People employed": employes, 
            "Skilled personnel": skilledEmployes,
            "Years running": yearsRunning, 
            "Customer facing": customerFacingBToB, 
            "Place of operation owned" :placeOwned,
            "Cash transactions" : cashMajority, 
            "Value of assets": assetValue,
            "prev_score": currentUser.creditScoreBusiness,
            "prev_time": currentUser.previousLoan

    }
        var options = {
            method: 'POST',
            uri: 'https://visa-credit.herokuapp.com/predict-biz',
            body: parameters,
            json: true // Automatically stringifies the body to JSON
        };
        
        let response = await rp(options)
            .then(async function (parsedBody) {
                
                // POST succeeded...
                const apiScore = parsedBody.results['credit-score'];
                console.log(apiScore);
                if(apiScore>140)
                {
                
                    console.log(apiScore);
                    let campaignModel = new Campaign(campaign);
                    await campaignModel.save();
                    console.log("Data Added to Campaign Database!!");

                    Questions["borrowerId"] = currentUser._id;
                    let businessQuestionModel = new BusinessQuestion(Questions);
                    await businessQuestionModel.save();
                    console.log("Data Added to Business Model database!!");

                    currentUser.businessLoan = true;
                    currentUser.creditScoreBusiness = apiScore;
                    currentUser.previousLoan = Date.now();
                    await currentUser.save();

                    res.send(campaignModel);
        
                }
                else{
                    res.send("Loan Not Approved");
                }
           })
           .catch(function (err) {
                return res.send("Error: "+ err);
                console.log(err);
                // POST failed...
            });
    }
});

router.post('/personal',verify,async (req,res)=>{
    
    const currentUser = await User.findOne({_id:req.user._id});
    
    // Checking if account is verified or not
    if(currentUser.profileVerified == false){
        return res.send("Profile is not verified!");
    }

    // Checking if personal is defaulter or not
    if(currentUser.defaulter == true) return res.send("You are a defaulter!");


    // Fetching data from body
    const {amountExpected,eatOut,nearestMajorCity,annualIncome,checkingAccount,savingAccount,
        jobStatus,lastTravel,vechicles,age,sex,houseType,cellBill,familyMembers,earningMembers,duration,
        cibilScore,internetDevices,literateAdults,purpose} = req.body;   // Here we don't need to add borrowerId it can be taken form token
    

    //Validating campaign 
    const validate_check = validator.campaignValidation({"amountExpected":amountExpected});
    if(validate_check) return res.status(400).send(validate_check);


    

    // Check if same type of loan is already taken by user
    const loanTaken = await User.findOne({_id:currentUser._id,personalLoan:true});
    if(loanTaken != null){
        return res.send("Loan Already taken");
    }
    else{
        let campaign = {};
        campaign.borrowerId = currentUser._id;
        campaign.loanType = 2;
        campaign.amountExpected = amountExpected;
        campaign.loanInterest = 7;
        campaign.amount = amountExpected;
        campaign.duration = duration;

        // Loan Questions and credit Score API
        const Questions = {
        "eatOut":eatOut,
        "nearestMajorCity" : nearestMajorCity,
        "annualIncome" : annualIncome,
        "checkingAccount": checkingAccount,
        "savingAccount": savingAccount,
        "jobStatus" : jobStatus,
        "lastTravel" : lastTravel,
        "vechicles" : vechicles,
        "age" : age,
        "sex": sex,
        "houseType": houseType,
        "cellBill":cellBill,
        "familyMembers":familyMembers,
        "earningMembers":earningMembers,
        "duration":duration,
        "cibilScore":cibilScore,
        "internetDevices":internetDevices,
        "literateAdults":literateAdults,
        "purpose": purpose
    }

        const validate_check2 = validator.personalQuestionValidation(Questions);
        if(validate_check2) return res.status(400).send(validate_check2);

    const parameters = {   
        "Age":age, 
        "Sex":sex, 
        "Job":jobStatus, 
        "Housing":houseType, 
        "Saving accounts":savingAccount, 
        "Checking account":checkingAccount,
        "Credit amount":amountExpected, 
        "Duration":duration, 
        "Purpose":purpose, 
        "Family members":familyMembers,
        "Literate fam":literateAdults, 
        "Earning member":earningMembers, 
        "Eat out":eatOut, 
        "Nearest major city":nearestMajorCity,
        "Times travelled more than 100km in last 60 days":lastTravel, 
        "Annual income":annualIncome,
        "CIBIL":cibilScore, 
        "Monthly cell bill":cellBill, 
        "Internet devices":internetDevices, 
        "Vehicles":vechicles,
        "prev_score":currentUser.creditScorePersonal,
        "prev_time":currentUser.previousLoan
    }


        var options = {
            method: 'POST',
            uri: 'https://visa-credit.herokuapp.com/predict-personal',
            body: parameters,
            json: true // Automatically stringifies the body to JSON
        };
        
        let response = await rp(options)
            .then(async function (parsedBody) {
                
                // POST succeeded...
                const apiScore = parsedBody.results['credit-score'];
                console.log(apiScore);
                if(apiScore>150)
                {
                
                    console.log(apiScore);
                    let campaignModel = new Campaign(campaign);
                    await campaignModel.save();
                    console.log("Data Added to Campaign Database!!");

                    Questions["borrowerId"] = currentUser._id;
                    let personalQuestionModel = new PersonalQuestion(Questions);
                    await personalQuestionModel.save();
                    console.log("Data Added to Personal Question Database!!");
                    
                    currentUser.personalLoan = true;
                    currentUser.creditScorePersonal = apiScore;
                    currentUser.previousLoan = Date.now();
                    await currentUser.save();

                    res.send(campaignModel);
                
                }
                else{
                    res.send("Loan Not Approved");
                }
           })
           .catch(function (err) {
               console.log("Hoo");
                return res.send("Error: "+ err);
                console.log(err);
                // POST failed...
            });
    }
});

module.exports = router;
