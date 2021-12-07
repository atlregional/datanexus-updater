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

const getStatsByGeo = async (defaultDataAPIs, geo) => {
	const geoAPI = await db.geoAPI.findOne({ _id: geo });
	const dataAPIs = geoAPI.dataAPIs;
	const availableAPIs = dataAPIs.filter(api => defaultDataAPIs.includes(api));
	const query = { API: availableAPIs };

	const apiFields = {};

	for await (const geoAPI of availableAPIs) {
		const dataAPI = await db.dataAPI.findById(geoAPI);
		await axios.get(`${dataAPI.url}/?f=pjson`).then(res => {
			const fields = res.data.fields
				? res.data.fields.map(field => field.name)
				: [];
			apiFields[geoAPI] = fields;
		});
	}

	const indicatorArr = await db.dataManifest.find(query).then(dbModel => {
		return dbModel.filter(
			item =>
				apiFields[item.API].includes(item.Variable) && 
        item.ESTMOE !== 'MOE' &&
        item.Type !== 'Flag' &&
        item.Type !== 'Text'
		);
	});

	const sources = {};
	const categories = {};

	indicatorArr.forEach(item => {
		const source = item.Source.replace(/"/g, '');
		const category = item.Category.replace(/[[]/g, '');

		!sources[source]
			? (sources[source] = { name: source, count: 1 })
			: (sources[source].count += 1);

		!categories[category]
			? (categories[category] = {
					name: category,
					count: 1
			  })
			: (categories[category].count += 1);
	});

	return {
		count: indicatorArr.length,
		sources: Object.values(sources),
		categories: Object.values(categories)
	};
};

const init = async configName => {
	try {
		if (!configName) throw new Error('No config name arg');
		const config = await db.defaultConfig.findOne({ name: configName });
		console.log('Config fetched.');

		for await (const geo of config.geoAPIs) {
			const statObj = await getStatsByGeo(config.dataAPIs, geo);

			config.states.layers[geo].stats = statObj;
			console.log(geo, 'complete.');
		}
		console.log('Updating Config...');

		await db.defaultConfig
			.findOneAndUpdate({ name: configName }, { states: config.states })
			.then(() => {
				console.log('Config updated.');
				process.exit(0);
			});
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

init(process.argv[2]);
