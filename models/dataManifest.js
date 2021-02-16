const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queryableAttributes = [
	'Variable',
	'Description',
	'Long',
	'Type',
	'ESTMOE',
	'Source',
	'Table',
	'Table2',
	'Years',
	'Release',
	'Category',
	'Topic',
	'Universe',
	'Notes',
	'API'
];

// const otherAttributes = ['ESTMOE', 'Source', 'Release', 'Table', 'Table2', 'Years'];

const dataManifestSchemaObj = {};

queryableAttributes.forEach(attribute => (dataManifestSchemaObj[attribute] = { type: String }));

// otherAttributes.forEach(attribute => (dataManifestSchemaObj[attribute] = { type: String }));

const dataManifestSchema = new Schema(dataManifestSchemaObj);

const dataManifest = mongoose.model('dataManifest', dataManifestSchema);

module.exports = dataManifest;
