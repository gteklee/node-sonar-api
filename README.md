const sonar = require('../index');
const options = require('./config/options');

// Create client to make http requests
let client = sonar.createClient({
    sonarHost: options.sonarHost,
    sonarUsername: options.sonarUsername,
    sonarPassword: options.sonarPassword
});

// client.getAll.accounts()

// client.getAll.account.addresses(1)

// client.getAll.account.contacts(1)

// client.getAll.account.callLogs(1)

// client.getAll.account.dids(1)

// client.getAll.account.dataUsageHistories(1)

// client.getAll.account.ipAssignments(1)

// client.getAll.account.inventory(1)

// client.getAll.account.invoices(1)

// client.getAll.account.paymentMethods(1)

// client.getAll.account.services(1)

// client.getAll.account.taxOverrides(1)

// client.getAll.account.transactions.debits(1)

// client.getAll.account.transactions.deposits(1)

// client.getAll.account.transactions.discounts(1)

// client.getAll.account.transactions.payments(1)

// client.getAll.account.contracts(1)

// client.getAll.addressLists()

// client.getAll.alertingRotations()

// client.getAll.dhcpServers()

// client.getAll.dhcpServerIds()