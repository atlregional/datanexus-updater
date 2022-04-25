require('dotenv').config();
const mongoose = require('mongoose');
const axios = require('axios');
const db = require('./models');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/datanexus';

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log('\nConnected to DB.'))
	.catch(err => {
		console.log(err);
		process.exit(1);
	});

const getSourcList = data =>  
  [...new Set(data.map(({Source}) => Source))];

db.dataManifest
  .find({})
  .then(data => {
    console.log(getSourcList(data));
    process.exit(0);
  })
  .catch(err => {
		console.log(err);
		process.exit(1);
	});