const winston = require('winston');
require('express-async-errors');

module.exports = function () {
    winston.handleExceptions(new winston.transports.File({ filename: 'uncaughtExceptions.log' }))

    process.on('unhandledRejection', exceptions => { throw exceptions; })

    winston.add(winston.transports.File, { filename: 'logger.log' });
    // adding to DB
    // winston.add(winston.transports.MongoDB, { 
    //   db: 'mongodb://localhost/bookcart',
    //   level: 'info'
    // });
}
