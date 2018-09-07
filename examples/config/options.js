// Determine environment (production or development)
if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod'); // Prod
} else {
    module.exports = require('./dev'); // Dev
}