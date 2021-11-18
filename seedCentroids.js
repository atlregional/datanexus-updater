require('dotenv').config();
const mongoose = require('mongoose');
const db = require('../models');
const axios = require('axios');
const turf = require('@turf/turf');

const constructURL = api => {
	const outFields = api.otherFields;
	outFields.push(api.joinField);
	const geoQuery = api.geoQuery ? `${api.geoField}='${api.geoQuery}'` : '1%3D1';

	const geoQueryFiltered = geoQuery.concat(
		api.preFilters.length > 0
			? ` AND (${api.preFilters
					.map(
						(preFilter, i) =>
							`${preFilter.conjugator ? ` ${preFilter.conjugator} ` : ''}${
								preFilter.field
							}='${preFilter.param}'`
					)
					.join('')})`
			: ''
	);

	return api.constructedURL
		? `${api.url}/query?where=${geoQueryFiltered}&SR=4326&outFields=${outFields}&f=geojson`
		: api.url;
};

const calculateCentroid = async geometry => {
	switch (geometry.type) {
		case 'Point':
			// Reversing coordinates on all returns for Leaflet config
			return [geometry.coordinates[1], geometry.coordinates[0]];
		case 'Polygon':
			if (geometry.coordinates[0]) {
				const centroid = turf.centroid(geometry);
				return [centroid.geometry.coordinates[1], centroid.geometry.coordinates[0]];
			}
			return [];
		case 'MultiPolygon':
			if (geometry.coordinates[0]) {
				const areaArr = geometry.coordinates
					.map(arr => {
						const polygon = turf.polygon(arr);
						return { area: turf.area(polygon), polygon: polygon };
					})
					.sort((a, b) => b.area - a.area);
				const centroidB = turf.centroid(areaArr[0].polygon);
				return [centroidB.geometry.coordinates[1], centroidB.geometry.coordinates[0]];
			}
			return [];
		default:
			return [];
	}
};

const getCentroids = async () => {
	const arr = [];
	const geoAPIs = await db.geoAPI.find({});

	for await (const api of geoAPIs) {
		const url = constructURL(api);

		const { data } = await axios.get(url);

		const obj = {};
		obj._id = api._id;
		obj.centroids = {};

		for await (const feature of data.features) {
			const centroid = await calculateCentroid(feature.geometry);
			obj.centroids[
				`${feature.properties[api.joinField]}`.replace(/[.]/g, '')
			] = centroid;
		}
		arr.push(obj);
		console.log(`${api._id} fetched.`);
	}
	return arr;
};

const runSeed = async () => {
	const centroidsArr = await getCentroids();

	await db.centroids
		.deleteMany({})
		.then(() =>
			db.centroids
				.insertMany(centroidsArr)
				.then(() => console.log('Centroids updated!'))
				.catch(err => {
					console.log(err);
					process.exit(1);
				})
		)
		.catch(err => {
			console.log(err);
			process.exit(1);
		});
	process.exit(0);
};

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(async () => {
		console.log('DB connected...');
		await runSeed();
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
	});