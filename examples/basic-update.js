const sonar = require('..');
const options = require('./config/options');

// Create client to make http requests
let client = sonar.createClient({
    sonarHost: options.sonarHost,
    sonarUsername: options.sonarUsername,
    sonarPassword: options.sonarPassword
});





// client.update.Account(1, {
//     name: 'Joey Smith'
// })
//     .then(json => console.log(json));





// client.update.account.address(1, 63, { 
//     line1: 'AT%26T Center Parkway',
//     city: 'San Antonio',
//     state: 'TX',
//     county: 'Bexar Co.',
//     zip: '78219',
//     country: 'US'
// })
//     .then(json => console.log(json));
// https://www.w3schools.com/tags/ref_urlencode.asp for special character references





// client.update.account.callLog(1, 41, {
//     subject: 'Test',
//     body: 'This is a test!'
// })
//     .then(json => console.log(json));





// client.update.account.contact(1, 9008, {
//     name: 'Jones Lee',
// })
//     .then(json => console.log(json));





// client.update.account.did(1, 1, {
//     service_id: 31
// })
//     .then(json => console.log(json));





// client.update.account.ipAssignment(1, 42267, {
//     description: 'Briones Test'
// })
//     .then(json => console.log(json));





// client.update.account.invoice.void(1, 135372)
//     .then(json => console.log(json));





// client.update.account.invoice.linkChild(1, 135372, {
//     child_invoice_id: 135432
// })
//     .then(json => console.log(json));





// client.update.account.paymentMethod(1, 11221, {
//     name_on_account: '',
//     expiration_month: 12,
//     expriation_year: 1944,
//     auto: false,
//     line1: '',
//     city: '',
//     state: '',
//     zip: '',
//     counry: ''
// })
//     .then(json => console.log(json));





// client.update.account.toggleAutoPay(1, 11212, {
//     auto: false
// })
//     .then(json => console.log(json));





// client.update.account.service(1, 22168, {
//     name_override: 'testing name override'
// })
//     .then(json => console.log(json));





// client.update.account.taxOverride(1, 2, {
//     tax_id: 3, // id of tax to override
//     rate: 15.25
// })
//     .then(json => console.log(json));





// client.update.account.transactions.descriptions.debit(1, 36252, {
//     description: 'Test Update Description'
// })
//     .then(json => console.log(json));





// client.update.account.transactions.descriptions.discount(1, 3, {
//     description: 'Test Update Description'
// })
//     .then(json => console.log(json));





// client.update.account.transactions.payment(1, 1, {
//     response_message: 'test'
// })
//     .then(json => console.log(json));





// client.update.account.contract(1, 3, {
//     custom_message: 'test custom message'
// })
//     .then(json => console.log(json));