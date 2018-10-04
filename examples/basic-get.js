const sonar = require('..');
const options = require('./config/options');

// Create client to make http requests
let client = sonar.createClient({
    sonarHost: options.sonarHost,
    sonarUsername: options.sonarUsername,
    sonarPassword: options.sonarPassword
});

// Individual account
// client.get.Account(1)
//     .then(json => console.log(json));

// client.get.Account(1, json => {
//     console.log(json);
// });





// client.get.account.address(1, 63)
//     .then(json => console.log(json));





// client.get.account.callLog(1, 14222)
//     .then(json => console.log(json));





// client.get.account.contact(1, )
//     .then(json => console.log(json));





// client.get.account.did(837953, 65)
//     .then(json => console.log(json));





// client.get.account.dataUsageHistory(1, 1)
//     .then(json => console.log(json));





// client.get.account.ipAssignment(1, 37221)
//     .then(json => console.log(json));





// client.get.account.inventory.item(1, 12757)
//     .then(json => console.log(json));





// client.get.account.invoice(1, 5)
//     .then(json => console.log(json));





// client.get.account.paymentMethod(1, 13319)
//     .then(json => console.log(json));





// client.get.account.service(1, 12748)
//     .then(json => console.log(json));





// client.get.account.taxOverride(1, 2332)
//     .then(json => console.log(json));





// client.get.account.transactions.debit(1, 4180)
//     .then(json => console.log(json));





// client.get.account.transactions.deposit(1, 65)
//     .then(json => console.log(json));





// client.get.account.transactions.discount(1, 3)
//     .then(json => console.log(json));





// client.get.account.transactions.payment(1, 239)
//     .then(json => console.log(json));