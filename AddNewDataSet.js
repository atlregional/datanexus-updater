require('dotenv');
const mongoose = require('mongoose');
const db = require('./models');
const csvToJSON = require('./utils/csvToJSON');
const handleNoArgs = require('./utils/handleNoArgs');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/datanexus';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('\nConnected to DB.'))
	.catch(err => {
		console.log(err);
		process.exit(1);
	});

const insertDataAPIs = async data => {
	await db.dataAPI
		.insertMany(data)
		.then(() => console.log('\nSuccessfully Inserted: DataAPIs'))
		.catch(err => {
			console.log(err);
			process.exit(1);
		});
};

const updateGeoAPIDataIDs = async (newDataAPIKeys, geoAPIsToUpdate) => {
	await db.geoAPI
		.find()
		.then(data => {
			console.log('\nUpdating GeoAPIs...\n');

			// Loops through GeoAPIs: Updates dataAPI array of given geosAPIsToUpdate by concatenating existing array with newly added dataAPIs' keys
			data.forEach(geoAPI => {
				geoAPIsToUpdate.forEach(updateId => {
					geoAPI._id === updateId
						? db.geoAPI
								.updateOne(
									{ _id: geoAPI._id },
									{
										dataAPIs: geoAPI.dataAPIs.concat(
											newDataAPIKeys
										)
									}
								)
								.then(res =>
									res.ok === 1
										? console.log(
												`Successfully Updated: ${geoAPI._id}`
										  )
										: null
								)
								.catch(err => console.log(err))
						: null;
				});
			});
		})
		.catch(err => console.log(err));
};

const insertManifest = async data => {
	await db.dataManifest
		.insertMany(data)
		.then(() => console.log('\nSuccessfully Inserted: Manifest'))
		.catch(err => {
			console.log(err);
			process.exit(1);
		});
};

const updateDefaultConfig = async newDataAPIKeys => {
	await db.defaultConfig
		.findOne({ name: 'default' })
		.then(data => {
			db.defaultConfig
				.updateOne({ name: data.name }, { dataAPIs: data.dataAPIs.concat(newDataAPIKeys) })
				.then(res => {
					res.ok === 1
						? console.log('\nSuccessfully Updated: defaultConfig.dataAPIs')
						: null;

					console.log('\nNew Data Set Added\n');
					process.exit(0);
				})
				.catch(err => {
					console.log(err);
					process.exit(1);
				});
		})
		.catch(err => {
			console.log(err);
			process.exit(1);
		});
};

const init = async (dataAPIsFile, manifestCSV, geosArr) => {
	// Try / Catch will help catch any errors associated with file imports
	try {
		const newDataAPIs = require(`./data/dataAPIs/${dataAPIsFile}`);
		const manifestPath = `./data/manifests/${manifestCSV}`;
		const geoAPIsToUpdate = require(`./update/${geosArr}`);

		const newDataAPIKeys = newDataAPIs.map(api => api._id);
		const newManifestJSON = csvToJSON(manifestPath);

		await insertDataAPIs(newDataAPIs);

		await updateGeoAPIDataIDs(newDataAPIKeys, geoAPIsToUpdate);

		await insertManifest(newManifestJSON);

		await updateDefaultConfig(newDataAPIKeys);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

// arg2: New DataAPI File, arg3: Manifest CSV, arg4: Array of GeoAPIs to update with newly added DataAPIs
process.argv[2] && process.argv[3] && process.argv[4]
	? init(process.argv[2], process.argv[3], process.argv[4])
	: handleNoArgs();
