// Production API options (Only for prod environments)
module.exports = {
    sonarHost: process.env.SONAR_HOST,
    sonarUsername: process.env.SONAR_USERNAME,
    sonarPassword: process.env.SONAR_PASSWORD
};