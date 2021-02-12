require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const db = require('./models');
const csvToJSON = require('./utils/csvToJSON');
const handleNoArgs = require('./utils/hanleNoArgs');


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/datanexus';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('\nConnected to DB\n'))
	.catch(err => {
		console.log(err);
		process.exit(1);
	});

