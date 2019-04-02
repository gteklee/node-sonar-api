const sonar = require('..');
const options = require('./config/options');

// Create client to make http requests
let client = sonar.createClient({
    sonarHost: options.sonarHost,
    sonarUsername: options.sonarUsername,
    sonarPassword: options.sonarPassword
});

// Make post requests
// client.create.Job({
//     job_type_id: 2,
//     assigned_type: "accounts",
//     assigned_id: 1,
//     notes: 'Just a test!'
// })
//     .then(json => console.log(json));

// client.create.Ticket({
//     subject: 'TESTING',
//     type: 'internal',
//     ticket_group_id: 1,
//     category_ids: [1, 11],
//     comment: 'Testing!'
// })
//     .then(json => console.log(json));