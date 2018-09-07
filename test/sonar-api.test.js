const sonar = require('../index');

it('should be an object', () => {
    expect(typeof sonar).toBe('object');
});

it('creates client object', () => {
    let client = sonar.createClient({
        sonarHost: 'test-host',
        sonarUsername: 'test-user',
        sonarPassword: 'test-pass'
    });
    expect(typeof client).toBe('object');
});