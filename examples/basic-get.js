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





// client.get.addressList(109)
//     .then(json => console.log(json));





// client.get.AlertingRotation(1)
//    .then(json => console.log(json));





// client.get.alertingRotation.day(1, 50)
//     .then(json => console.log(json));





// client.get.account.contract(1, 14)
//     .then(json => console.log(json));





// client.get.account.contractBase64(1, 14)
//     .then(json => console.log(json));





// client.get.dhcpServerId(3)
//     .then(json => console.log(json));





// client.get.dhcpServer(3)
//     .then(json => console.log(json));





// client.get.did(162)
//     .then(json => console.log(json));





// client.get.file('accounts', 1, 34643)
//     .then(json => console.log(json));





// client.get.financial.Tax(3)
//     .then(json => console.log(json));





// client.get.financial.tax.geoTax(3, 1)
//     .then(json => console.log(json));





// client.get.financial.generalLedgerCode(2)
//     .then(json => console.log(json));





// client.get.ipam.supernet(16)
//     .then(json => console.log(json));





// client.get.ipam.subnet(16, 372)
//     .then(json => console.log(json));





// client.get.ipam.ipPool(16, 372, 515)
//     .then(json => console.log(json));





// client.get.inboundEmailAccount(7)
//     .then(json => console.log(json));





// client.get.inlineDevice(2)
//     .then(json => console.log(json));





// client.get.inventory.category(24)
//     .then(json => console.log(json));





// client.get.inventory.item(10270)
//     .then(json => console.log(json));





// client.get.inventory.manufacturer(33)
//     .then(json => console.log(json));





// client.get.inventory.Model(151)
//     .then(json => console.log(json));





// client.get.inventory.model.field(151, 458)
//     .then(json => console.log(json));





// client.get.inventory.model.deploymentType(151, 2)
//     .then(json => console.log(json));





// client.get.inventory.model.depletionThreshold(151, 2)
//     .then(json => console.log(json));





// client.get.inventory.locationAddress(11, 1)
//     .then(json => console.log(json));





// client.get.inventory.genericAssignee(1)
//     .then(json => console.log(json));





// client.get.inventory.location(12)
//     .then(json => console.log(json));





// client.get.inventory.vehicle(13)
//     .then(json => console.log(json));





// client.get.Job(238)
//     .then(json => console.log(json));





// client.get.job.type(13)
//     .then(json => console.log(json));




// client.get.job.desiredDate(2511, 1)
//     .then(json => console.log(json));




// client.get.monitoring.template(42)
//     .then(json => console.log(json));




// client.get.monitoring.graph(3, 12)
//     .then(json => console.log(json));




// client.get.monitoring.oidThreshold(9, 114, 1)
//     .then(json => console.log(json));




// client.get.monitoring.templateOid(9, 114)
//     .then(json => console.log(json));




// client.get.NetworkSite(12)
//     .then(json => console.log(json));




// client.get.networkSite.ipAssignment(12, 14783)
//     .then(json => console.log(json));




// client.get.networkSite.inventory(12, 207)
//     .then(json => console.log(json));




// client.get.networkSite.address(12, 1)
//     .then(json => console.log(json));




// client.get.note('accounts', 1, 1)
//     .then(json => console.log(json));




// client.get.package(2)
//     .then(json => console.log(json));




// client.get.radius.account(2170982, 224)
//     .then(json => console.log(json));




// client.get.radius.group(7)
//     .then(json => console.log(json));




// client.get.radius.replyAttributes(13, 7)
//     .then(json => console.log(json));




// client.get.rateCenter(2)
//     .then(json => console.log(json));




// client.get.role(9)
//     .then(json => console.log(json));




// client.get.schedule(18)
//     .then(json => console.log(json));




// client.get.scheduled.event(1, 28)
//     .then(json => console.log(json));




// client.get.scheduled.blocker(16)
//     .then(json => console.log(json));




// client.get.scheduled.timeOff(330)
//     .then(json => console.log(json));




// client.get.system.service(103)
//     .then(json => console.log(json));




// client.get.system.customField(22)
//     .then(json => console.log(json));




// client.get.system.addressType(2)
//     .then(json => console.log(json));




// client.get.system.billing.policy(1)
//     .then(json => console.log(json));




// client.get.system.billing.freePeriod(1, 1)
//     .then(json => console.log(json));




// client.get.system.account.group(65)
//     .then(json => console.log(json));




// client.get.system.account.status(9)
//     .then(json => console.log(json));




// client.get.system.account.type(5)
//     .then(json => console.log(json));




// client.get.TaskTemplate(3)
//     .then(json => console.log(json));




// client.get.taskTemplate.task(3, 14)
//     .then(json => console.log(json));




// client.get.task('accounts', 1, 203)
//     .then(json => console.log(json));




// client.get.Ticket(21572)
//     .then(json => console.log(json));




// client.get.ticket.category(17)
//     .then(json => console.log(json));




// client.get.ticket.group(1)
//     .then(json => console.log(json));




// client.get.ticket.comment(21572, 33961)
//     .then(json => console.log(json));




// client.get.ticket.reply(21572, 15465)
//     .then(json => console.log(json));




// client.get.user(24)
//     .then(json => console.log(json));




// client.get.voiceProvider(1)
//     .then(json => console.log(json));