'use strict';
var api = require('./src/funds_transfer_api').funds_transfer_api;
var authCredentials = require('./credentials.json');

var funds_transfer_api = new api(authCredentials);

// path invoked is '/visadirect/fundstransfer/v1/pushfundstransactions';
funds_transfer_api.pushfunds(getParameters())
    .then(function(result) {
        // Put your custom logic here
        console.log('\n Response: ' + JSON.stringify(result.response,null,4));
        console.log('\n Response Status: ' + JSON.stringify(result.response.statusCode));
    })
    .catch(function(error) {
        console.log('\n Response: ' + JSON.stringify(error.response));
        console.log('\n Response Status: ' + JSON.stringify(error.response.statusCode));
    });

function getParameters() {
    var parameters = {
        // "x-client-transaction-id": "134eqwdc1e13",
        "Accept": "application/json",
        "Content-Type": "application/json"
    };
    parameters.payload = {
        "businessApplicationId": "AA",
        "transactionIdentifier": "381228649430015",
        "cardAcceptor": {
            "idCode": "CA-IDCode-77765",
            "address": {
                "county": "San Mateo",
                "country": "USA",
                "state": "CA",
                "zipCode": "94404"
            },
            "terminalId": "TID-9999",
            "name": "Visa Inc. USA-Foster City"
        },
        "acquirerCountryCode": "840",
        "recipientPrimaryAccountNumber": "4957030420210496",
        "retrievalReferenceNumber": "412770451018",
        "senderAccountNumber": "4653459515756154",
        "transactionCurrencyCode": "USD",
        "acquiringBin": "408999",
        "amount": "124.05",
        "systemsTraceAuditNumber": "451018",
        "senderCountryCode": "124"
    };
    parameters.payload.localTransactionDateTime = Date.now();

    return parameters;
}