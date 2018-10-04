const sonar = require('..');
const options = require('./config/dev');
const nock = require('nock');

const client = sonar.createClient({
    sonarHost: options.sonarHost,
    sonarUsername: 'test-user',
    sonarPassword: 'test-pass'
});

/**
 * Test basic fetch request.
 */
it('makes a request and returns data', () => {

    let account_id = 1;

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts/' + account_id)
        .replyWithFile(200, __dirname + '/fixtures/defaultGetRes.json', {
            'Content-Type': 'application/json'
        });

        return client
            .get.account(account_id)
            .then(json => {
                expect(json.data).toBeDefined();
            });
});

/**
 * 
 */