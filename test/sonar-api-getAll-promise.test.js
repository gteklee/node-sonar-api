const sonar = require('../index');
const options = require('./config/dev');
const nock = require('nock');

const client = sonar.createClient({
    sonarHost: options.sonarHost,
    sonarUsername: 'test-user',
    sonarPassword: 'test-pass'
});

/**
 * Test basic fetch request without page and limit specified.
 */
it('makes a request with limit and page not specified and returns data', () => {

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts')
        .replyWithFile(200, __dirname + '/fixtures/defaultRes.json', {
            'Content-Type': 'application/json'
        });
    
    return client
        .getAll.accounts()
        .then(json => {
            expect(Array.isArray(json.data)).toBeTruthy();
            expect(json.paginator).toBeDefined();
        });
});

/**
 * Test basic fetch request with page and limit specified.
 */
it('makes request with limit and page specified and returns data', () => {

    let limit = 5;
    let page = 2;

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts')
        .query(true)
        .replyWithFile(200, __dirname + '/fixtures/limitPageRes.json', {
            'Content-Type': 'application/json'
        });

    return client
        .getAll.accounts({limit: limit, page: page})
        .then(json => {
            expect(Array.isArray(json.data)).toBeTruthy();
            expect(json.paginator).toBeDefined();
        });
});

/**
 * Test basic fetch request where returned data includes a paginator.
 */
it('matches limit and page returned in paginator', () => {

    let limit = 5;
    let page = 2;

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts')
        .query(true)
        .replyWithFile(200, __dirname + '/fixtures/limitPageRes.json', {
            'Content-Type': 'application/json'
        });

    return client
        .getAll.accounts({limit: limit, page: page})
        .then(json => {
            expect(json.paginator.limit).toBe(limit);
            expect(json.paginator.current_page).toBe(page);
        });
});

/**
 * Test basic fetch request with only one property specifiec (limit).
 */
it('gets all accounts with only limit specified and returns data', () => {
    
    let limit = 5;

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts')
        .query(true)
        .replyWithFile(200, __dirname + '/fixtures/limitPageRes.json', {
            'Content-Type': 'application/json'
        });

    return client
        .getAll.accounts({limit: limit})
        .then(json => {
            expect(Array.isArray(json.data)).toBeTruthy();
            expect(json.paginator).toBeDefined();
        });
});

// Above test returns a paginator with property specified.
it('matches limit returned in paginator', () => {

    let limit = 5;

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts')
        .query(true)
        .replyWithFile(200, __dirname + '/fixtures/limitPageRes.json', {
            'Content-Type': 'application/json'
        });

    return client
        .getAll.accounts({limit: limit})
        .then(json => {
            expect(json.paginator.limit).toBe(limit);
        });
});

/**
 * Test basic fetch request with only one property specifiec (page).
 */
it('calls get all acounts with only page specified and returns data', () => {

    let page = 2;

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts')
        .query(true)
        .replyWithFile(200, __dirname + '/fixtures/limitPageRes.json', {
            'Content-Type': 'application/json'
        });

    return client
        .getAll.accounts({page: page})
        .then(json => {
            expect(Array.isArray(json.data)).toBeTruthy();
            expect(json.paginator).toBeDefined();
        });
});

// Above test returns a paginator with property specified.
it('matches page returned in paginator', () => {

    let page = 2;

    nock('https://' + options.sonarHost + '/')
        .get('/api/v1/accounts')
        .query(true)
        .replyWithFile(200, __dirname + '/fixtures/limitPageRes.json', {
            'Content-Type': 'application/json'
        });

    return client
        .getAll.accounts({page: page})
        .then(json => {
            expect(json.paginator.current_page).toBe(page);
        });
});