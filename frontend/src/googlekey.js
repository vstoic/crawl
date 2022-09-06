if (process.env.NODE_ENV === 'production') {
    module.exports = require('./googlekey_prod');
} else {
    module.exports = require('./googlekey_dev');
}