const sonar = require('..');
const options = require('./config/options');

// Create client to make http requests
let client = sonar.createClient({
    sonarHost: options.sonarHost,
    sonarUsername: options.sonarUsername,
    sonarPassword: options.sonarPassword
});

// Make requests
// client.getAll.accounts()
//     .then(json => console.log(json));

// client.getAll.accounts(json => {
//     console.log(json);
// });

// client.getAll.accounts({
//     limit: 5,
//     page: 3
// }, json => { // Callback
//     console.log(json);
// });

// client.getAll.accounts({
//     limit: 5,
//     page: 3
// })
//     .then(json => console.log(json));





// client.getAll.account.addresses(1)
//     .then(json => console.log(json));

// client.getAll.account.addresses(1, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.addresses(1, json => {
//     console.log(json);
// });

// client.getAll.account.addresses(1, { limit: 5, page: 1}, json => {
//     console.log(json);
// });





// client.getAll.account.contacts(1)
//     .then(json => console.log(json));

// client.getAll.account.contacts(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.contacts(1, json => {
//     console.log(json);
// });

// client.getAll.account.contacts(1, { limit: 5, page: 1}, json => {
//     console.log(json);
// });





// client.getAll.account.callLogs(1)
//     .then(json => console.log(json));

// client.getAll.account.callLogs(1, {
//     limit: 5, 
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.account.callLogs(1, json => {
//     console.log(json); 
// });

// client.getAll.account.callLogs(1, { limit: 5, page: 2 }, json => {
//     console.log(json);
// });





// client.getAll.account.dids(1)
//     .then(json => console.log(json));

// client.getAll.account.dids(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.dids(1, json => {
//     console.log(json); 
// });

// client.getAll.account.dids(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.dataUsageHistories(1)
//     .then(json => console.log(json));

// client.getAll.account.dataUsageHistories(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.dataUsageHistories(1, json => {
//     console.log(json); 
// });

// client.getAll.account.dataUsageHistories(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.ipAssignments(1)
//     .then(json => console.log(json));

// client.getAll.account.ipAssignments(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.ipAssignments(1, json => {
//     console.log(json); 
// });

// client.getAll.account.ipAssignments(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.inventory(1)
//     .then(json => console.log(json));

// client.getAll.account.inventory(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.inventory(1, json => {
//     console.log(json); 
// });

// client.getAll.account.inventory(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.invoices(1)
//     .then(json => console.log(json));

// client.getAll.account.invoices(1, {
//     limit: 5, 
//     page: 5
// })
//     .then(json => console.log(json));

// client.getAll.account.invoices(1, json => {
//     console.log(json); 
// });

// client.getAll.account.invoices(1, { limit: 5, page: 3 }, json => {
//     console.log(json);
// });





// client.getAll.account.invoice.credits(1, 63031)
//     .then(json => console.log(json));

// client.getAll.account.invoice.debits(1, 63031)
//     .then(json => console.log(json));





// client.getAll.account.paymentMethods(1)
//     .then(json => console.log(json));

// client.getAll.account.paymentMethods(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.paymentMethods(1, json => {
//     console.log(json); 
// });

// client.getAll.account.paymentMethods(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.services(1)
//     .then(json => console.log(json));

// client.getAll.account.services(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.services(1, json => {
//     console.log(json); 
// });

// client.getAll.account.services(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.taxOverrides(1)
//     .then(json => console.log(json));

// client.getAll.account.taxOverrides(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.taxOverrides(1, json => {
//     console.log(json); 
// });

// client.getAll.account.taxOverrides(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.transactions.debits(1)
//     .then(json => console.log(json));

// client.getAll.account.transactions.debits(1, {
//     limit: 5, 
//     page: 3
// })
//     .then(json => console.log(json));

// client.getAll.account.transactions.debits(1, json => {
//     console.log(json); 
// });

// client.getAll.account.transactions.debits(1, { limit: 5, page: 3 }, json => {
//     console.log(json);
// });





// client.getAll.account.transactions.deposits(1)
//     .then(json => console.log(json));

// client.getAll.account.transactions.deposits(1, {
//     limit: 5, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.transactions.deposits(1, json => {
//     console.log(json); 
// });

// client.getAll.account.transactions.deposits(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.transactions.discounts(1)
//     .then(json => console.log(json));

// client.getAll.account.transactions.discounts(1, {
//     limit: 5, 
//     page: 3
// })
//     .then(json => console.log(json));

// client.getAll.account.transactions.discounts(1, json => {
//     console.log(json); 
// });

// client.getAll.account.transactions.discounts(1, { limit: 5, page: 3 }, json => {
//     console.log(json);
// });





// client.getAll.account.transactions.payments(1)
//     .then(json => console.log(json));

// client.getAll.account.transactions.payments(1, {
//     limit: 5, 
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.account.transactions.payments(1, json => {
//     console.log(json); 
// });

// client.getAll.account.transactions.payments(1, { limit: 5, page: 3 }, json => {
//     console.log(json);
// });





// client.getAll.account.contracts(1)
//     .then(json => console.log(json));

// client.getAll.account.contracts(1, {
//     limit: 2, 
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.account.contracts(1, json => {
//     console.log(json); 
// });

// client.getAll.account.contracts(1, { limit: 2, page: 2 }, json => {
//     console.log(json);
// });




// -----------------------------------------------------------------------
// -----------------------------------------------------------------------




// client.getAll.addressLists()
//     .then(json => console.log(json));

// client.getAll.addressLists({
//     limit: 5,
//     page: 3
// })
//     .then(json => console.log(json));

// client.getAll.addressLists(json => {
//     console.log(json);
// });

// client.getAll.addressLists({ limit: 5, page: 5}, json => {
//     console.log(json);
// });





// client.getAll.alertingRotations()
//     .then(json => console.log(json));

// client.getAll.alertingRotations({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.alertingRotations(json => {
//     console.log(json);
// });

// client.getAll.alertingRotations({ limit: 5, page: 1}, json => {
//     console.log(json);
// });





// client.getAll.dhcpServers()
//     .then(json => console.log(json));

// client.getAll.dhcpServers({
//     limit: 5,
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.dhcpServers(json => {
//     console.log(json);
// });

// client.getAll.dhcpServers({ limit: 5, page: 1}, json => {
//     console.log(json);
// });





// client.getAll.dhcpServerIds()
//     .then(json => console.log(json));

// client.getAll.dhcpServerIds({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.dhcpServerIds(json => {
//     console.log(json);
// });

// client.getAll.dhcpServerIds({ limit: 1, page: 2}, json => {
//     console.log(json);
// });





// client.getAll.dids()
//     .then(json => console.log(json));

// client.getAll.dids({
//     limit: 5,
//     page: 12
// })
//     .then(json => console.log(json));

// client.getAll.dids(json => {
//     console.log(json);
// });

// client.getAll.dids({ limit: 5, page: 2}, json => {
//     console.log(json);
// });





// client.getAll.files('account', 1)
//     .then(json => console.log(json));

// client.getAll.files('account', 1, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.files('account', 1, json => {
//     console.log(json);
// });

// client.getAll.files('account', 1, { limit: 5, page: 1}, json => {
//     console.log(json);
// });





// client.getAll.financial.tax.geoTaxes(3)
//     .then(json => console.log(json));

// client.getAll.financial.tax.geoTaxes(3, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.financial.tax.geoTaxes(3, json => {
//     console.log(json);
// });

// client.getAll.financial.tax.geoTaxes(3, { limit: 5, page: 1}, json => {
//     console.log(json);
// });





// client.getAll.financial.taxes()
//     .then(json => console.log(json));

// client.getAll.financial.taxes({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.financial.taxes(json => {
//     console.log(json);
// });

// client.getAll.financial.taxes({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.financial.generalLedgerCodes()
//     .then(json => console.log(json));

// client.getAll.financial.generalLedgerCodes({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.financial.generalLedgerCodes(json => {
//     console.log(json);
// });

// client.getAll.financial.generalLedgerCodes({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.financial.invoiceMessages()
//     .then(json => console.log(json));

// client.getAll.financial.invoiceMessages({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.financial.invoiceMessages(json => {
//     console.log(json);
// });

// client.getAll.financial.invoiceMessages({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.ipam.supernets()
//     .then(json => console.log(json));

// client.getAll.ipam.supernets({
//     limit: 5,
//     page: 3
// })
//     .then(json => console.log(json));

// client.getAll.ipam.supernets(json => {
//     console.log(json);
// });

// client.getAll.ipam.supernets({ limit: 5, page: 2 }, json => {
//     console.log(json);
// });





// client.getAll.ipam.subnets(18)
//     .then(json => console.log(json));

// client.getAll.ipam.subnets(18, {
//     limit: 5,
//     page: 4
// })
//     .then(json => console.log(json));

// client.getAll.ipam.subnets(18, json => {
//     console.log(json);
// });

// client.getAll.ipam.subnets(18, { limit: 5, page: 2 }, json => {
//     console.log(json);
// });





// client.getAll.ipam.ipPools(18, 1009)
//     .then(json => console.log(json));

// client.getAll.ipam.ipPools(18, 1009, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.ipam.ipPools(18, 1009, json => {
//     console.log(json);
// });

// client.getAll.ipam.ipPools(18, 1009, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inboundEmailAccounts()
//     .then(json => console.log(json));

// client.getAll.inboundEmailAccounts({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.inboundEmailAccounts(json => {
//     console.log(json);
// });

// client.getAll.inboundEmailAccounts({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inlineDevices()
//     .then(json => console.log(json));

// client.getAll.inlineDevices({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.inlineDevices(json => {
//     console.log(json);
// });

// client.getAll.inlineDevices({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.categories()
//     .then(json => console.log(json));

// client.getAll.inventory.categories({
//     limit: 5,
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.inventory.categories(json => {
//     console.log(json);
// });

// client.getAll.inventory.categories({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.items()
//     .then(json => console.log(json));

// client.getAll.inventory.items({
//     limit: 5,
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.inventory.items(json => {
//     console.log(json);
// });

// client.getAll.inventory.items({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.manufacturers()
//     .then(json => console.log(json));

// client.getAll.inventory.manufacturers({
//     limit: 5,
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.inventory.manufacturers(json => {
//     console.log(json);
// });

// client.getAll.inventory.manufacturers({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.models()
//     .then(json => console.log(json));

// client.getAll.inventory.models({
//     limit: 5,
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.inventory.models(json => {
//     console.log(json);
// });

// client.getAll.inventory.models({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.model.fields(87)
//     .then(json => console.log(json));

// client.getAll.inventory.model.fields(87, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.inventory.model.fields(87, json => {
//     console.log(json);
// });

// client.getAll.inventory.model.fields(87, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.model.deploymentTypes(140)
//     .then(json => console.log(json));

// client.getAll.inventory.model.deploymentTypes(140, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.inventory.model.deploymentTypes(140, json => {
//     console.log(json);
// });

// client.getAll.inventory.model.deploymentTypes(140, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.locationAddresses(1)
//     .then(json => console.log(json));

// client.getAll.inventory.locationAddresses(140, {
//     limit: 5,
//     page: 1,
//     county: 'Archer Co.'
// })
//     .then(json => console.log(json));

// client.getAll.inventory.locationAddresses(140, json => {
//     console.log(json);
// });

// client.getAll.inventory.locationAddresses(140, { limit: 5, page: 1, county: 'Archer Co.' }, json => {
//     console.log(json);
// });





// client.getAll.inventory.locations()
//     .then(json => console.log(json));

// client.getAll.inventory.locations({
//     limit: 5,
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.inventory.locations(json => {
//     console.log(json);
// });

// client.getAll.inventory.locations({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.genericAssignees()
//     .then(json => console.log(json));

// client.getAll.inventory.genericAssignees({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.inventory.genericAssignees(json => {
//     console.log(json);
// });

// client.getAll.inventory.genericAssignees({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.vehicles()
//     .then(json => console.log(json));

// client.getAll.inventory.vehicles({
//     limit: 5,
//     page: 2
// })
//     .then(json => console.log(json));

// client.getAll.inventory.vehicles(json => {
//     console.log(json);
// });

// client.getAll.inventory.vehicles({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.inventory.model.depletionThresholds(141)
//     .then(json => console.log(json));

// client.getAll.inventory.model.depletionThresholds(141, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.inventory.model.depletionThresholds(141, json => {
//     console.log(json);
// });

// client.getAll.inventory.model.depletionThresholds(141, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.jobs()
//     .then(json => console.log(json));

// client.getAll.jobs({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.jobs(json => {
//     console.log(json);
// });

// client.getAll.jobs({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.job.types()
//     .then(json => console.log(json));

// client.getAll.job.types({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.job.types(json => {
//     console.log(json);
// });

// client.getAll.job.types({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.job.desiredDates(13547)
//     .then(json => console.log(json));

// client.getAll.job.desiredDates(13547, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.job.desiredDates(13547, json => {
//     console.log(json);
// });

// client.getAll.job.desiredDates(13547, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.monitoring.templates()
//     .then(json => console.log(json));

// client.getAll.monitoring.templates({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.monitoring.templates(json => {
//     console.log(json);
// });

// client.getAll.monitoring.templates({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.monitoring.graphs(38)
//     .then(json => console.log(json));

// client.getAll.monitoring.graphs(38, {
//     limit: 1,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.monitoring.graphs(38, json => {
//     console.log(json);
// });

// client.getAll.monitoring.graphs(38, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.monitoring.oidThresholds(38, 403)
//     .then(json => console.log(json));

// client.getAll.monitoring.oidThresholds(38, 396, {
//     limit: 1,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.monitoring.oidThresholds(38, 396, json => {
//     console.log(json);
// });

// client.getAll.monitoring.oidThresholds(38, 396, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.monitoring.templateOids(38)
//     .then(json => console.log(json));

// client.getAll.monitoring.templateOids(38, {
//     limit: 1,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.monitoring.templateOids(38, json => {
//     console.log(json);
// });

// client.getAll.monitoring.templateOids(38, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.networkSites()
//     .then(json => console.log(json));

// client.getAll.networkSites({
//     limit: 5,
//     page: 5
// })
//     .then(json => console.log(json));

// client.getAll.networkSites(json => {
//     console.log(json);
// });

// client.getAll.networkSites({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.networkSite.ipAssignments(13)
//     .then(json => console.log(json));

// client.getAll.networkSite.ipAssignments(13, {
//     limit: 5,
//     page: 5
// })
//     .then(json => console.log(json));

// client.getAll.networkSite.ipAssignments(13, json => {
//     console.log(json);
// });

// client.getAll.networkSite.ipAssignments(13, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.networkSite.inventory(13)
//     .then(json => console.log(json));

// client.getAll.networkSite.inventory(13, {
//     limit: 5,
//     page: 5
// })
//     .then(json => console.log(json));

// client.getAll.networkSite.inventory(13, json => {
//     console.log(json);
// });

// client.getAll.networkSite.inventory(13, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.networkSite.addresses(13, {
//     county: 'nueces'
// })
//     .then(json => console.log(json));





// client.getAll.notes('accounts', 1)
//     .then(json => console.log(json));

// client.getAll.notes('accounts', 1, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.notes('accounts', 1, json => {
//     console.log(json);
// });

// client.getAll.notes('accounts', 1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.packages()
//     .then(json => console.log(json));

// client.getAll.packages({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.packages(json => {
//     console.log(json);
// });

// client.getAll.packages({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.radius.accounts(2170982)
//     .then(json => console.log(json));

// client.getAll.radius.accounts(2170982, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.radius.accounts(2170982, json => {
//     console.log(json);
// });

// client.getAll.radius.accounts(2170982, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.radius.groups()
//     .then(json => console.log(json));

// client.getAll.radius.groups({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.radius.groups(json => {
//     console.log(json);
// });

// client.getAll.radius.groups({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.radius.replyAttributes(13)
//     .then(json => console.log(json));

// client.getAll.radius.replyAttributes(13, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.radius.replyAttributes(13, json => {
//     console.log(json);
// });

// client.getAll.radius.replyAttributes(13, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.rateCenters()
//     .then(json => console.log(json));

// client.getAll.rateCenters({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.rateCenters(json => {
//     console.log(json);
// });

// client.getAll.rateCenters({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.roles()
//     .then(json => console.log(json));

// client.getAll.roles({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.roles(json => {
//     console.log(json);
// });

// client.getAll.roles({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.schedules()
//     .then(json => console.log(json));

// client.getAll.schedules({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.schedules(json => {
//     console.log(json);
// });

// client.getAll.schedules({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.scheduled.events(1)
//     .then(json => console.log(json));

// client.getAll.scheduled.events(1, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.scheduled.events(1, json => {
//     console.log(json);
// });

// client.getAll.scheduled.events(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.scheduled.blockers()
//     .then(json => console.log(json));

// client.getAll.scheduled.blockers({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.scheduled.blockers(json => {
//     console.log(json);
// });

// client.getAll.scheduled.blockers({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.scheduled.timeOffs()
//     .then(json => console.log(json));

// client.getAll.scheduled.timeOffs({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.scheduled.timeOffs(json => {
//     console.log(json);
// });

// client.getAll.scheduled.timeOffs({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.services()
//     .then(json => console.log(json));

// client.getAll.system.services({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.services(json => {
//     console.log(json);
// });

// client.getAll.system.services({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.account.groups()
//     .then(json => console.log(json));

// client.getAll.system.account.groups({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.account.groups(json => {
//     console.log(json);
// });

// client.getAll.system.account.groups({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.account.statuses()
//     .then(json => console.log(json));

// client.getAll.system.account.statuses({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.account.statuses(json => {
//     console.log(json);
// });

// client.getAll.system.account.statuses({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.account.types()
//     .then(json => console.log(json));

// client.getAll.system.account.types({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.account.types(json => {
//     console.log(json);
// });

// client.getAll.system.account.types({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.customFields()
//     .then(json => console.log(json));

// client.getAll.system.customFields({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.customFields(json => {
//     console.log(json);
// });

// client.getAll.system.customFields({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.addressTypes()
//     .then(json => console.log(json));

// client.getAll.system.addressTypes({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.addressTypes(json => {
//     console.log(json);
// });

// client.getAll.system.addressTypes({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.taskTemplates()
//     .then(json => console.log(json));

// client.getAll.taskTemplates({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.taskTemplates(json => {
//     console.log(json);
// });

// client.getAll.taskTemplates({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.taskTemplate.tasks(3)
//     .then(json => console.log(json));

// client.getAll.taskTemplate.tasks(3, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.taskTemplate.tasks(3, json => {
//     console.log(json);
// });

// client.getAll.taskTemplate.tasks(3, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.tasks('accounts', 1)
//     .then(json => console.log(json));

// client.getAll.tasks('accounts', 1, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.tasks('accounts', 1, json => {
//     console.log(json);
// });

// client.getAll.tasks('accounts', 1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.tickets()
//     .then(json => console.log(json));

// client.getAll.tickets({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.tickets(json => {
//     console.log(json);
// });

// client.getAll.tickets({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.ticket.categories()
//     .then(json => console.log(json));

// client.getAll.ticket.categories({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.ticket.categories(json => {
//     console.log(json);
// });

// client.getAll.ticket.categories({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.ticket.groups()
//     .then(json => console.log(json));

// client.getAll.ticket.groups({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.ticket.groups(json => {
//     console.log(json);
// });

// client.getAll.ticket.groups({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.ticket.comments(16232)
//     .then(json => console.log(json));

// client.getAll.ticket.comments(16232, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.ticket.comments(16232, json => {
//     console.log(json);
// });

// client.getAll.ticket.comments(16232, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.ticket.replies(16269)
//     .then(json => console.log(json));

// client.getAll.ticket.replies(16269, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.ticket.replies(16269, json => {
//     console.log(json);
// });

// client.getAll.ticket.replies(16269, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.billing.billingFreePeriods(1)
//     .then(json => console.log(json));

// client.getAll.system.billing.billingFreePeriods(1, {
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.billing.billingFreePeriods(1, json => {
//     console.log(json);
// });

// client.getAll.system.billing.billingFreePeriods(1, { limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.system.billing.billingPolicies()
//     .then(json => console.log(json));

// client.getAll.system.billing.billingPolicies({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.system.billing.billingPolicies(json => {
//     console.log(json);
// });

// client.getAll.system.billing.billingPolicies({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.users()
//     .then(json => console.log(json));

// client.getAll.users({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.users(json => {
//     console.log(json);
// });

// client.getAll.users({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.voiceProviders()
//     .then(json => console.log(json));

// client.getAll.voiceProviders({
//     limit: 5,
//     page: 1
// })
//     .then(json => console.log(json));

// client.getAll.voiceProviders(json => {
//     console.log(json);
// });

// client.getAll.voiceProviders({ limit: 5, page: 1 }, json => {
//     console.log(json);
// });





// client.getAll.account.billing.details(1)
//     .then(json => console.log(json));

// client.getAll.account.billing.parameters(1)
//     .then(json => console.log(json));