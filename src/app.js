const express = require('express');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

module.exports = app