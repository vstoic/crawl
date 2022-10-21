if (process.env.NODE_ENV === 'production') {
    module.exports = require('./googlekey_prod');
} else {
    module.exports = require('./googlekey_prod');
};

// For Windows Machines, the googlekey files above must have ".js" ending. Leave this ending off for Mac computers.