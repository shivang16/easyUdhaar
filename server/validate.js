//Validation
const Joi = require('@hapi/joi');

// Registration Validation

const registrationValidate = function(data){
    const schema = Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().max(1024).required(),
        password1 : Joi.string().max(1024).required()
    });

    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
}


// Login Vallidation

const loginValidate  = function(data){
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().max(1024).required(),
    });

    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
};

// Edit Profile


const editValidate = function (data) {
    const schema = Joi.object({
        gender: Joi.string(),
        aadharNo: Joi.string().min(12).max(12),
        panNo: Joi.string().min(10).max(10),
        occupation: Joi.string(),
        accountNo: Joi.string().min(16).max(16),
        cardExpiry: Joi.string(),
        address:Joi.string()
    });
    
    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
    

}





// Profile Validate

const profileValidate = function (data) {
    const schema = Joi.object({
        gender: Joi.string().required(),
        aadharNo: Joi.string().min(12).max(12).required(),
        panNo: Joi.string().min(10).max(10).required(),
        occupation: Joi.string().required(),
        accountNo: Joi.string().min(16).max(16).required(),
        balance: Joi.number(),
        cardExpiry: Joi.string(),
        address:Joi.string().required()
    });
    
    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
    

}

// Phone Number Validation
const phoneValidate = function (data) {
    const schema = Joi.object({
        number:Joi.string().min(12).max(12).required()
    });
    
    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
    

}


// Campaign Validation

const campaignValidate = function(data) {
    const schema = Joi.object({
    amountExpected: Joi.number().required()
    });

    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
    
}

// Business Question Validation

const businessQuestionValidate = function(data) {
    const schema = Joi.object({
        businessIncome: Joi.number().required(),
        employes: Joi.number().required(),
        skilledEmployes:Joi.number().required(),
        customerFacingBToB: Joi.number().required(),
        job: Joi.number(),
        placeOwned: Joi.bool().required(),
        yearsRunning: Joi.number().required(),
        cashMajority: Joi.bool().required(),
        currentBalance: Joi.number().required(),
        assetValue: Joi.number().required(),
        age:Joi.number().required(),
        duration: Joi.number().required(),
        checkingAccount: Joi.number().required()
    });

    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
}

// Personal loan Question Validation

const personalQuestionValidate = function(data) {
    const schema = Joi.object({
        eatOut: Joi.number().required(),
        nearestMajorCity: Joi.number().required(),
        annualIncome: Joi.number().required(),
        checkingAccount: Joi.number().required(),
        savingAccount: Joi.number().required(),
        jobStatus: Joi.number().required(),
        lastTravel: Joi.number().required(),
        vechicles: Joi.number().required(),
        age: Joi.number().required(),
        sex: Joi.string().required(),
        houseType: Joi.string().required(),
        cellBill: Joi.number().required(),
        familyMembers: Joi.number().required(),
        earningMembers: Joi.number().required(),
        duration: Joi.number().required(),
        cibilScore: Joi.number().required(),
        internetDevices: Joi.number().required(),
        literateAdults: Joi.number().required(),
        purpose: Joi.string().required()
    });

    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
}



// Lender Validation

const lenderValidate = function (data) {
    const schema = Joi.object({
        amountGiven: Joi.number().required(),
        campaignId: Joi.required()
    });
    
    //Validating the user before use
    const {error} = schema.validate(data);
    if(error) return error.details[0].message;
    

}


module.exports = {registrationValidation: registrationValidate, loginValidation: loginValidate,campaignValidation:campaignValidate,
    businessQuestionValidation: businessQuestionValidate,personalQuestionValidation:personalQuestionValidate,
    lenderValidation:lenderValidate,profileValidation:profileValidate, phoneValidation:phoneValidate, editValidation:editValidate}