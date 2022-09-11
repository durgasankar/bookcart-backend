const wiston = require('winston');
const express = require('express');
const app = express();

// initial loading
require('./start/logging')();

const port = process.env.PORT || 3030;
const server = app.listen(port, () => wiston.info(`Listening on port ${port}...`));

module.exports = server;