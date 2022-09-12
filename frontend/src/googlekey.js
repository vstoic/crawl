if (process.env.NODE_ENV === 'production') {
    module.exports = require('./googlekey_prod.js');
} else {
    module.exports = require('./googlekey_dev.js');
}