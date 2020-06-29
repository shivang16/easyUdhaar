const router = require('express').Router();
const verify = require('./verifyToken');
const Transaction = require('../model/Transaction');
const  validator = require('../validate');

router.post('/',verify,async (req,res)=>{

    //Validating 
    // const validate_check = validator.transactionValidation(req.body);
    // if(validate_check) return res.status(400).send(validate_check);

    // Creating New User And saving in Database
    const {lenderId, borrowerId, amount} = req.body;   // Here we don't need to add borrowerId it can be taken form token
    
    let transaction = {};
    transaction.lenderId =lenderId;
    transaction.borrowerId =borrowerId;
    transaction.amount = amount;
    let transactionModel = new Transaction(transaction);
    await transactionModel.save();
    console.log("Data Added to transaction Database!!");
    res.send(transactionModel);
    

});

module.exports = router;