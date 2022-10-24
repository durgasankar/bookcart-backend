const express = require('express');
const app = express();
const router = express.Router();


// initialization before app start
require('./start/routes')(app);
require('./start/db')();

const port = process.env.PORT || 3030;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;