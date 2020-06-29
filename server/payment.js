var api = require('./src/funds_transfer_api').funds_transfer_api;
var authCredentials = require('./credentials.json');

var funds_transfer_api = new api(authCredentials);

// path invoked is '/visadirect/fundstransfer/v1/pullfundstransactions';
funds_transfer_api.pullfunds(getParameters_pull())
    .then(function(result_pull) {
        // Put your custom logic here
        console.log('\n Response: ' + JSON.stringify(result_pull.response, null, 4));
        console.log('\n Response Status: ' + JSON.stringify(result_pull.response.statusCode));

        // path invoked is '/visadirect/fundstransfer/v1/pushfundstransactions';
        funds_transfer_api.pushfunds(getParameters_push())
        .then(function(result_push) {
            // Put your custom logic here
            console.log('\n Response: ' + JSON.stringify(result_push.response,null,4));
            console.log('\n Response Status: ' + JSON.stringify(result_push.response.statusCode));
        })
        .catch(function(error_push) {
            console.log('\n Response: ' + JSON.stringify(error_push.response));
            console.log('\n Response Status: ' + JSON.stringify(error_push.response.statusCode));
        });

       
    })
    .catch(function(error_pull) {
        console.log('\n Response: ' + JSON.stringify(error_pull.response));
        console.log('\n Response Status: ' + JSON.stringify(error_pull.response.statusCode));
    });

    function getParameters_pull() {
        var parameters = {
            "x-client-transaction-id": "2i3hb4cnj",
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        parameters.payload = {
            "businessApplicationId": "AA",
            "senderCardExpiryDate": "2021-04",
            "amount": "124.02",
            "acquirerCountryCode": "840",
            "retrievalReferenceNumber": "330000550000",
            "cardAcceptor": {
                "idCode": "ABCD1234ABCD123",
                "address": {
                    "county": "081",
                    "country": "USA",
                    "state": "CA",
                    "zipCode": "94404"
                },
                "terminalId": "ABCD1234",
                "name": "Visa Inc. USA-Foster City"
            },
            "acquiringBin": "408999",
            "systemsTraceAuditNumber": "451001",
            "senderCurrencyCode": "USD",
            "senderPrimaryAccountNumber": "4957030005123307",
            
        };
        parameters.payload.localTransactionDateTime = Date.now();
    
        return parameters;
    }

    function getParameters_push() {
        var parameters = {
            "x-client-transaction-id": "f54evcwf54cw4rc",
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