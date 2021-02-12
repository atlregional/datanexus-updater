require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const db = require('./models');

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

const csvToJSON = csvPath => {
	// Removing " symbols and splitting into rows
	const rows = fs.readFileSync(csvPath, 'utf-8').replace(/"/g, '').split('\n');
	const cols = rows[0].split(',');

	const arr = [];

	for (let i = 1; i < rows.length; i++) {
		const obj = {};
		const currentRow = rows[i].split(',');

		for (let j = 0; j < cols.length; j++) {
			// Editing error in API keys...
			cols[j] === 'API\r' ? (cols[j] = 'API') : null;

			obj[cols[j]] = currentRow[j];
		}
		arr.push(obj);
	}

	return arr;
};

const seedDB = (collection, data) => {
	collection
		.deleteMany()
		.then(() =>
			collection
				.insertMany(data)
				.then(data => {
					console.log(data);
					console.log(`\nSuccess!\n`);
					process.exit(0);
				})
				.catch(err => {
					console.log(err);
					process.exit(1);
				})
		)
		.catch(err => {
			console.log(err);
			process.exit(1);
		});
};

const addData = (directory, file) => {
	const newData =
		directory === 'manifests'
			? csvToJSON(`./data/${directory}/${file}`)
			: require(`./data/${directory}/${file}`);

	switch (directory) {
		case 'dataAPIs':
			seedDB(db.dataAPI, newData);
			break;
		case 'geoAPIs':
			seedDB(db.geoAPI, newData);
			break;
		case 'configs':
			seedDB(db.defaultConfig, newData);
			break;
		case 'tileLayers':
			seedDB(db.tileLayer, newData);
			break;
		case 'manifests':
			seedDB(db.dataManifest, newData);
			break;
		default:
			console.log(`\n${directory} not found.\n`);
			process.exit(1);
	}
};

const handleNoArgs = () => {
	console.log('\nPlease specify directory and file as args...\n');
	process.exit(1);
};

// Checks for args and adds data set
process.argv[2] && process.argv[3] ? addData(process.argv[2], process.argv[3]) : handleNoArgs();
