const mongoose = require('mongoose');
const dbConstants = require('../constants/DbConstants');

const connectionString = `${dbConstants.CONNECTION_STRING}/${dbConstants.DATABASE_NAME}`;

module.exports = () => mongoose.connect(connectionString).then(() => console.log(`Connected to ${connectionString}...`));
