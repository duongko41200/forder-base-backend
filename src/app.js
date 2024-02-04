const compression = require('compression');
require('dotenv').config()
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

//init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
require('./dbs/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload()

// init router
app.get('/', (req, res) => {
	return res.status(200).json({
		message: 'duong dep trai',
	});
});

//handling errors

module.exports = app;
